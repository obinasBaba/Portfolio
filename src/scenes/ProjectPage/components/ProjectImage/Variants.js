export const transition = {
  ease: [0.6, 0.01, 0, 0.9],
  duration: 1.5,

  // repeat: Infinity,
  // repeatType: 'mirror',
}

export const imgContainerVariant = {

  initial: {
    // x: '10%',
    // scale: .85,

    x: 0,
    scale: 1,
    // margin: 0,
    // padding: 0,
    // height: 400,



  },
  animate: {
    // ['margin-right']: 'calc(100vw / 64 * 6)',
    // 'padding': 'calc(100vw / 64 * 0.5)',
    // ['padding-left']: 'calc(100vw / 64 * 4)'

  },
  exit: {
    padding: 0,
    margin: 0,
    // 'padding': 'calc(100vw / 64 * 0)',
    // ['padding-left']: 'calc(100vw / 64 * 0)',
    // ['margin-right']: 'calc(100vw / 64 * 0)',

  },

  initialFp: {
    x: '10%',
    scale: .85,
    // ['margin-right']: 'calc(100vw / 64 * 6)',
    // 'padding': 'calc(100vw / 64 * 0.5)',
    // ['padding-left']: 'calc(100vw / 64 * 4)',

    transition: {
      duration: 0,
    }
  },
  animateFp: {
    x: 0,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: [.33, 1, .68, 1],
      // ease:  [0.6, 0.01, 0, 0.9],
      delay: .5
    }
  },
  exitFp: {
    x: '10%',
    scale: .85
  }
}

export const innerVariant = {
  initial: {
    // ['max-height']: '400px',
    // height: '100vh'

  },

  animate: {

  },
  exit: {
    // ['max-height']: 'auto',
    height: '100vh'
  },

  initialFp: {
    height: 400,
    transition: {
      duration: 0,
    }
  },



}

export const imgOverVariants = {

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

  initialFp:{
    x: '0%',
    transition: {
      duration: 0,
    }
  },
  animateFp: {
    x: '110%',
  },
  exitFp:{
    x: 0,
  }
};


export const effectVariant = {
  initial: {
    y: '100%'
  },

  exit: {
    y: '100%',
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