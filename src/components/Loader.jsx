// npm
import { motion } from "framer-motion";

// files
import { ContainerVariants, DotVariants, DotTransition } from "../animations";

export default function Loader() {
  return (
    <div className="loader">
      <fieldset disabled>
        <motion.div
          className="container"
          variants={ContainerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="dot"
            variants={DotVariants}
            transition={DotTransition}
          ></motion.div>
          <motion.div
            className="dot"
            variants={DotVariants}
            transition={DotTransition}
          ></motion.div>
          <motion.div
            className="dot"
            variants={DotVariants}
            transition={DotTransition}
          ></motion.div>
        </motion.div>
      </fieldset>
    </div>
  );
}
