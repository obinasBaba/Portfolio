export const transition = {
  ease: [0.6, 0.01, 0, 0.9],
  duration: 1.5,

  // repeat: Infinity,
  // repeatType: 'mirror',
}

export const imgContainerVariant = {
  initial: {
    x: '10%',
    scale: 0.85,
    transition: {
      duration: 0,
    },
  },

  animate: {
    x: 0,
    scale: 1,
    transition: {
      duration: 0,
    },
  },

  exit(c) {
    if (c && c.path && c && c.path.startsWith('/portfolio')) return {}
    else
      return {
        opacity: 0,
        scale: 0.92,
      }
  },

  animateFp(c) {
    return {
      x: 0,
      scale: 1,
      transition: {
        default: {
          duration: 1.5,
          ease: [0.33, 1, 0.68, 1],
          // ease:  [0.6, 0.01, 0, 0.9],
          delay: 0.5,
        },
      },
    }
  },

  exitFp: {
    x: '10%',
    scale: 0.83,
  },
}

export const imgVariant = {
  initial: {
    filter: 'grayscale(100%) sepia(20%) brightness(80%)',
    transition: {
      duration: 0,
    },
  },

  animate: {
    filter: 'grayscale(0%) sepia(0%) brightness(100%)',
    transition: {
      duration: 0,
    },
  },

  initialFp: {
    filter: 'grayscale(100%) sepia(20%) brightness(80%)',
    transition: {
      duration: 1.5,
      delay: 0.5,
      ease: [0.33, 1, 0.68, 1],
    },
  },

  animateFp: {
    filter: 'grayscale(0%) sepia(0%) brightness(100%)',
    transition: {
      duration: 1.5,
      ease: [0.33, 1, 0.68, 1],
      delay: 1.3,
    },
  },

  exitFp: {
    filter: 'grayscale(100%) sepia(20%) brightness(80%)',
    transition: {
      duration: 1,
      delay: 0.2,
      ease: [0.33, 1, 0.68, 1],
    },
  },
}

export const innerVariant = {
  initial: {
    scale: 1,
  },

  animateFp: {
    scale: 1,
  },

  hover: {
    scale: 1.05,
  },
}

export const imgOverVariants = {
  animateFp: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.17,
      staggerDirection: -1,
    },
  },

  exitFp: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.17,
      staggerDirection: 1,
    },
  },
}

export const imgCover = {
  initial: {
    x: 0,
    transition: {
      duration: 0,
    },
  },

  //we want to find it just like as we leave it for
  // the case-study page transition
  animate: {
    x: '110%',
    transition: {
      duration: 0,
    },
  },

  initialFp: {
    x: '0%',
  },

  animateFp: {
    x: '110%',
  },
  exitFp: {
    x: 0,
  },
}

export const effectVariant = {
  initial: {
    y: '100%',
  },

  exit: {
    y: '100%',
    transition: {
      duration: 0.7,
    },
  },

  initialFp: {
    y: '100%',
  },

  animateFp(c) {
    // console.log('effect animateFp', c)
    return {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.65, 0, 0.35, 1],
        delay: c.exit ? 0 : 1.2,
      },
    }
  },
  exitFp: {
    y: '100%',
  },
}
