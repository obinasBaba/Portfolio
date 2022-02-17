import React from 'react'
import styled, {css} from 'styled-components'
import {spacing, text} from '../../../../styles/mixins'
import {Container, Typography} from '@material-ui/core'
import {motion} from "framer-motion";
import {largeUp, mediumUp} from "../../../../styles/mixins/breakpoints";

const AboutHeroContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  
  ${largeUp( css`
    ${spacing('mt', 10)};
    
  ` )};
`

const Hello = styled( Typography )`
  font-family: 'Elianto-Regular',serif;
  font-weight: bolder;
  margin-bottom: 2rem;
`

const Motto = styled( Typography )`
  font-weight: bolder;
  color: #7b8a9b;
  //line-height: 110%;
    ${spacing('mb', 8.2)};

  ${largeUp( css`
    
    line-height: 110%;
  ` )};


`

const Text = styled( Typography )`
  color: #7b8a9b;;


  ${text(1)};
  
  ${largeUp( css`
    max-width: 36ch;
    ${spacing('mt', 6)};

  ` )};
`

const helloTxtVariants = {
  initial: {
    opacity: 0,
    y: -200
  },
  animate: {
    opacity: 1,
    y: 0,
    transitionEnd: {
      // opacity: 0,
    },
  },
  exit: {
    opacity: 0,
    y: -200
  },

  transition: {
    duration: 1
  }
}

const introTxtVariants = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 200
  },

  transition: {
    duration: 1
  }
}

const aboutHeroVariants = {
  animate(arg){
    let loading = window.fromLoading

    return {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.2,
      }
    }
  }
}


const AboutHero = () => {

  return (
    <AboutHeroContainer   variants={aboutHeroVariants}>

      <Container maxWidth='lg' >
        <motion.div variants={aboutHeroVariants} >

          <motion.div variants={helloTxtVariants}
                      transition={helloTxtVariants.transition}>
            <Hello variant='h1'>
              Hello.
            </Hello>
          </motion.div>

          <motion.div variants={introTxtVariants}
                      transition={introTxtVariants.transition}>

            <Motto variant='h2' >
              I create progress by designing and developing digital experiences,
            </Motto>

            <Text>
              I believe that we can live in a world when every
              product or service has an easy to use experience on platforms and
              my mission is to make it happen.
            </Text>
          </motion.div>

        </motion.div>


      </Container>


    </AboutHeroContainer>
  )
}

export default AboutHero
