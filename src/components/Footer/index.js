// noinspection JSIgnoredPromiseFromCall

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from './logo.svg';
import { GradientText } from '../GradientText';
import FooterMeta from './FooterMeta';
import FooterBottom from '../FooterBottom';
import MotionBtn from '../MotionBtn';
import {
  backgroundStars,
  container,
  logoEffect,
  titleWrapper,
  wrapper,
} from './mailus.module.scss';

import { useLocation } from '@reach/router';
import useBackgroundsAssets from '@hooks/queries/useBackgroundsAssets';
import { motion, useAnimation } from 'framer-motion';
import { pageTransition } from '@scenes/HomePage';
import { useLocomotiveScroll } from '@contexts/LocoMotive';

const LogoEffect = styled.div`
  position: absolute;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(2px);
  z-index: -1;

  top: 10%;
  left: 0;
  right: 0;
  bottom: 0%;

  //display: none;
`;

const footerVariants = {
  initial: {
    opacity: 1,
    y: 0,
  },
  animate: {
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

  const {
    starsBig,
    starsSmall,
    starsBigOld,
    starsSmallOld,
  } = useBackgroundsAssets();
  const { pathname } = useLocation();
  const [cachePath, setCachePath] = useState('');
  const [inView, setInView] = useState(false);
  const [show, setShow] = useState(true);
  const control = useAnimation();
  const { locoInstance } = useLocomotiveScroll();

  useEffect(() => {
    // console.log('location :', pathname);
    setCachePath(pathname);

    if (!inView || cachePath == pathname) {
      return;
    }

    control.start('exit');
    setInView(false);

  }, [pathname]);

  useEffect(() => {

    control.start('animate');

  }, [exitComplete]);

  return (
    <div data-scroll-section={true}
         id='footer-container'
    >
      <motion.div className={container}
                  key={pathname}
                  variants={footerVariants}
                  transition={{ ...transition, delay: .1 }}
                  initial='initial'
                  animate={control}
                  exit='exit'
                  onViewportLeave={() => setInView(false)}
                  onViewportEnter={() => setInView(true)}
                  viewport={{
                    amount: .2,
                    once: false,
                  }}
      >

        <div className='bottom_gradient' />

        <div className={wrapper}
             data-scroll={true}
             data-scroll-speed='-4.5'
        >

          <div className={backgroundStars}
               style={{ backgroundImage: `url(${starsSmallOld.publicURL})` }} />

          <div className={logoEffect} />

          <motion.div className={titleWrapper}
                      variants={footerVariants}
                      transition={transition}
                      custom={{ up: true }}>

            <GradientText variant='h1'>
              Ready To Create <br /> Your Star ?
            </GradientText>

            <MotionBtn text='Contact' to='/contact' data-pointer='focus' />

          </motion.div>

          <motion.div style={{
            width: '100%',
          }}
                      variants={footerVariants}
                      transition={{ ...transition, delay: .2 }}
                      custom={{ down: true }}>

            <FooterMeta />

            <FooterBottom />
          </motion.div>


        </div>


      </motion.div>
    </div>
  );
}

export default Footer;
