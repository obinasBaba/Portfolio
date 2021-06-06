import baffle from 'baffle'

export const transition = {
  duration: 1,
  ease: [0.6, 0.01, 0, 0.9],
}

export const top = {
  animate: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2,
    },
  },
}

export const descTxtVariants = {
  initial: {
    y: '120%',
  },
  animate(b) {

    setTimeout(() => {
      b && b.start().reveal(1000, 1000)
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

export const titleVariant = {
  animate: {
    transition: {
      staggerChildren: 0.02,
    },
  },
}

export const letterVariant = {
  initial: {
    y: '200%',
  },
  animate: {
    y: 0,
  },
}
