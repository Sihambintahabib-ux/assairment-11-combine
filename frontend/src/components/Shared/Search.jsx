import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { toNamespacedPath } from "path";
import React from "react";
// import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import ErrorPage from "../../pages/ErrorPage";

const Search = ({ searchText, setsearchText }) => {
  // const [searchText, setsearchText] = useState("");
  //!
  // const [products, setproducts] = useState(data);
  // const [loading, setloading] = useState(false);
  // const handlesearch = (e) => {
  //   e.preventDefault();
  //   const search_text = e.target.search.value;
  //   console.log(search_text);
  //   setloading(true);

  //   fetch(`https://assairment10.vercel.app/search?search=${search_text}`)
  //     .then((result) => result.json())
  //     .then((data) => {
  //       toNamespacedPath.success("search successful");
  //       console.log(data, "user after save");
  //       setproducts(data);
  //       setloading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  //!
  const handlesearchOnchange = (e) => {
    // const search_text = e.target.search.value;
    setsearchText(e.target.value);
  };
  //===========//
  // const {
  //   isLoading,
  //   isError,
  //   data: searchData = [],
  //   // refetch,
  // } = useQuery({
  //   queryKey: ["searchData"],
  //   queryFn: async () => {
  //     const result = await axios(
  //       `${import.meta.env.VITE_API_URL}/search?searchText=${searchText}`
  //     );
  //     return result.data;
  //   },
  // });
  // console.log(searchData);
  // if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  // if (isError) return <ErrorPage></ErrorPage>;
  return (
    <div>
      <p>search: {searchText}</p>
      <form
        // onSubmit={handlesearch}
        className="flex items-center justify-center gap-5 mb-8 "
      >
        <label className="input border  rounded-full w-1xl ">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={handlesearchOnchange}
            name="search"
            type="search"
            placeholder="Search"
          />
        </label>
        {/* <div> */}
        <button className="btn btn-secondary rounded-full ">Search</button>
        {/* </div> */}
      </form>
    </div>
  );
};

export default Search;
