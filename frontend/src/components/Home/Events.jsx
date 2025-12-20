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

const Events = () => {
  const axiosSecure = useAxiosSecure();
  const [searchText, setsearchText] = useState(""); //*search state
  const Debounceseearch = useDebounce(searchText, 300); //*search hook Debounceseearch
  const {
    isLoading,
    isError,
    data: events = [],
    // refetch,
  } = useQuery({
    queryKey: ["events", Debounceseearch], //* Debounceseearch call for change
    queryFn: async () => {
      const result = await axiosSecure(
        `/events?searchText=${encodeURIComponent(
          Debounceseearch //*search url query
        )}`
      );
      return result.data;
    },
  });
  console.log({ events, Debounceseearch }); //* console Debounceseearch
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
      <div className="flex justify-between mt-10">
        <Search searchText={searchText} setsearchText={setsearchText}></Search>
        <p>d</p>
      </div>
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
