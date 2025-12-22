import { motion } from "framer-motion";
import {
  FaSearch,
  FaUsers,
  FaCalendarCheck,
  FaCreditCard,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaSearch />,
    title: "Discover Clubs",
    description:
      "Browse a wide range of local clubs based on your interests such as photography, sports, tech, and more.",
  },
  {
    id: 2,
    icon: <FaUsers />,
    title: "Join a Community",
    description:
      "Join clubs for free or pay a membership fee securely to become an official member and connect with others.",
  },
  {
    id: 3,
    icon: <FaCalendarCheck />,
    title: "Attend Events",
    description:
      "Register for club events, participate in activities, and grow your skills through real experiences.",
  },
  {
    id: 4,
    icon: <FaCreditCard />,
    title: "Easy & Secure Payments",
    description:
      "Pay membership or event fees safely using Stripe with fast and secure checkout.",
  },
];

const HowClubSphereWorks = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
            How ClubSphere Works
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Joining and managing clubs has never been easier. Follow these
            simple steps to get started with ClubSphere.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-orange-500 text-white text-2xl mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowClubSphereWorks;
