export const moonAndStarVariants = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

export const moonVariants = {
  initial: {
    y: '-100%',
    scale: 0.3,
    opacity: 0,
  },

  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
  },

  exit: {
    y: '-100%',
    scale: 0.3,
    opacity: 0,
    transition: {
      duration: 1,
      ease: [0.6, 0.01, 0, 0.9],
    },
  },
};

export const moonTransition = {
  duration: 1.4,
  ease: [0.6, 0.01, 0, 0.9],
};

export const starVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};
export const starItemVariants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 0,
    opacity: 0,
  },
};

export const containerVariant = {
  animate: {
    transition: {
      // delayChildren: .8,
    },
  },
};

export const transition = {
  duration: 2,
  ease: [0.6, 0.01, 0, 0.9],
};
