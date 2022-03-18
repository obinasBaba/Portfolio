import React, { useContext } from 'react'
import styled from 'styled-components'
import AboutHero from './components/AboutHero'
import MyProcess from './components/MyProcess'
// import MailUs from '../MailUs'
import Skills from './components/Skills'
import { motion } from 'framer-motion'
import HorizontalScrollText from './components/HorizontalScrollText'
import { MotionValueContext } from '../../contexts/MotionStateWrapper'
import loadable from "@loadable/component";


const MailUs = loadable(() => import('../MailUs'))


const AboutPageContainer = styled(motion.div)`
  position: relative;
  z-index: 1;
`


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
    ease: [0.6, 0.01, 0, 0.9],
  }

}



const AboutPage = () => {

    const { mainAnimationController, screenOverlayEvent } = useContext(MotionValueContext)


  return (
    <AboutPageContainer variants={aboutContainerVariants}
                        transition={aboutContainerVariants.transition}
                        initial="initial"
                        animate={ screenOverlayEvent.get() === 'closed' ? 'animate' :  mainAnimationController}
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
