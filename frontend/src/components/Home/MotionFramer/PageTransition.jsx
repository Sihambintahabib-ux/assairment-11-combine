import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;

// USAGE in router:
// <AnimatePresence mode="wait">
//   <Routes location={location} key={location.pathname}>
//     <Route path="/" element={
//       <PageTransition><Home /></PageTransition>
//     } />
//   </Routes>
// </AnimatePresence>
