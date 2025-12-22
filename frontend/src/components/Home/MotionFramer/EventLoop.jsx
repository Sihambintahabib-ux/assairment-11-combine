import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useDebounce from "../../../hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import ErrorPage from "../../../pages/ErrorPage";
import { Link, Links } from "react-router";

const EventLoop = () => {
  const axiosSecure = useAxiosSecure();
  const {
    isLoading,
    isError,
    data: events = [],
    // refetch,
  } = useQuery({
    queryKey: ["events"], //* Debounceseearch call for change
    queryFn: async () => {
      const result = await axiosSecure(`/events`);
      return result.data;
    },
  });
  console.log({ events });
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  if (isError) return <ErrorPage></ErrorPage>;

  return (
    <div>
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-center mb-6">
          Our Upcomming Events
        </h3>
        <div className="overflow-hidden">
          <motion.div
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,
                ease: "linear",
              },
            }}
            className="flex gap-12 items-center"
          >
            {[...events, ...events].map((item, index) => (
              <motion.div
                key={`logo-${index}`}
                whileHover={{ scale: 1.1 }}
                className="shrink-0 w-50 h-60 bg-base-100 rounded-lg shadow-lg flex items-center justify-center p-4 "
              >
                <Link to={`/events/${item._id}`}>
                  <img
                    src={item.bannerImage}
                    alt={item.club}
                    className="w-full h-full object-cover rounded"
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EventLoop;
