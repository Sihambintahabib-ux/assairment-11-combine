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

const Clubs = () => {
  const {
    isLoading,
    isError,
    data: clubs = [],
    // refetch,
  } = useQuery({
    queryKey: ["clubs"],
    queryFn: async () => {
      const result = await axios(`${import.meta.env.VITE_API_URL}/clubs`);
      return result.data;
    },
  });
  console.log(clubs);
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  if (isError) return <ErrorPage></ErrorPage>;
  return (
    <Container>
      <div>
        <h1 className="text-4xl mt-7 text-center font-bold text-primary-700 cursor-pointer">
          Club
        </h1>
      </div>
      {clubs && clubs.length > 0 ? (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {console.log("inner", clubs)}
          {clubs.map((club) => (
            <Card key={club._id} club={club} />
          ))}
        </div>
      ) : null}
    </Container>
  );
};

export default Clubs;
