import React, { useContext, useLayoutEffect } from "react";
import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";
import loadable from "@loadable/component";
import AboutHero from "./components/AboutHero";
import MyProcess from "./components/MyProcess";
// import MailUs from '../MailUs'
import Skills from "./components/Skills";
import HorizontalScrollText from "./components/HorizontalScrollText";
import { MotionValueContext } from "../../contexts/MotionStateWrapper";
import { useLocomotiveScroll } from "@contexts/LocoMotive";

import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin( ScrollTrigger );

const MailUs = loadable( () => import("../../components/MailUs") );


const AboutPageContainer = styled( motion.div )`
  position: relative;
  z-index: 1;
`;


const aboutContainerVariants = {
  initial: {
    // opacity: 0
  },
  animate: {
    // opacity: 1,
  },
  exit: {
    // exit: 0,
  },

  transition: {
    duration: 1,
    ease: [0.6, 0.01, 0, 0.9]
  }

};


function AboutPage(){

  const { mainAnimationController, screenOverlayEvent } = useContext( MotionValueContext );

  const { onScrollCallbacks, locoInstance, isReady } = useLocomotiveScroll();
  const triggerRegister = useMotionValue( false );


  useLayoutEffect( () => {

    if ( isReady ) {
      const scrollEl = document.querySelector( "[data-scroll-container]" );

      ScrollTrigger.scrollerProxy( scrollEl, {
        getBoundingClientRect(){
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        },

        pinType: "transform",
        scrollTop( value ){

          const top = arguments.length
            ? locoInstance.scrollTo( value, 0, 0 )
            : locoInstance.scroll.instance.scroll.y;
          // console.log( "scrollTop", top, value );

          return top;
        }
        // fixedMarkers: true
      } );

      onScrollCallbacks.current.set( "about", () => {
        ScrollTrigger.update();
      } );

      const lsUpdate = () => {
        if ( locoInstance ) {
          locoInstance.update();
        }
      };

      lsUpdate();
      window.addEventListener( "resize", lsUpdate );
      ScrollTrigger.addEventListener( "refresh", lsUpdate );
      ScrollTrigger.refresh();
      ScrollTrigger.update();

      triggerRegister.set( true );

    }
  }, [isReady] );


  return (
    <AboutPageContainer variants={aboutContainerVariants}
                        transition={aboutContainerVariants.transition}
                        initial="initial"
                        animate={screenOverlayEvent.get() === "closed" ? "animate" : mainAnimationController}
                        exit="exit"
                        id="#about"
    >
      <AboutHero />


      <HorizontalScrollText />

      <Skills />

      <MyProcess triggerRegister={triggerRegister} />

      <MailUs />

    </AboutPageContainer>
  );
}

export default AboutPage;
