import Container from "../../components/Shared/Container";
import Heading from "../../components/Shared/Heading";
import Button from "../../components/Shared/Button/Button";
import PurchaseModal from "../../components/Modal/PurchaseModal";
import { useState } from "react";
import { Link, useParams } from "react-router";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import ErrorPage from "../ErrorPage";
import EventJoinModel from "../../components/Modal/EventJoinModel";
import toast from "react-hot-toast";
// import useAuth from "../../hooks/useAuth";

const EventsDetails = () => {
  // const { user } = useAuth();
  let [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  console.log(id);
  const {
    isLoading,
    isError,
    data: events = [],
    // refetch,
  } = useQuery({
    queryKey: ["events", id],
    queryFn: async () => {
      const result = await axios(
        `${import.meta.env.VITE_API_URL}/events/${id}`
      );
      return result.data;
    },
  });
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  if (isError) return <ErrorPage></ErrorPage>;
  const closeModal = () => {
    setIsOpen(false);
  };
  console.log(events);

  const {
    title,
    description,
    eventDate,
    location,
    isPaid,
    eventFee,
    maxAttendees,
    // update,
    // delete,
    // clubName,
    managerEmail,
    // membershipFee,
    // location,
    // status,
    bannerImage,
    // category,
  } = events;
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
            <Heading title={title} subtitle={`description: ${description}`} />
            <p className="font-light ">{`location: ${location}`}</p>
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
              date: {eventDate}
            </p>
          </div>
          <hr className="my-6" />
          <div className="flex justify-between">
            <p className="font-bold text-3xl text-gray-500">
              Price: ${eventFee}
            </p>
            <Link to="/dashboard/my-events">
              <div>
                <Button
                  onClick={() => {
                    setIsOpen(true);
                    toast.success("event joint successfull");
                  }}
                  label="Join now"
                />
              </div>
            </Link>
          </div>
          <hr className="my-6" />

          <EventJoinModel
            id={id}
            events={events}
            closeModal={closeModal}
            isOpen={isOpen}
          />
        </div>
      </div>
    </Container>
  );
};

export default EventsDetails;
