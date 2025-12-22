import { motion } from "framer-motion";

const ProgressBar = ({ progress, label = "" }) => {
  return (
    <div className="w-full">
      {label && <div className="text-sm mb-2">{label}</div>}
      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;

// USAGE:
// <ProgressBar progress={75} label="75% Complete" />
