import React, { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { debounce } from "lodash";
import { motion } from "framer-motion";
import { Slide, useScrollTrigger } from "@material-ui/core";
import HomeLogo from "./components/HomeLogo";
import NavBtn from "./components/NavBtn";
import { spacing } from "../../styles/mixins";
import { AppStateContext } from "../../contexts/AppStateContext";
import { useMotionValueContext } from "../../contexts/MotionStateWrapper";

import { mediumUp } from "../../styles/mixins/breakpoints";
import OverlayController from "../ScreenOverlay/OverlayController";
import { useLocomotiveScroll } from "@contexts/LocoMotive";
import { container } from "./appbar.module.scss";

function HideOnScroll( { children, window } ){
  const { currentPath } = useContext( AppStateContext );
  const [slide, setSlide] = useState( true );
  const trigger = useScrollTrigger( {
    target: window ? window() : undefined
  } );

  const [isLoco, setIsLoco] = useState( true );

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
