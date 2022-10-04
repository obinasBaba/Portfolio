import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Typography } from '@material-ui/core';
import * as s from './videoplayer.module.scss';
import { transition } from '@helpers/variants';

const loadingTxtVariants = {
  initial: {
    opacity: 0,
    scale: 0.7,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.7,
  },
};

const VideoPlayer = ({ vidProps }) => {
  const vidRef = useRef();
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const imgLoaded = () => {
      setLoaded(true);
    };

    vidRef.current?.addEventListener('loadeddata', imgLoaded);

    return () => {
      vidRef.current?.removeEventListener('loadeddata', imgLoaded);
    };
  }, []);

  return (
    <motion.div
      className={s.container}
      viewport={{
        amount: 0.5,
        once: false,
      }}
      onViewportEnter={() => {
        vidRef.current?.play();
        setInView(true);
      }}
      onViewportLeave={() => {
        setInView(false);

        if (!vidRef.current) return;

        vidRef.current?.pause();
        setTimeout(() => {
          vidRef.current.currentTime = 0;
        }, 400);
      }}
    >
      <header>
        <span />
        <span />
        <span />

        <AnimatePresence exitBeforeEnter>
          {!loaded && inView && (
            <motion.div
              className={s.loading_text}
              initial='initial'
              animate='animate'
              exit='exit'
              variants={loadingTxtVariants}
              transition={{ ...transition, delay: 0.3 }}
            >
              <Typography variant='body2'>loading clip</Typography>

              <div className={s.loading_bullet}>
                <p className='inner-one'>f</p>
                <p className='inner-two'>g</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className={s.wrapper}>
        {
          <div
            className={clsx([s.placeholderImg])}
            style={{ opacity: loaded ? 0 : 1 }}
          >
            <GatsbyImage
              alt='Image Place holder'
              placeholder='blurred'
              objectFit='cover'
              image={getImage(vidProps?.img)}
            />
          </div>
        }

        <video
          className={s.vid}
          preload='metadata'
          muted
          loop
          playsInline={true}
          ref={vidRef}
        >
          <source src={vidProps?.webm} type='video/webm' />
          <source src={vidProps?.mp4} type='video/mp4' />
        </video>
      </div>
    </motion.div>
  );
};

export default VideoPlayer;
