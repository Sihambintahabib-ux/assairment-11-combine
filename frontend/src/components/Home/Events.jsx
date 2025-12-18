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
import EventCard from "./EventCard";

const Events = () => {
  const {
    isLoading,
    isError,
    data: events = [],
    // refetch,
  } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const result = await axios(`${import.meta.env.VITE_API_URL}/events`);
      return result.data;
    },
  });
  console.log(events);
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  if (isError) return <ErrorPage></ErrorPage>;
  return (
    <Container>
      <div className="text-center">
        <h1 className="text-7xl mt-7 text-center font-medium text-primary-700 border-b-3 border-red-400 inline  cursor-pointer">
          Events
        </h1>
      </div>
      {events && events.length > 0 ? (
        <div
          className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   xl:grid-cols-5  2xl:grid-cols-6 

        gap-8"
        >
          {console.log("inner", events)}
          {events.map((data) => (
            <EventCard key={data._id} data={data} />
          ))}
        </div>
      ) : null}
    </Container>
  );
};

export default Events;
