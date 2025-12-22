import { motion } from "framer-motion";

const HoverScale = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default HoverScale;

// USAGE:
// <HoverScale>
//   <div className="card">
//     <h2>Photography Club</h2>
//   </div>
// </HoverScale>
