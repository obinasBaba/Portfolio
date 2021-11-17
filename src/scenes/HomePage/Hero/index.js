import React, { useContext, useEffect } from "react";
import { Typography } from '@material-ui/core'
import H from './H.inline.svg'
import {
  Greeting,
  HeroContainer,
  Intro, Lines,
  SvgWithTxt,
  TextContainer,
} from './components'
import Moon from '../../../components/MoonLight'
import { AppStateContext } from "../../../contexts/AppStateContext";


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
    y: -200
  },

  transition: {
    duration: .8
  }
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
  animate(arg){
    console.log(window.fromLoading);
    let loading = window.fromLoading

    return {
      transition: {
        delayChildren: loading ? .8 : 0,
        staggerChildren: 0.2,
      }
    }
  }
}

const Hero = () => {
  // const { logo } = useHeaderAssets();

  const { backgroundOverlay, } = useContext(AppStateContext)

  useEffect(() => {
    setTimeout(() => {
      window.fromLoading = false
    }, 1000)
  }, [])

  return (
    <>
      <HeroContainer variants={{}}>

        <TextContainer variants={textContainerVariants}
                       custome={{backgroundOverlay}}
        >

          <Greeting variants={greetingTextVariants}
                    transition={greetingTextVariants.transition}>

            <Typography variant="h1"> hi, I am </Typography>
            <H />
            <Typography  variant="h1">
              enok
            </Typography>

          </Greeting>

          <Intro variants={introContainerVariants}
                 transition={introContainerVariants.transition}>

            <Typography variant='h3'>
              S-O-L-I-D front-end, <br/> less frame-work, less bugs, more engineering patterns!
            </Typography>

            <Typography variant='h5' >
              Your Mind is the best front-end frame-work - by....
            </Typography>
          </Intro>

        </TextContainer>

        <Moon pos='absolute' />

      </HeroContainer>
    </>
  )
}

export default Hero
