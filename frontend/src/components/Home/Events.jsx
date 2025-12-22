import Card from "./Card";
import Container from "../Shared/Container";
// import axios from "axios";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import LoadingSpinner from "../Shared/LoadingSpinner";
import ErrorPage from "../../pages/ErrorPage";
import EventCard from "./EventCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import Search from "../Shared/Search";
import Filter from "../Shared/Filter";
import Sort from "../Shared/Sort";

const Events = () => {
  const axiosSecure = useAxiosSecure();
  const [searchText, setsearchText] = useState(""); //*search state
  const Debounceseearch = useDebounce(searchText, 300); //*search hook Debounceseearch
  const [selectedCategory, setSelectedCategory] = useState("all"); //* filter
  // const [selectedSort, setSelectedSort] = useState("membershipFee");
  // const [SortOrder, setSortOrder] = useState("desc");
  const [sort, setsort] = useState("newest");
  const [order, setorder] = useState("");
  const {
    isLoading,
    isError,
    data: events = [],
    // refetch,
  } = useQuery({
    queryKey: ["events", Debounceseearch, selectedCategory, sort, order], //* Debounceseearch call for change
    queryFn: async () => {
      const result = await axiosSecure(
        `/events?searchText=${encodeURIComponent(
          Debounceseearch //*search url query - Debounceseearch + filter
        )}&selectedCategory=${selectedCategory}&sort=${sort}&order=${order}`
      );
      return result.data;
    },
  });
  console.log({
    events,
    search: Debounceseearch,
    category: selectedCategory,
    // sort: selectedSort,
    sort: sort,
  }); //* console Debounceseearch

  // if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  // if (isError) return <ErrorPage></ErrorPage>;
  return (
    <Container>
      <div className="text-center">
        <h1 className="text-7xl mt-7 text-center font-medium text-primary-700 border-b-3 border-red-400 inline  cursor-pointer">
          Events
        </h1>
      </div>
      {/* search components */}
      <div className="flex-col md:flex  justify-between mt-14 gap-5">
        {/* search + filter components */}
        <div className="flex justify-center  gap-5">
          <Search
            searchText={searchText}
            setsearchText={setsearchText}
          ></Search>
          {/* //* filter components */}
          <div className="flex-col md:flex ">
            <Filter
              selectedCategory={selectedCategory}
              datas={events}
              setSelectedCategory={setSelectedCategory}
            ></Filter>
            {/* //* CONDITION OF filter components - filter tag show condition*/}
            {selectedCategory !== "all" && (
              <div className="badge badge-secondary gap-2">
                {selectedCategory}
                <button onClick={() => setSelectedCategory("all")}>✕</button>
              </div>
            )}
          </div>
        </div>
        {/* Sort components */}
        <div>
          {/* <Sort selectedSort={selectedSort}  setSelectedSort={setSelectedSort} /> */}
          {/* <Sort sort={sort} setshort={setshort} /> */}

          <div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">🔄 Sort By</span>
              </label>
              <select
                className="select select-bordered"
                // value={selectedSort}
                value={sort}
                onChange={(e) => {
                  // setSelectedSort(e.target.value);
                  setsort(e.target.value);

                  const sortText = e.target.value;
                  setsort(sortText.split("-")[0]);

                  setorder(sortText.split("-")[1]);

                  console.log(e.target.value);
                }}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="az">Name (A-Z)</option>
                <option value="za">Name (Z-A)</option>
                <option value="feelow">Lowest Fee First</option>
                <option value="feehigh">Highest Fee First</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* end */}
      {events && events.length > 0 ? (
        <div
          className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   xl:grid-cols-4  2xl:grid-cols-6 

        gap-8"
        >
          {/* {console.log("inner", events)} */}
          {isLoading ? (
            <LoadingSpinner></LoadingSpinner> //* search loading
          ) : isError ? (
            <ErrorPage></ErrorPage> //* search error
          ) : (
            events.map((data) => <EventCard key={data._id} data={data} />)
          )}
        </div>
      ) : null}
    </Container>
  );
};

export default Events;
