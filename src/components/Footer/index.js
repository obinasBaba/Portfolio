// noinspection JSIgnoredPromiseFromCall

import React, { useEffect, useState } from 'react';
import { GradientText } from '../GradientText';
import FooterMeta from './FooterMeta';
import FooterBottom from '../FooterBottom';
import MotionBtn from '../MotionBtn';
import { useLocation } from '@reach/router';
import useBackgroundsAssets from '@hooks/queries/useBackgroundsAssets';
import { motion, useAnimation } from 'framer-motion';
import { pageTransition } from '@scenes/HomePage';
import { useLocomotiveScroll } from '@contexts/LocoMotive';
import * as s from './mailus.module.scss';
import {
  backgroundStars,
  container,
  logoEffect,
  titleWrapper,
  wrapper,
} from './mailus.module.scss';

const footerVariants = {
  initial: {
    display: 'block',
    opacity: 1,
    y: 0,
  },
  animate: {
    display: 'block',
    opacity: 1,
    y: 0,
  },
  exit (arg) {
    return {
      opacity: 0,
      y: arg?.down ? '100%' : arg?.up ? '-100%' : 0,
    };
  },
  hide: {
    display: 'none',
  },
};

const transition = {
  ...pageTransition,
  duration: 1.8,
};

function Footer ({ exitComplete }) {
  const { starsSmallOld } = useBackgroundsAssets();
  const { pathname } = useLocation();
  const [cachePath, setCachePath] = useState('');
  const [inView, setInView] = useState(false);
  const [show, setShow] = useState(true);
  const { locoInstance } = useLocomotiveScroll();
  const control = useAnimation();

  useEffect(() => {
    // console.log('location :', pathname);
    setCachePath(pathname);

    if (!inView || cachePath === pathname) {
      return;
    }

    control.start('exit');
    setInView(false);
  }, [pathname]);

  useEffect(() => {

    setShow(true);

    if (pathname.includes('projects#') || pathname.includes('projects/#') ||
      pathname.endsWith('projects/')) {

      // console.log('hide footer');

      setShow(false);
      locoInstance?.scroll?.update();
      return;
    }

    setTimeout(() => control.start('animate', { duration: 0 }), 1400);

  }, [exitComplete]);

  return (
    <>

      {
        show && <div
          data-scroll-section={true}
          id='footer-container'
          className={s.footer_container}
        >
          <motion.div
            className={container}
            key={pathname}
            variants={footerVariants}
            transition={{ ...transition, delay: 0.1 }}
            initial='initial'
            animate={control}
            exit='exit'
            onViewportLeave={() => setInView(false)}
            onViewportEnter={() => setInView(true)}
            viewport={{
              amount: 0.2,
              once: false,
            }}
          >
            <div className='bottom_gradient' />

            <div className={wrapper} data-scroll={true} data-scroll-speed='-4.5'>
              <div
                className={backgroundStars}
                style={{ backgroundImage: `url(${starsSmallOld.publicURL})` }}
              />

              <div className={logoEffect} />

              <motion.div
                className={titleWrapper}
                variants={footerVariants}
                transition={transition}
                custom={{ up: true }}
              >
                <GradientText variant='h1'>
                  Ready To Create <br /> Your Star ?
                </GradientText>

                <MotionBtn text='Contact' to='/contact' data-pointer='focus' />
              </motion.div>

              <motion.div
                style={{
                  width: '100%',
                }}
                variants={footerVariants}
                transition={{ ...transition, delay: 0.2 }}
                custom={{ down: true }}
              >
                <FooterMeta />

                <FooterBottom />
              </motion.div>
            </div>
          </motion.div>
        </div>
      }
    </>
  );
}

export default Footer;
