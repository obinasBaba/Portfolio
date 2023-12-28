export const transition = {
  ease: [0.6, 0.01, 0, 0.9],
  duration: 1,
};

export const containerVariants = {};

export const btnVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },

  fromProjectsInitial: {
    opacity: 0,
  },
  fromProjectsAnimate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

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
    padding: 'calc(100vw / 64 * .7)',
    ['padding-left']: 'calc(100vw / 64 * 4.5)',
    borderRadius: '1.5rem',
  },

  fromProjectsAnimate: {
    // height: '30vmax',
    // ['margin-right']: 0,
    ['margin-right']: 'calc(100vw / 64 * 0)',
    padding: 'calc(100vw / 64 * 0)',
    ['padding-left']: 'calc(100vw / 64 * 0)',
    borderRadius: '0',

  },

  exit (arg) {
    if (arg && arg.path === '/projects/') {
      const delay = arg.isTop ? arg.isTop.get() : false;

      if (arg.breakpoint && arg.breakpoint.get().lgUp)
        return {
          // height: '30vmax',
          // background: '#3719ca',
          ['margin-right']: 'calc(100vw / 64 * 6)',
          padding: 'calc(100vw / 64 * .7)',
          ['padding-left']: 'calc(100vw / 64 * 4.5)',
          borderRadius: '1.5rem',

          transition: {
            ...transition,
            delay: delay ? 0 : 1,
          },
        };

      return {
        ['margin-right']: 'calc(100vw / 64 * 5)',
        ['margin-left']: 'calc(100vw / 64 * 5)',
      };
    }

    return {};
  },

  initial: {
    scale: 0.9,
    filter: 'grayscale(100%) sepia(20%) brightness(80%)',
  },
  animate: {
    scale: 1,
    filter: 'grayscale(0) sepia(0) brightness(80%)',
  },
};

export const innerVariant = {
  fromProjectsInitial: {
    height: '30vmax',
    borderRadius: '1rem',
  },
  fromProjectsAnimate: {
    height: '100vh',
    borderRadius: '0',
  },

  exit (arg) {
    if (arg && arg.path === '/projects/') {
      const delay = arg.isTop ? arg.isTop.get() : false;

      if (arg.breakpoint && arg.breakpoint.get().lgUp)
        return {
          height: '30vmax',
          borderRadius: '1rem',
          transition: {
            ...transition,
            delay: delay ? 0 : 1,
          },
        };
    }

    return {};
  },

  initial: {},
  animate: {},
};

export const bgVariant = {
  fromProjectsInitial: {
    opacity: 0,
  },
  fromProjectsAnimate: {
    opacity: 1,
  },

  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },

  exit (arg) {
    if (arg && arg.path === '/projects/') {
      const delay = arg.isTop ?? arg.isTop.get();

      return {
        opacity: 0,
        transition: {
          ...transition,
          delay: delay ? 0 : 1,
        },
      };
    }

    return {
      opacity: 0,
    };
  },
};

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
    x: 'calc(100vw / 64 * -2)',
  },

  exit (arg) {
    if (arg && arg.path === '/projects/') {
      const delay = arg.isTop ? arg.isTop.get() : false;

      if (arg.breakpoint && arg.breakpoint.get().lgUp)
        return {
          x: 0,
          transition: {
            ...transition,
            delay: delay ? 0 : 1,
          },
        };

      return {};
    }

    return {
      opacity: 0,
      scale: 0.9,
    };
  },
};

export const titleVariant = {
  fromProjectsInitial: {},
  fromProjectsAnimate: {
    scale: 1.3,
    y: -30,
    originX: 0,
    // color: '#a4b5c0',
  },

  initial: {
    scale: 1.2,
    y: -30,
    originX: 0,
  },

  animate: {
    scale: 1.3,
    color: 'var(--headline-text)',
  },

  exit (arg) {
    if (arg && arg.path === '/projects/') {
      const delay = arg.isTop ? arg.isTop.get() : false;

      return {
        scale: 1,
        y: 0,
        transition: {
          ...transition,
          delay: delay ? 0 : 1,
        },
      };
    }
    return {
      opacity: 0,
    };
  },
};
