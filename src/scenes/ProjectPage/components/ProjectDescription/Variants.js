import baffle from 'baffle'

export const transition = {
  duration: 1,
  ease: [0.6, 0.01, 0, 0.9],
}

export const descTopVariant = {

  animateFp: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2,
    },
  },
}

export const btnTxtVariants = {
  initialFp: {
    y: '120%',
  },
  animateFp(b) {

    setTimeout(() => {
      b && b.start().reveal(700, 700)
    }, 1000)

    return {
      y: '0%',
      transition: {
        ease: [0.6, 0.01, 0, 0.9],
        duration: 1,
        delay: 1,
      },
    }
  },
}

export const descTxtVariants = {
  initialFp: {
    y: '120%',
  },
  animateFp(b) {

    setTimeout(() => {
      b && b.start().reveal(700, 700)
    }, 1000)

    return {
      y: '0%',
      transition: {
        ease: [0.6, 0.01, 0, 0.9],
        duration: 1,
        delay: 1,
      },
    }
  },

 /* exit: {
    y: '120%',
    transition: {
      ease: [0.6, 0.01, 0, 0.9],
      duration: 1,

    },
  },*/
}

export const titleVariant = {
  initialFp: {
    transition: {
      staggerChildren: 0.02,
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
  initialFp: {
    y: '200%',
  },
  animateFp: {
    y: 0,
  },
  exitFp: {
    y: '200%'
  }
}
