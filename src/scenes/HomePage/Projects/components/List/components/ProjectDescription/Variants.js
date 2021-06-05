export const transition = {
  duration: 1,
  ease: [.6, .01, -.05, 0.9],
}

export const top = {
  animate: {
    transition: {
      delay: 1,
      when: 'beforeChildren',
      staggerChildren: .4,
      delayChildren: .2,
    }
  }
}

export const descTxtVariants = {
  initial: {
    y: '110%',
  },
  animate: {
    y: '0%',
    transition: {
      ease: [.6, .01, -.05, 0.9],
      duration: 1
    }
  }
}

export const titleVariant = {
  animate: {
    transition: {
      staggerChildren: .02
    }
  }
}

export const letterVariant = {
  initial: {
    y: '200%'
  },
  animate: {
    y: 0,
  },
}