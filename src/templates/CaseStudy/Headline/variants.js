export const transition = {
  ease: [0.6, 0.01, 0, 0.9],
  duration: 1,
}

export const containerVariants = {}

export const textsVariant = {

  fromProjectsInitial: {
    x: 'calc(100vw / 64 * 2)'
  },
  fromProjectsAnimate: {
    x: 0,
  },


  exit(arg){
    if ( arg && arg.path === '/projects/' ){
      const delay = arg.isTop ? arg.isTop.get() : false;

      return{
        x: 'calc(100vw / 64 * 2)',
        transition: {
          ...transition,
          delay: delay ? 0 : 1,
        }
      }
    }
  }
}

export const btnVariant = {
  initial: {},
  animate: {},
  exit: {},
}

export const imgVariant = {
  fromProjectsInitial: {
    ['margin-right']: 'calc(100vw / 64 * 6)',
    // background: 'transparent',
    padding: 'calc(100vw / 64 * .5)',
    ['padding-left']: 'calc(100vw / 64 * 4)',
  },

  fromProjectsAnimate: {
    // height: '100vh',
    ['margin-right']: 0,
    padding: 'calc(100vw / 64 * 0)',
    ['padding-left']: 'calc(100vw / 64 * 0)',
  },
  exit(arg){

    if ( arg && arg.path === '/projects/' ){
      const delay = arg.isTop ? arg.isTop.get() : false;

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
    }

    return {}
  },

  initial: {},
  animate: {},
}

export const innerVariant = {
  fromProjectsInitial: {
    height: 400
  },
  fromProjectsAnimate: {
    height: '100vh'
  },

  exit(arg){

    if (arg && arg.path === '/projects/') {
      console.log('innerVariant --- - - top=', arg.isTop && arg.isTop.get())

      const isTop = arg.isTop ?? arg.isTop.get();

      return {
        height: 400,
        transition: {
          ...transition,
          delay: isTop ? 0 : 1,
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
      const delay = arg.isTop ? arg.isTop.get() : false;

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
