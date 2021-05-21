import React from 'react'
import { Typography } from '@material-ui/core'
import H from './H.inline.svg'
import { StaticImage } from 'gatsby-plugin-image'
import useHeaderAssets from '../../../hooks/queries/useHeaderAssets'
import {
  HeroContainer,
  SvgEffect,
  SvgWithTxt,
  TextContainer,
  TextWrapper,
} from './components'

const Hero = () => {

  const { logo } = useHeaderAssets();

  return (
      <HeroContainer pic={logo.publicURL} maxWidth={'lg'} fixed={true} >

        <TextContainer>

          <Typography variant="h2"> Hi, I'm </Typography>

          <SvgWithTxt>
            <H />
            <TextWrapper >
              <Typography variant="h1">enok.</Typography>
              <Typography>Web developer.</Typography>
            </TextWrapper>
          </SvgWithTxt>

        </TextContainer>

        <StaticImage src={'./heroPic.jpg'}
                     className='hero-pic'
                     alt={'hero photo'}/>


        <SvgEffect/>

      </HeroContainer>
  )
}

export default Hero