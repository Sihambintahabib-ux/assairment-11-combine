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

const Clubs = () => {
  const [searchText, setsearchText] = useState(""); //*search state
  // const [selectedCategory, setSelectedCategory] = useState("all"); // filter

  const Debounceseearch = useDebounce(searchText, 300); //*search hook Debounceseearch
  const {
    isLoading,
    isError,
    data: clubs = [],
    // refetch,
  } = useQuery({
    queryKey: ["clubs", Debounceseearch], //* Debounceseearch call for change
    queryFn: async () => {
      const result = await axios(
        `${import.meta.env.VITE_API_URL}/clubs?searchText=${encodeURIComponent(
          Debounceseearch //*search url query - Debounceseearch
        )}`
      );
      return result.data;
    },
  });

  console.log({ clubs, Debounceseearch }); //* console Debounceseearch
  // if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  // if (isError) return <ErrorPage></ErrorPage>;
  return (
    <Container>
      <div className="text-center">
        <h1 className="text-7xl mt-7 text-center font-medium text-primary-700 border-b-3 border-red-400 inline  cursor-pointer">
          Club
        </h1>
      </div>
      {/* search components */}
      <div className="flex justify-center mt-14 gap-5">
        <Search searchText={searchText} setsearchText={setsearchText}></Search>
        <Filter></Filter>
      </div>
      {clubs && clubs.length > 0 ? (
        <div
          className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   xl:grid-cols-4  2xl:grid-cols-6 

        gap-8"
        >
          {console.log("inner", clubs)}

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
