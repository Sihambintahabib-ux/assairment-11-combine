import { motion } from "framer-motion";

const PulseButton = ({ children, onClick, className = "" }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`btn btn-primary ${className}`}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
      }}
      whileTap={{ scale: 0.9 }}
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.button>
  );
};

export default PulseButton;

// USAGE:
// <PulseButton onClick={handleJoinClub}>
//   Join Now
// </PulseButton>
