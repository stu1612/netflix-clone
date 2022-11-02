// npm
import { motion } from "framer-motion";

export default function Loader() {
  const ContainerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const DotVariants = {
    initial: {
      y: "0%",
      scale: 1,
    },
    animate: {
      y: "100%",
      scale: 1.3,
    },
  };

  const DotTransition = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "linear",
  };
  return (
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
  );
}
