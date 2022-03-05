import React, { useEffect } from "react";
import styled, {css} from 'styled-components'
import AboutHero from './components/AboutHero'
import MyProcess from './components/MyProcess'
import MailUs from '../MailUs'
import Skills from './components/Skills'
import { motion } from "framer-motion";
import LineArt from "../../components/LineArt";
import gsap from "gsap";
import {spacing} from "../../styles/mixins";
import {largeUp, mediumUp} from "../../styles/mixins/breakpoints";
import {useMediaQuery, useTheme} from "@material-ui/core";
import HorizontalScrollText from "./components/HorizontalScrollText";
import img from './components/AboutHero/about-hero-paths.svg'

const AboutPageContainer = styled( motion.div )`
  position: relative;
  z-index: 1;
`


const aboutContainerVariants = {

}

const ArtContainer = styled( motion.div )`
  position: absolute;
  pointer-events: none;
  z-index: -1;
  //opacity: .8;

  height: 250vmax;
  width: 220vmax;
  
  ${spacing( 'top', -20 ) };
  
  ${largeUp( css`
    left: -40vw;
    height: 250vh;
    width: 220vw;

    ${spacing( 'top', 20 ) };
    
  ` )};

  //border: thick solid red;
  
  & * {
    pointer-events: none;
  }
`

const artContainerVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },

  transition: {
    delay: 1.1,
    duration: 1,
    ease: [0.6, 0.01, 0, 0.9],
  }
}

const AboutPage = () => {

  /*const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('lg'))

  useEffect(() => {
    return;
    if (!matches) return;
    let artContainer = document.body.querySelector('.art-container')

    setTimeout(() => {
      gsap.to(artContainer, {
        y: -500,
        ease: 'none',
        scrollTrigger: {
          trigger: '#about',
          scrub: true,
          scroller: '[data-scroll-container]',
          start: () => 'top 0%',
          // markers: true,
          end: () => '+=' + 1600,
        },
      })
    }, 1000);


    // STrigger.refresh()

  }, [matches])*/

  return (
    <AboutPageContainer variants={aboutContainerVariants}
                        transition={{}}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        id='#about'
    >
      <AboutHero/>


      <HorizontalScrollText/>

      <Skills/>

      <MyProcess/>

      <MailUs/>

    </AboutPageContainer>
  )
}

export default AboutPage
