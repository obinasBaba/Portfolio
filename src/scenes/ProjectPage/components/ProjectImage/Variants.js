export const transition = {
  ease: [0.6, 0.01, 0, 0.9],
  duration: 1.5,

  // repeat: Infinity,
  // repeatType: 'mirror',
}

export const imgContainerVariant = {

  initial(c){
    return {
      x: '10%',
      scale: .85,
      // x: 0,
      // scale: 1,
    }
  },

  animate(c){
    // console.log('topAnimate',c )
    return {
      x: 0,
      scale: 1,
      transition: {
        duration: 0,
      }
    }
  },

  exit( c ){

    if (c && c.path && c && c.path.startsWith('/portfolio'))
      return {
        // padding: 0,
        // margin: 0,
      }

  },

  initialFp: { // equal with initial
    x: '10%',
    scale: .85,

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
      // delay: .5
    }
  },
  exitFp: {
    x: '10%',
    scale: .85
  }
}

export const innerVariant = {
  initial: { },

  animate: {  },

  exit(c){

    if ( c && c.path && c.path.startsWith('/portfolio') )
      return{
      // height: '100vh'
    }
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
    x: 0
  },
  animate: {
    x: '110%',
    transition: {
      duration: 0,
    }
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