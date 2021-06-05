export const transition = {
  duration: 1,
  ease: [0.76, 0, 0.24, 1],
  // repeat: Infinity,
  // repeatType: 'mirror',
}

export const containerVariants = {
  initial: {
    x: '10%',
    scale: .85
  },
  animate: {
    x: 0,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: [.33, 1, .68, 1],
      delay: .3
    }
  }
}

export const outerDivWrapper = {}

export const imgOverVariants = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 1.3,
      staggerChildren: .14,
      staggerDirection: -1,
    }
  }
};

export const imgCover = {
  initial: {x: 0},
  animate: {
    x: '-110%',

  }
};

export const imgCover2 = {
  initial: {x: 0},
  animate: {
    x: '-110%',

  }
};

export const effectVariant = {
  initial: {
    y: '100%'
  },
  animate: {
    y: 0,
    transition: {
      delay: 2.3
    }
  }
}