export const transition = {
  ease: [0.6, 0.01, 0, 0.9],
  duration: 1,
}

export const containerVariants = {}


export const btnVariant = {
  initial: {},
  animate: {},
  exit: {},
}

export const imgWrapperVariant = {
  fromProjectsSmallInitial: {
    ['margin-right']: 'calc(100vw / 64 * 5)',
    ['margin-left']: 'calc(100vw / 64 * 5)',
  },

  fromProjectsSmallAnimate: {
    ['margin-right']: 'calc(100vw / 64 * 0)',
    ['margin-left']: 'calc(100vw / 64 * 0)',
  },

  fromProjectsInitial: {
    ['margin-right']: 'calc(100vw / 64 * 6)',
    // background: 'transparent',
    padding: 'calc(100vw / 64 * .5)',
    ['padding-left']: 'calc(100vw / 64 * 4)',
  },

  fromProjectsAnimate: {
    // height: '100vh',
    // ['margin-right']: 0,
    ['margin-right']: 'calc(100vw / 64 * 0)',
    padding: 'calc(100vw / 64 * 0)',
    ['padding-left']: 'calc(100vw / 64 * 0)',
  },

  exit(arg){

    if ( arg && arg.path === '/projects/' ){
      const delay = arg.isTop ? arg.isTop.get() : false;

      if (arg.largeUp && arg.largeUp.get())
        return{
          // height: '400px',
          // background: '#3719ca',
          ['margin-right']: 'calc(100vw / 64 * 6)',
          padding: 'calc(100vw / 64 * .5)',
          ['padding-left']: 'calc(100vw / 64 * 4)',

          transition: {
            ...transition,
            delay: delay ? 0 : 1,
          }

        }

      return {
        ['margin-right']: 'calc(100vw / 64 * 5)',
        ['margin-left']: 'calc(100vw / 64 * 5)',
      }
    }

    return {}
  },

  initial: {
    scale: .9,
    filter: 'grayscale(100%) sepia(20%) brightness(80%)',
  },
  animate: {
    scale: 1,
    filter: 'grayscale(0) sepia(0) brightness(80%)',
  },
}

export const innerVariant = {
  fromProjectsInitial: {
    height: 400
  },
  fromProjectsAnimate: {
    height: '100vh'
  },

  exit(arg){

    if ( arg && arg.path === '/projects/' ){
      const delay = arg.isTop ? arg.isTop.get() : false;

      if (arg.largeUp && arg.largeUp.get())
        return{
          height: arg.mediaLarge ? 500 : 400,
          transition: {
            ...transition,
            delay: delay ? 0 : 1,
          }
        }

    }

    return {}
  },

  initial: {},
  animate: {},
}

export const bgVariant = {
  fromProjectsInitial: {
    opacity: 0,
  },
  fromProjectsAnimate: {
    opacity: 1,
  },

  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
  },

  exit(arg){
    if ( arg && arg.path === '/projects/' ){
      const delay = arg.isTop ?? arg.isTop.get();

      return{
        opacity: 0,
        transition: {
          ...transition,
          delay: delay ? 0 : 1,
        }
      }

    }

    return {
      opacity: 0,
    }
  },

}

export const textsVariant = {
  initial: {
    x: 'calc(100vw / 64 * -2)',
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },

  fromProjectsSmallInitial: {},

  fromProjectsSmallAnimate: {},

  fromProjectsInitial: {
    x: 0,
  },

  fromProjectsAnimate: {
    x: 'calc(100vw / 64 * -2)'
  },


  exit(arg){
    if ( arg && arg.path === '/projects/' ){
      const delay = arg.isTop ? arg.isTop.get() : false;

      if (arg.largeUp && arg.largeUp.get())
        return{
          x: 0,
          transition: {
            ...transition,
            delay: delay ? 0 : 1,
          }
        }

      return {

      }
    }

    return {
      opacity: 0,
      scale: .9
    }
  }
}

export const titleVariant = {

  fromProjectsInitial: {},
  fromProjectsAnimate: {
    scale: 1.3,
    y: -30,
    originX: 0
  },

  initial: {
    scale: 1.2,
    y: -30,
    originX: 0
  },

  animate: {
    scale: 1.3,
  },

  exit(arg){
    if ( arg && arg.path === '/projects/' ){
      const delay = arg.isTop ? arg.isTop.get() : false;

      return{
        scale: 1,
        y: 0,
        transition: {
          ...transition,
          delay: delay ? 0 : 1,
        }
      }

    }
    return {
      opacity: 0,
    }
  },
}

