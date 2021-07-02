export const transition = {
  duration: 1,
  ease: [0.6, 0.01, 0, 0.9],
}

export const containerVariant = {

  animateFp: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.2,
    },
  },
}

export const btnTxtVariants = {
  initial :{
    y: '120%',
  },

  animate: {
    y: 0
  },

  initialFp: {
    y: '120%',
  },
  animateFp: {
    y: '0%',
  },
  exitFp: {
    y: '120%',
  }
}

export const tagsVariants = {
  initial: {
    y: '120%',
  },

  initialFp: {
    y: '120%',
  },

  animateFp(c) {
    setTimeout(() => {
      c.baffle && c.baffle.start().reveal(900, 900)
    }, 900)

    return {
      y: '0%',
      transition: {
        delay: c.exit ? .5 : 1,
      },
    }
  },

  exitFp:{
    y: '120%',
  },

  exit: {
    y: '120%',
    transition: {
      duration: .7
    }
  }
}

export const titleVariant = {

  animate: {
    transition: {
      staggerChildren: 0,
      duration: 0,
    },
  },

  animateFp: {
    transition: {
      staggerChildren: 0.02,
    },
  },
  exitFp: {
    transition: {
      staggerChildren: 0.01,
      staggerDirection: -1
    },
  },

  exit: {
    transition: {
      staggerChildren: 0.014
    }
  },
}

export const letterVariant = {

  animate: {
    y: 0,
    // transition: {
    //   duration: 0,
    // },
  },

  initial: {
   y: '100%'
  },

  initialFp: {
    y: '100%',
  },
  animateFp: {
    y: 0,
  },
  exitFp: {
    y: '100%'
  }
}
