export const transition = {
  ease: [0.6, 0.01, 0, 0.9],
  duration: 1.3,

  // repeat: Infinity,
  // repeatType: 'mirror',
}

export const imgContainerVariant = {

  initial: {

  },
  exit: {},

  initialFp: {
    x: '10%',
    scale: .85
  },
  animateFp: {
    x: 0,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: [.33, 1, .68, 1],
      delay: .5
    }
  },
  exitFp: {
    x: '10%',
    scale: .85
  }
}

export const outerDivWrapper = {

}

export const innerDivWrapperVariants = {

}

export const imgOverVariants = {
  initial: {},
  animate: {},

  initialFp: {

  },

  animateFp: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: .17,
      staggerDirection: -1,
    }
  },

  exitFp: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: .17,
      staggerDirection: 1,
    }
  }
};

export const imgCover = {
  initial: {
    x: '110%'
  },
  animate: {
    x: '110%'
  },

  initialFp(){
    return{
      x: '0%'
    }
  },

  animateFp() {

    console.log('animateFB in s000000000000000000000000000000')

    return{
      x: '110%',
    }
  },
  exitFp(){
    return{
      x: 0,

    }
  }
};


export const effectVariant = {
  exit: {
    transition: {
      duration: 1,
    }
  },

  initialFp: {
    y: '100%'
  },
  animateFp: {
    y: 0,
    transition: {
      duration: 1,
      ease: [.65, 0, 0.35, 1],
      delay: 1.2
    }
  },
  exitFp: {
    y: '100%'
  }
}