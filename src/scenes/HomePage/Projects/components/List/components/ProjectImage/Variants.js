export const transition = {
  duration: 1.2,
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
      delay: .5
    }
  }
}

export const outerDivWrapper = {}

export const imgOverVariants = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: .2,
      staggerDirection: -1,
    }
  }
};

export const imgCover = {
  initial: {x: 0},
  animate: {
    x: '110%',
  }
};


export const effectVariant = {
  initial: {
    y: '100%'
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      ease: [.65, 0, 0.35, 1],
      delay: 1.3
    }
  }
}