export const transition = {
  ease: [0.6, 0.01, 0, 0.9],
  duration: 1,

  // repeat: Infinity,
  // repeatType: 'mirror',
}

export const imgContainerVariant = {

  initial: {

  },
  exit: {},

  initial1: {
    x: '10%',
    scale: .85
  },
  animate1: {
    x: 0,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: [.33, 1, .68, 1],
      delay: .5
    }
  }
}

export const outerDivWrapper = {

}

export const innerDivWrapperVariants = {
  exit: {

  },
}

export const imgOverVariants = {
  initial: {},
  animate: {},

  initial1: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: .17,
      staggerDirection: 1,
    }
  },

  animate1: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: .17,
      staggerDirection: -1,
    }
  }
};

export const imgCover = {
  initial1: {x: 0},

  animate1: {
    x: '110%',
  }
};


export const effectVariant = {
  exit: {
    transition: {
      duration: 1,
    }
  },

  initial1: {
    y: '100%'
  },
  animate1: {
    y: 0,
    transition: {
      duration: 1,
      ease: [.65, 0, 0.35, 1],
      delay: 1.3
    }
  }
}