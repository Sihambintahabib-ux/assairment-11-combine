import Container from "../../components/Shared/Container";
import Heading from "../../components/Shared/Heading";
import Button from "../../components/Shared/Button/Button";
import PurchaseModal from "../../components/Modal/PurchaseModal";
import { useState } from "react";
import { Link, Links, useParams } from "react-router";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import ErrorPage from "../ErrorPage";
import ClubMemberJoin from "../../components/Modal/ClubMemberJoin";
// import useAuth from "../../hooks/useAuth";

const ClubsDetails = () => {
  // const { user } = useAuth();
  let [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  console.log(id);
  const {
    isLoading,
    isError,
    data: clubs = [],
    // refetch,
  } = useQuery({
    queryKey: ["clubs", id],
    queryFn: async () => {
      const result = await axios(`${import.meta.env.VITE_API_URL}/clubs/${id}`);
      return result.data;
    },
  });
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  if (isError) return <ErrorPage></ErrorPage>;
  const closeModal = () => {
    setIsOpen(false);
  };
  console.log(clubs);
  const {
    _id,
    bannerImage,
    category,
    clubName,
    description,
    location,
    managerEmail,
    membershipFee,
    status,
    // updateAt,
  } = clubs || {};
  return (
    <Container>
      <div className="mx-auto flex flex-col lg:flex-row justify-between w-full gap-12">
        {/* Header */}
        <div className="flex flex-col gap-6 flex-1">
          <div>
            <div className="w-full overflow-hidden rounded-xl">
              <img
                className="object-cover w-full"
                src={bannerImage}
                alt="header image"
              />
            </div>
          </div>
        </div>
        <div className="md:gap-10 flex-1">
          {/* Plant Info */}
          <div className="flex justify-between">
            <Heading title={clubName} subtitle={`Category: ${category}`} />
            <p className="font-light ">{`Status: ${status}`}</p>
          </div>
          <hr className="my-6" />
          <div
            className="
          text-lg font-light text-neutral-500"
          >
            {description}
          </div>
          <hr className="my-6" />

          <div
            className="
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
              "
          >
            <div>{managerEmail}</div>

            {/* <img
              className="rounded-full"
              height="300"
              width="30"
              alt="User image"
              referrerPolicy="no-referrer"
              src={user?.photoURL}
            /> */}
          </div>
          <hr className="my-6" />
          <div>
            <p
              className="
                gap-4 
                font-light
                text-neutral-500
              "
            >
              Location: {location}
            </p>
          </div>
          <hr className="my-6" />
          <div className="flex justify-between">
            <p className="font-bold text-3xl text-gray-500">
              Price: ${membershipFee}
            </p>
            <div>
              {" "}
              <Button onClick={() => setIsOpen(true)} label="Join now" />
            </div>
          </div>
          <hr className="my-6" />
          {/* <Link to="/"> */}

          <ClubMemberJoin
            id={id}
            clubs={clubs}
            closeModal={closeModal}
            isOpen={isOpen}
          ></ClubMemberJoin>
          {/* </Link> */}
        </div>
      </div>
    </Container>
  );
};

export default ClubsDetails;
