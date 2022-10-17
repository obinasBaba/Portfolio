import React, { useContext, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { motion } from 'framer-motion';
import { Slide } from '@material-ui/core';
import { useLocomotiveScroll } from '@contexts/LocoMotive';
import { useMotionValueContext } from '@contexts/MotionStateWrapper';
import { AppStateContext } from '@contexts/AppStateContext';
import HomeLogo from './components/HomeLogo';
import NavBtn from './components/NavBtn';
import OverlayController from '../ScreenOverlay/OverlayController';
import { container } from './navbar.module.scss';
import { useLocation } from '@reach/router';
import gsap from 'gsap';
import clsx from 'clsx';

function HideOnScroll ({ children }) {
  const { currentPath } = useContext(AppStateContext);
  const [slide, setSlide] = useState(true);
  const { pathname } = useLocation();

  const { scrollDirection } = useLocomotiveScroll();

  useEffect(() => {
    return;
    const deb = debounce((arg) => {
      if (!arg) return;

      if (arg === 'up') {

        // setSlide(true)
        gsap.to('.app-slider', {
          y: '-100%', duration: .5,

        });

      } else if (arg === 'down') {

        gsap.to('.app-slider', {
          y: 0, duration: .5,
        });

        // setSlide(false);

      }
    }, 350);

    scrollDirection.onChange(deb);

    return () => {};
  }, []);

  useEffect(() => {
    setSlide(true);
  }, [currentPath, pathname]);

  return (
    <div className='app-slider' appear={false} direction='down' in={slide}>
      {children}
    </div>);
}

const appBarVariants = {
  initial: {}, animate: {
    transition: {
      delayChildren: 0.4,
    },
  },
};

function NavBar () {
  const { menuIsOpen } = useMotionValueContext();

  const toggleMenu = () => !OverlayController.isAnimating &&
    !window.isMenuAnimating && menuIsOpen.set(!menuIsOpen.get());

  const { scrollDirection } = useLocomotiveScroll();

  useEffect(() => {

    const deb = debounce((arg) => {
      if (!arg) return;

      gsap.to('.app-slider', {
        y: arg === 'up' ? 0 : '-100%', duration: .2, ease: 'linear',
      });

    }, 350);

    scrollDirection.onChange(deb);

    return () => {};
  }, []);

  return (<>
    <motion.div className={clsx([container])}
    >

      <motion.div variants={appBarVariants} className='app-slider'>
        <HomeLogo toggleMenu={() => menuIsOpen.get() && toggleMenu()} />

        <NavBtn menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
      </motion.div>


    </motion.div>
  </>);
}

export default NavBar;
