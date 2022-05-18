import React, { useContext, useEffect, useState } from "react";
import Slide from "@material-ui/core/Slide";
import styled, { css } from "styled-components";
import { debounce } from "lodash";
import { motion } from "framer-motion";
import { useScrollTrigger } from "@material-ui/core";
import HomeLogo from "./components/HomeLogo";
import NavBtn from "./components/NavBtn";
import { spacing } from "../../styles/mixins";
import { AppStateContext } from "../../contexts/AppStateContext";
import { MotionValueContext } from "../../contexts/MotionStateWrapper";

import { mediumUp } from "../../styles/mixins/breakpoints";

function HideOnScroll( { children, window } ){
  const { currentPath } = useContext( AppStateContext );
  const [slide, setSlide] = useState( true );
  const trigger = useScrollTrigger( {
    target: window ? window() : undefined
  } );

  const [isLoco, setIsLoco] = useState( true );

  const {
    moScroll: { scrollDirection },
    locoInstance
  } = useContext( MotionValueContext );

  useEffect( () => {
    setSlide( true );

    setTimeout( () => {
      if ( locoInstance.get() ) {
        setIsLoco( true );
      } else setIsLoco( false );
    }, 1200 );
  }, [currentPath] );

  useEffect( () => {
    let deb = debounce( arg => {
      if ( !arg ) return;

      if ( arg === "up" ) setSlide( true );
      else if ( arg === "down" ) setSlide( false );
    }, 350 );

    scrollDirection.onChange( deb );

    return () => {
    };
  }, [] );

  return (
    <Slide appear={false} direction="down" in={isLoco ? slide : !trigger}>
      {children}
    </Slide>
  );
}

const NavContainer = styled( motion.div )`
  position: fixed;
  z-index: 20;
  top: 0;
  width: 100%;
  padding: 2rem 2rem 1.3rem;
  transition: all 0.35s ease-in-out;
  pointer-events: none;

  display: flex;
  justify-content: space-between;

  &::after {
    //content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    //background-image: var(--head-gradient);
    opacity: var(--head-opacity);
    transition: all 0.35s ease-in-out;
  }

  ${mediumUp( css`
    ${spacing( "pv", 2 )};
    ${spacing( "ph", 6 )};
  ` )};
`;

const appBarVariants = {
  initial: {},
  animate: {
    transition: {
      delayChildren: .4
    }
  }
};

function HeaderAppBar(){
  const { menuIsOpen } = useContext( MotionValueContext );

  const toggleMenu = () => menuIsOpen.set( !menuIsOpen.get() );

  return (
    <>
      <HideOnScroll>
        <NavContainer variants={appBarVariants}>
          <HomeLogo toggleMenu={() => menuIsOpen.get() && toggleMenu()} />

          <NavBtn menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
        </NavContainer>
      </HideOnScroll>
    </>
  );
}

export default React.memo( HeaderAppBar );
