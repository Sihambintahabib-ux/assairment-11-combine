import { motion } from "framer-motion";

const SlideIn = ({ children, direction = "left", delay = 0 }) => {
  const variants = {
    left: { x: -100, opacity: 0 },
    right: { x: 100, opacity: 0 },
    up: { y: 100, opacity: 0 },
    down: { y: -100, opacity: 0 },
  };

  return (
    <motion.div
      initial={variants[direction]}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;

// USAGE:
// <SlideIn direction="left" delay={0.3}>
//   <div>This slides in from the left</div>
// </SlideIn>
