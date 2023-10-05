import { motion, MotionValue, Variants } from "framer-motion";
import { ReactNode } from "react";

const animations: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

type Props = {
  children: ReactNode | MotionValue<number> | MotionValue<string>;
};

const AnimatedPage = ({ children }: Props) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
