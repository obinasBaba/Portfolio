export const transition = {
  ease: [0.6, 0.01, 0, 0.9],
  duration: 1,
}

export const headLine = {

}

export const metaVariant = {
  initial: {

  },
  animate: {
    margin: 0,

  },
  exit: {
    ['margin-left']: 'calc(100vw / 64 * 2)'
  }
}

export const titleVariant = {
  initial: {

  },

  animate: {
    scale: 1.3,
    y: -30,
    originX: 0

  },

  exit: {
    scale: 1,
    y: 0
  },
}

export const btnVariant = {
  initial: {
  },
  animate: {
  },

  exit: {
  },
}

export const imgVariant = {
  initial: {
    ['margin-right']: 'calc(100vw / 64 * 6)',
    // background: 'transparent',
    padding: 'calc(100vw / 64 * .5)',
    ['padding-left']: 'calc(100vw / 64 * 4)',
  },

  animate: {
    // height: '100vh',
    ['margin-right']: 0,
    padding: 'calc(100vw / 64 * 0)',
    ['padding-left']: 'calc(100vw / 64 * 0)',
  },
  exit: {
    // height: '400px',
    // background: '#3719ca',
    ['margin-right']: 'calc(100vw / 64 * 6)',

    padding: 'calc(100vw / 64 * .5)',
    ['padding-left']: 'calc(100vw / 64 * 4)',


  }
}

export const innerVariant = {
  initial: {
    height: 400
  },
  animate: {
    height: '100vh'
  },

  exit: {
    height: 400,
  }
}

export const bgVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },

  exit: {
    opacity: 0,
  },
}
