import React, { useContext, useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import { motion } from 'framer-motion';
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

  const { scrollDirection, yProgress } = useLocomotiveScroll();
  const { pathname } = useLocation();
  const { currentPath } = useContext(AppStateContext);
  const navBarContainer = useRef(null);

  useEffect(() => {

    setTimeout(() => {
      gsap.to(navBarContainer.current, {
        y: 0, duration: .2, ease: 'linear',
      });
    }, 1000);

    return () => {

      gsap.to(navBarContainer.current, {
        y: 0, duration: .2, ease: 'linear',
      });

    };
  }, [pathname, currentPath]);

  useEffect(() => {

    yProgress.onChange(v => {
      if (v === 0) {
        gsap.to(navBarContainer.current, {
          y: 0, duration: .2, ease: 'linear',
        });
      }
    });

    const deb = debounce((arg) => {

      gsap.to(navBarContainer.current, {
        y: arg === 'up' ? 0 : '-100%', duration: .2, ease: 'linear',
      });

    }, 350);

    scrollDirection.onChange(deb);

    return () => {};
  }, []);

  return (<motion.div className={clsx([container])}>

    <motion.div variants={appBarVariants}
                className='app-slider'
                ref={navBarContainer}
    >
      <HomeLogo toggleMenu={() => menuIsOpen.get() && toggleMenu()} />

      <NavBtn menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
    </motion.div>


  </motion.div>);
}

export default NavBar;
