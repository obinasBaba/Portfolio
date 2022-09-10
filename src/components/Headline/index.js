import React from 'react';
import { GradientText } from '../GradientText';

import { container, sub } from './headline.module.scss';
import { motion } from 'framer-motion';

const transition = {
  duration: 2,
  ease: [0.6, 0.01, 0, 0.9],
  // ease: [0.165, 0.84, 0.44, 1],

};

const titleVariants = {
  initial (arg) {
    return {
      opacity: 0,
      y: arg?.sub ? '100%' : '-100%',
    };
  },
  inView: {
    opacity: 1,
    y: 0,

    transition: {
      opacity: {
        delay: .3,
        duration: 1.7,
        ease: [1, 0, 0.68, 1],
      },

      default: {
        ...transition,
      },
    },

  },
  animate: {},
  exit: {},
};

const subVariants = {
  initial: {
    opacity: 0,
    y: '100%',

  },
  inView: {
    opacity: 1,
    y: 0,

  },
  animate: {},
  exit: {},
};

function HeadlineTitle ({ title, subtitle, mb, clsName, ...props }) {

  return (
    <motion.header className={container} {...props} mb={mb}
                   variants={{}}
                   initial='initial'
                   animate='animate'
                   exit='exit'
                   whileInView='inView'
                   viewport={{
                     amount: 'all',
                     once: false,
                   }}
    >

      {/*<MotionConfig transition={transition}>*/}

      {/*<motion.div variants={titleVariants}>*/}
      <GradientText variant='h1'
                    noWrap>
        {title}
      </GradientText>
      {/*</motion.div>*/}


      {/*<motion.div variants={titleVariants} custom={{ sub: true }}>*/}
      <GradientText className={sub}
                    align='right' variant='body1' noWrap>
        {subtitle}
      </GradientText>
      {/*</motion.div>*/}

      {/*</MotionConfig>*/}

    </motion.header>
  );
}

export default HeadlineTitle;
