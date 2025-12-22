import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InfiniteCarousel = () => {
  // Sample data - replace with your actual events/clubs
  const items = [
    {
      id: 1,
      title: "Photography Workshop",
      club: "Photography Club",
      image:
        "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&h=300&fit=crop",
      date: "Dec 25, 2024",
      attendees: 45,
    },
    {
      id: 2,
      title: "Sports Tournament",
      club: "Sports Club",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop",
      date: "Jan 10, 2025",
      attendees: 120,
    },
    {
      id: 3,
      title: "Tech Summit 2025",
      club: "Tech Club",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      date: "Jan 15, 2025",
      attendees: 80,
    },
    {
      id: 4,
      title: "Art Exhibition",
      club: "Art Club",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop",
      date: "Jan 20, 2025",
      attendees: 60,
    },
    {
      id: 5,
      title: "Music Festival",
      club: "Music Club",
      image:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop",
      date: "Feb 1, 2025",
      attendees: 200,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play: Move to next slide every 3 seconds
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, items.length]);

  const slideVariants = {
    enter: {
      x: 1000,
      opacity: 0,
      scale: 0.8,
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: {
      x: -1000,
      opacity: 0,
      scale: 0.8,
    },
  };

  const currentItem = items[currentIndex];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Title */}
      {/* <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl font-bold mb-2">Featured Events</h2>
        <p className="text-gray-600">Auto-playing carousel • Infinite loop</p>
      </motion.div> */}
      {/* Main Carousel Container */}
      {/* <div
        className="relative h-[500px] bg-base-200 rounded-2xl overflow-hidden shadow-2xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 },
            }}
            className="absolute w-full h-full"
          >
            Event Card
            <div className="relative w-full h-full flex items-center justify-center p-8">
              <div className="card lg:card-side bg-base-100 shadow-2xl max-w-4xl w-full">
                Image
                <figure className="lg:w-1/2">
                  <img
                    src={currentItem.image}
                    alt={currentItem.title}
                    className="w-full h-full object-cover"
                  />
                </figure>

                Content
                <div className="card-body lg:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="badge badge-primary mb-4">
                      {currentItem.club}
                    </div>
                    <h2 className="card-title text-3xl mb-4">
                      {currentItem.title}
                    </h2>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-gray-600">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="font-semibold">
                          {currentItem.date}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-gray-600">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        <span className="font-semibold">
                          {currentItem.attendees} attending
                        </span>
                      </div>
                    </div>

                    <div className="card-actions">
                      <button className="btn btn-primary">View Details</button>
                      <button className="btn btn-outline">Register</button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        Pause/Play Button
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="absolute top-4 right-4 btn btn-circle btn-sm bg-black/50 border-none text-white hover:bg-black/70 z-10"
        >
          {isPaused ? "▶️" : "⏸️"}
        </button>

        Manual Navigation Arrows
        <button
          onClick={() =>
            setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 btn btn-circle btn-primary z-10 opacity-50 hover:opacity-100"
        >
          ❮
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % items.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 btn btn-circle btn-primary z-10 opacity-50 hover:opacity-100"
        >
          ❯
        </button>
      </div> */}
      {/* Progress Dots */}
      {/* <div className="flex justify-center gap-2 mt-6">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all ${
              index === currentIndex
                ? "w-8 h-3 bg-primary rounded-full"
                : "w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400"
            }`}
          />
        ))}
      </div> */}
      {/* Auto-play Info */}
      {/* <div className="text-center mt-6 text-sm text-gray-500">
        {isPaused ? (
          <span>⏸️ Carousel paused (hover to pause)</span>
        ) : (
          <span>▶️ Auto-playing • Changes every 3 seconds</span>
        )}
      </div> */}
      {/* Horizontal Infinite Scroll Banner */}
      {/* <div className="mt-12 overflow-hidden bg-primary py-4">
        <motion.div
          animate={{
            x: [0, -1920], // Move left continuously
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex gap-8 whitespace-nowrap"
        >
          Duplicate items for seamless loop
          {[...items, ...items, ...items].map((item, index) => (
            <div
              key={`banner-${index}`}
              className="inline-flex items-center gap-3 text-white"
            >
              <span className="text-2xl">⭐</span>
              <span className="font-semibold text-lg">{item.title}</span>
              <span className="text-primary-content/70">•</span>
            </div>
          ))}
        </motion.div>
      </div> */}
      Logo Carousel (Infinite Horizontal Scroll)
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-center mb-6">
          Our Partner Clubs
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
            {[...items, ...items].map((item, index) => (
              <motion.div
                key={`logo-${index}`}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 w-32 h-32 bg-base-100 rounded-lg shadow-lg flex items-center justify-center p-4"
              >
                <img
                  src={item.image}
                  alt={item.club}
                  className="w-full h-full object-cover rounded"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* Vertical Infinite Scroll Ticker */}
      {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        Left: Event Ticker
        <div className="bg-base-200 rounded-xl p-6 h-96 overflow-hidden">
          <h3 className="text-xl font-bold mb-4">📅 Upcoming Events</h3>
          <motion.div
            animate={{
              y: [0, -1000],
            }}
            transition={{
              y: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="space-y-4"
          >
            {[...items, ...items, ...items].map((item, index) => (
              <div
                key={`ticker-${index}`}
                className="bg-base-100 p-4 rounded-lg shadow"
              >
                <h4 className="font-bold">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.club}</p>
                <p className="text-xs text-gray-500 mt-1">{item.date}</p>
              </div>
            ))}
          </motion.div>
        </div>
        Right: Stats with Count Animation
        <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-6 text-white">
          <h3 className="text-xl font-bold mb-6">Platform Stats</h3>
          <div className="space-y-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              <div className="text-5xl font-bold">150+</div>
              <div className="text-primary-content/80">Active Clubs</div>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.4 }}
            >
              <div className="text-5xl font-bold">5,000+</div>
              <div className="text-primary-content/80">Members</div>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.6 }}
            >
              <div className="text-5xl font-bold">300+</div>
              <div className="text-primary-content/80">Events This Month</div>
            </motion.div>
          </div>
        </div>
      </div> */}
      {/* Tips */}
      {/* <div className="mt-8 bg-info/10 border border-info rounded-lg p-4 text-sm">
        <p className="font-semibold text-info mb-2">💡 Interactive Features:</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Hover over carousel to pause auto-play</li>
          <li>Click arrows or dots for manual navigation</li>
          <li>Watch the infinite scrolling banners below!</li>
        </ul>
      </div> */}
    </div>
  );
};

export default InfiniteCarousel;
