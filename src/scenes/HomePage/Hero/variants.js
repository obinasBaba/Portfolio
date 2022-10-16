export const greetingTextVariants = {
  initial: {
    opacity: 0,
    y: -200,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -200,
  },

  /* transition: {
     duration: 0.8,
   },*/
};

export const introContainerVariants = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 200,
  },

  /* transition: {
     duration: 0.8,
   },*/
};

export const btnVariants = {
  initial: {
    opacity: 0,
    x: -60,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    y: 200,
  },

  /*transition: {
    duration: 0.8,
  },*/
};

export const textContainerVariants = {
  animate: {
    transition: {
      // delayChildren: .8,
      staggerChildren: 0.2,
    },
  },
};

export const transition = {
  duration: 0.8,
};
