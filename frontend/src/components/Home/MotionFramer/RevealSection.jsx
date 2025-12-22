import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const RevealSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default RevealSection;

// USAGE:
// <RevealSection className="py-16">
//   <h2>Our Amazing Clubs</h2>
//   <ClubGrid />
// </RevealSection>
