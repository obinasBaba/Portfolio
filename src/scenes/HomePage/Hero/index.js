import React, { useContext, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import { Greeting, HeroContainer, Intro, TextContainer } from './components'
import Moon from '../../../components/MoonLight'
import { BackgroundOverlayStateContext } from '../../../contexts/AppStateContext'
import LoadStateContext from '../../../contexts/LoadStateContext'
import { useAnimation } from 'framer-motion'
import H from './H.inline.svg'

const greetingTextVariants = {
  initial: {
    opacity: 0,
    y: -200,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -200,
  },

  transition: {
    duration: 0.8,
  },
}

const introContainerVariants = {
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
    duration: .8
  }
}

const textContainerVariants = {
  animate () {

    return {
      transition: {
        delayChildren: .8,
        staggerChildren: 0.2,
      }
    }
  }
}

const Hero = () => {
  // const { logo } = useHeaderAssets();

  // const { backgroundOverlay, } = useContext(AppStateContext)

  useEffect(() => {
      setTimeout(() => {
          window.fromLoading = false
        },
        1000)
    }, [])
  
  return (
    <>
      <HeroContainer variants={{}}
                     initial="initial"
                     animate={'animate'}
                     exit="exit"
      >

        <TextContainer variants={textContainerVariants}>

          <Greeting variants={greetingTextVariants}
                    transition={greetingTextVariants.transition}>

            <Typography variant="h1" className='hi-am' > hi, I am </Typography>
            <H />
            <Typography variant="h1">enok</Typography>

          </Greeting>

          <Intro variants={introContainerVariants}
                 transition={introContainerVariants.transition}>
            <Typography variant='h3' className='intro-txt'>
              S-O-L-I-D front-end,  less frame-work, less bugs, more
              engineering patterns!
            </Typography>

            <Typography variant='h5' className='quote' >
              Your Mind is the best front-end frame-work - by....
            </Typography>
          </Intro>

        </TextContainer>

        <Moon  />

      </HeroContainer>
    </>
  )
}

export default Hero
