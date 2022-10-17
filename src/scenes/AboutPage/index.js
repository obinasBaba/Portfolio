import React, { useContext, useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue } from 'framer-motion';
import loadable from '@loadable/component';
import AboutHero from './components/AboutHero';
import MyProcess from './components/MyProcess';
// import Footer from '../Footer'
import Skills from './components/Skills';
import HorizontalScrollText from './components/HorizontalScrollText';
import { MotionValueContext } from '../../contexts/MotionStateWrapper';
import { useLocomotiveScroll } from '@contexts/LocoMotive';

const MailUs = loadable(() => import('@components/Footer'));

const AboutPageContainer = styled(motion.div)`
  position: relative;
  z-index: 1;
`;

const aboutContainerVariants = {
  initial: {
    // opacity: 0
  }, animate: {
    // opacity: 1,
  }, exit: {
    // exit: 0,
  },

  transition: {
    duration: 1, ease: [0.6, 0.01, 0, 0.9],
  },
};

function AboutPage () {
  const triggerRegister = useMotionValue(false);

  return (<AboutPageContainer
    variants={aboutContainerVariants}
    transition={aboutContainerVariants.transition}
    initial='initial'
    animate={'animate'}
    exit='exit'
    id='#about'
  >
    <AboutHero />

    <HorizontalScrollText />

    <Skills />

    <MyProcess triggerRegister={triggerRegister} />

  </AboutPageContainer>);
}

export default AboutPage;
