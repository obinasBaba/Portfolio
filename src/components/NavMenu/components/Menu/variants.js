export const transition = {
  duration: 1,
  ease: [0.6, 0.01, 0, 0.9],
};

export const containerVariants = {
  initial: {},

  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 1.5,
    },
  },

  exit: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0,
      staggerDirection: -1,
    },
  },
};

export const itemVariants = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },

  animate: {
    opacity: 1,
    scale: 1,
  },

  exit: {
    opacity: 0,
    scale: 0,

    transition: {
      opacity: {
        ...transition,
        duration: 0.7,
      },
      ...transition,
    },
  },
};

export const circleVariants = {
  initial: {
    scale: 1,
  },
  animate: {},
  exit: {},
};

export const iconVariants = {
  initial: {
    opacity: 0,
    x: "-50%",
    y: "-50%",
  },

  animate: {},

  hover: {
    opacity: 1,
    scale: 0.8,
    transition: {
      delay: 0.2,
    },
  },
};

export const starVariants = {
  initial: {
    opacity: 0,
    scale: 1.2,
    x: "-50%",
    y: "-50%",
  },

  animate: {},

  hover: {
    scale: 0.8,
    opacity: 1,
    rotate: -20,

    transition: {
      // delay: .17
    },
  },
};
