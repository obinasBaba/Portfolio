import React from 'react';
import { Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import * as s from './abouthero.module.scss';

const helloTxtVariants = {
  initial: {
    opacity: 0,
    y: -200,
  },
  animate: {
    opacity: 1,
    y: 0,
    transitionEnd: {},
  },
  exit (arg) {
    return {
      opacity: 0,
      y: arg?.isMobile ? 200 : -200,
      transition: {
        duration: 1,
        // ease: [0.6, 0.01, 0, 0.9],
        delay: 0.3,
      },
    };
  },

  transition: {
    duration: 1,
    // ease: [0.6, 0.01, 0, 0.9],
  },
};

const introTxtVariants = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: {
      duration: 1,
      // ease: [0.6, 0.01, 0, 0.9],
      delay: 0.3,
    },
  },

  transition: {
    duration: 1,
    // ease: [0.6, 0.01, 0, 0.9],
  },
};

function TextWrapper () {
  return (
    <div className={s.container}>
      <motion.div
        variants={helloTxtVariants}
        transition={helloTxtVariants.transition}
        custom={{ isMobile }}
      >
        <Typography variant='h1' className={s.hello}>
          Hello
        </Typography>
      </motion.div>

      <motion.div
        className='intro-container'
        variants={introTxtVariants}
        transition={introTxtVariants.transition}
      >
        <Typography variant='h4' className={s.goal} gutterBottom>
          I create progress by designing and <br /> developing digital
          experiences,
        </Typography>

        <Typography className={s.goal_desc} variant='body'>
          I believe that we can live in a world in which every product or
          service has an easy to use experience on platforms and my mission is
          to contribute to it to make it happen
        </Typography>
      </motion.div>
    </div>
  );
}

export default TextWrapper;
