import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const CountUp = ({ from = 0, to, duration = 2, suffix = "" }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration });
    return controls.stop;
  }, [to]);

  return (
    <motion.span className="text-4xl font-bold">
      {rounded}
      {suffix}
    </motion.span>
  );
};

export default CountUp;

// USAGE:
// <CountUp from={0} to={150} suffix="+ Clubs" />
// <CountUp from={0} to={5000} suffix="+ Members" />
