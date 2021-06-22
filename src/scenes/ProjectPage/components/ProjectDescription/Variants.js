import baffle from 'baffle'

export const transition = {
  duration: 1,
  ease: [0.6, 0.01, 0, 0.9],
}

export const descTopVariant = {

  animate1: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2,
    },
  },
}

export const btnTxtVariants = {
  initial1: {
    y: '120%',
  },
  animate1(b) {

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
  initial1: {
    y: '120%',
  },
  animate1(b) {

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

  exit: {
    y: '120%',
    transition: {
      ease: [0.6, 0.01, 0, 0.9],
      duration: 1,

    },
  },
}

export const titleVariant = {
  initial1: {
    transition: {
      staggerChildren: 0.02,
    },
  },
  animate1: {
    transition: {
      staggerChildren: 0.02,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.014
    }
  }
}

export const letterVariant = {
  initial1: {
    y: '200%',
  },
  animate1: {
    y: 0,
  },
}
