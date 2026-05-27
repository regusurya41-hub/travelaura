import { motion } from "framer-motion";
import { fadeUp } from "../../animations/variants";

export function PageWrapper({ children, className = "" }) {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className={`mx-auto min-h-[calc(100vh-145px)] max-w-7xl px-4 py-8 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </motion.main>
  );
}
