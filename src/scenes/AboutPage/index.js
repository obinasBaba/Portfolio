import React, { useEffect } from "react";
import styled, {css} from 'styled-components'
import AboutHero from './components/AboutHero'
import MyProcess from './components/MyProcess'
import MailUs from '../MailUs'
import Skills from './components/Skills'
import { motion } from "framer-motion";
import LineArt from "../../components/LineArt";
import STrigger from 'gsap/ScrollTrigger'
import gsap from "gsap";
import {largeUp, mediumUp, spacing} from "../../styles/mixins";


const AboutPageContainer = styled( motion.div )`
  position: relative;
  z-index: 1;
`

const ScrollText = styled.section`
  padding: 3rem;
  min-height: 40vh;
  display: flex;
  position: relative;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  //opacity: .3;
  filter: blur(.3px);
  font-family: Elianto-Regular,serif;
  
  ${spacing( 'p', 5)};
  
  ${largeUp( css`
    min-height: 80vh;
  ` )};
  
  .content__breakout{
    margin: 0 -3rem;
    white-space: nowrap;
    text-transform: uppercase;
    font-weight: 200;
    font-style: italic;
    //opacity: .3;
    font-family: Elianto-Regular,serif;
    color: #434e5e;
  }
  
  .content__breakout--big {
    font-size: 10vw;
    font-weight: 200;
  }

  .content__breakout--medium {
    font-size: 5vw;
    color: #5d6c7b;

  }
`

const aboutContainerVariants = {

}

const ArtContainer = styled.div`
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

const AboutPage = () => {

  useEffect(() => {
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
    });


    // STrigger.refresh()

  }, [])

  return (
    <AboutPageContainer variants={aboutContainerVariants}
                        transition={{}}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        id='#about'
    >
      <AboutHero/>

      <ArtContainer className='art-container'>
        <LineArt/>
      </ArtContainer>

      <ScrollText className="content content--feature" data-scroll-section>

        <p className="content__breakout content__breakout--big" data-scroll={true}
           data-scroll-speed="3" data-scroll-direction="horizontal">endless
          acceleration toward infinity</p>
        <p className="content__breakout content__breakout--medium" data-scroll={true}
           data-scroll-speed="-1" data-scroll-direction="horizontal">the
          greatest barrier to your enlightenment</p>

      </ScrollText>

      <Skills/>

      <MyProcess/>

      <MailUs/>

    </AboutPageContainer>
  )
}

export default AboutPage
