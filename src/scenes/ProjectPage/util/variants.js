
export const topVariant = {}

export const parentVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0, 0.9],
      duration: 2,
    },
  },
  exit: {
    opacity: 0,
  },
}

export const moonVariants = {
  initial: {
    opacity: 0,
    scale: .9,
    x: 50
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 1.5,
      delay: .8,
      ease: [0.6, 0.01, 0, 0.9],
    },
  },

  exit: {
    opacity: 0,
    scale: .8,
    x: 100,
    transition: {
      duration: 1.5,
      delay: .6,
      ease: [0.6, 0.01, 0, 0.9],
    },
  }
}