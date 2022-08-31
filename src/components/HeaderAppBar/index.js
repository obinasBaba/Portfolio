import React, { useContext, useEffect, useState } from "react";
import { debounce } from "lodash";
import { motion } from "framer-motion";
import { Slide } from "@material-ui/core";
import { useLocomotiveScroll } from "@contexts/LocoMotive";
import { useMotionValueContext } from "@contexts/MotionStateWrapper";
import { AppStateContext } from "@contexts/AppStateContext";
import HomeLogo from "./components/HomeLogo";
import NavBtn from "./components/NavBtn";
import OverlayController from "../ScreenOverlay/OverlayController";
import { container } from "./appbar.module.scss";

function HideOnScroll( { children } ){
  const { currentPath } = useContext( AppStateContext );
  const [slide, setSlide] = useState( true );

  const { scrollDirection } = useLocomotiveScroll();

  useEffect( () => {
    const deb = debounce( arg => {
      if ( !arg ) return;

      if ( arg === "up" ) setSlide( true );
      else if ( arg === "down" ) setSlide( false );
    }, 350 );

    scrollDirection.onChange( deb );

    return () => {
    };
  }, [] );

  useEffect( () => {
    setSlide( true );

  }, [currentPath] );

  return (
    <Slide appear={false} direction="down" in={slide}>
      {children}
    </Slide>
  );
}


const appBarVariants = {
  initial: {},
  animate: {
    transition: {
      delayChildren: .4
    }
  }
};

function HeaderAppBar(){
  const { menuIsOpen } = useMotionValueContext();

  const toggleMenu = () => !OverlayController.isAnimating && !window.isMenuAnimating && menuIsOpen.set( !menuIsOpen.get() );

  return (
    <HideOnScroll>
      <motion.div className={container} variants={appBarVariants}>
        <HomeLogo toggleMenu={() => menuIsOpen.get() && toggleMenu()} />

        <NavBtn menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
      </motion.div>
    </HideOnScroll>
  );
}

export default React.memo( HeaderAppBar );
