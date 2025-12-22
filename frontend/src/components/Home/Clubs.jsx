import Card from "./Card";
import Container from "../Shared/Container";
import axios from "axios";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import LoadingSpinner from "../Shared/LoadingSpinner";
import ErrorPage from "../../pages/ErrorPage";
import Search from "../Shared/Search";
import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import Filter from "../Shared/Filter";
import Sort from "../Shared/Sort";
import StaggerCards from "./MotionFramer/StaggerCards";

const Clubs = () => {
  const [searchText, setsearchText] = useState(""); //*search state
  const [selectedCategory, setSelectedCategory] = useState("all"); //* filter
  // const [selectedSort, setSelectedSort] = useState("membershipFee");
  // const [SortOrder, setSortOrder] = useState("desc");
  const [sort, setsort] = useState("newest");

  const [order, setorder] = useState("");

  //* filter

  const Debounceseearch = useDebounce(searchText, 300); //*search hook Debounceseearch
  const {
    isLoading,
    isError,
    data: clubs = [],
    // refetch,
  } = useQuery({
    queryKey: ["clubs", Debounceseearch, selectedCategory, sort, order], //* Debounceseearch + filter call for change
    queryFn: async () => {
      const result = await axios(
        `${import.meta.env.VITE_API_URL}/clubs?searchText=${encodeURIComponent(
          Debounceseearch //*search url query - Debounceseearch + filter
        )}&selectedCategory=${selectedCategory}&sort=${sort}&order=${order}`
        //*set search url query - for Debounceseearch (? query symbol ) "?searchText=${encodeURIComponent(Debounceseearch)}"+ for filter : "&selectedCategory=${selectedCategory}" + for sort: "&selectedSort=${selectedSort}" + for order : &SortOrder=${SortOrder}
      );

      return result.data;
    },
  });

  // console.log({ clubs, Debounceseearch }); //* console Debounceseearch
  console.log({
    clubs,
    search: Debounceseearch,
    category: selectedCategory,
    // sort: selectedSort,
    sort: sort,
  });

  // if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  // if (isError) return <ErrorPage></ErrorPage>;
  return (
    <Container>
      <div className="text-center">
        <h1 className="text-7xl mt-7 text-center font-medium text-primary-700 border-b-3 border-red-400 inline  cursor-pointer">
          Club
        </h1>
      </div>

      {/* components */}
      <div className="flex-col md:flex justify-between  mt-14 gap-5">
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
              datas={clubs}
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
      {/* components end */}

      {clubs && clubs.length > 0 ? (
        <div
          className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   xl:grid-cols-4  2xl:grid-cols-6 

        gap-8"
        >
          {/* {console.log("inner", clubs)} */}
          {isLoading ? (
            <LoadingSpinner></LoadingSpinner> //* search loading
          ) : isError ? (
            <ErrorPage></ErrorPage> //* search error
          ) : (
            clubs.map((club) => <Card key={club._id} club={club} />)
          )}
        </div>
      ) : null}
    </Container>
  );
};

export default Clubs;
