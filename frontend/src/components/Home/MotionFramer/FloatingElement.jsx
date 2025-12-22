import { motion } from "framer-motion";

const FloatingElement = ({ children, duration = 3 }) => {
  return (
    <motion.div
      animate={{
        y: [-10, 10, -10],
        rotate: [-5, 5, -5],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;

// USAGE:
// <FloatingElement>
//   <div className="badge badge-lg">🎉 Popular</div>
// </FloatingElement>
