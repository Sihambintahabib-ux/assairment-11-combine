import { motion } from "framer-motion";
import { FaHandshake, FaLightbulb, FaChartLine, FaHeart } from "react-icons/fa";

const benefits = [
  {
    id: 1,
    icon: <FaHandshake />,
    title: "Build Meaningful Connections",
    description:
      "Meet people who share your interests and build long-lasting friendships through club activities.",
  },
  {
    id: 2,
    icon: <FaLightbulb />,
    title: "Learn & Grow Skills",
    description:
      "Gain practical knowledge, improve your skills, and learn from experienced members in your club.",
  },
  {
    id: 3,
    icon: <FaChartLine />,
    title: "Boost Your Career",
    description:
      "Participating in clubs enhances leadership, teamwork, and communication skills valued by employers.",
  },
  {
    id: 4,
    icon: <FaHeart />,
    title: "Enjoy & Stay Motivated",
    description:
      "Clubs keep you motivated by turning hobbies into enjoyable experiences and memorable moments.",
  },
];

const WhyJoinClub = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
            Why Join a Club?
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Clubs help you grow personally and professionally while enjoying
            what you love the most.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition text-center"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-orange-500 text-white text-2xl mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinClub;
