import React from 'react'
import { Typography } from '@material-ui/core'
import H from './H.inline.svg'
import { HeroContainer, Lines, SvgWithTxt, TextContainer } from './components'
import Moon from '../../../layouts/Components/Moon'

const Hero = () => {
  // const { logo } = useHeaderAssets();

  return (
    <>
      <HeroContainer >
        <TextContainer>
          <Typography variant="h2"> hi, I'm </Typography>

          <SvgWithTxt>
            <H />
            <Typography className="enok" variant="h1">
              enok
            </Typography>
          </SvgWithTxt>

          <Lines />

          <Typography variant="h5" className="job">
            Web developer / <br />
            markup engineer.
          </Typography>
        </TextContainer>

        <Moon pos='absolute' />

      </HeroContainer>
    </>
  )
}

export default Hero
