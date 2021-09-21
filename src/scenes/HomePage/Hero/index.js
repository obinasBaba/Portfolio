import React from 'react'
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



const Hero = () => {
  // const { logo } = useHeaderAssets();

  return (
    <>
      <HeroContainer >
        <TextContainer>

          <Greeting>
            <Typography variant="h1"> hi, I'm </Typography>

            <H />
            <Typography  variant="h1">
              enok
            </Typography>

          </Greeting>


          <div>
            {/*<Lines/>*/}

          </div>

          <Intro>
            <Typography variant='h3'>
              S-O-L-I-D front-end, <br/> less frame-work, less bugs, more engineering patterns!
            </Typography>

            <Typography  >
              Your Mind is the best frame-work - by....
            </Typography>
          </Intro>

        </TextContainer>

        <Moon pos='absolute' />

      </HeroContainer>
    </>
  )
}

export default Hero
