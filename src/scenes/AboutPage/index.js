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
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
  },
  exit: {
    exit: 0,
  },

  transition: {
    duration: 1,
    ease: [0.6, 0.01, 0, 0.9],
  }

}



const AboutPage = () => {


  return (
    <AboutPageContainer variants={aboutContainerVariants}
                        transition={aboutContainerVariants.transition}
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
