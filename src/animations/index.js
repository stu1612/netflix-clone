export const navVarient = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: -10, opacity: 0 },
};

export const ContainerVariants = {
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

export const DotVariants = {
  initial: {
    y: "0%",
    scale: 1,
  },
  animate: {
    y: "100%",
    scale: 1.3,
  },
};

export const DotTransition = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "linear",
};
