import React from 'react'
import { Typography } from '@material-ui/core'
import H from './H.inline.svg'
import useHeaderAssets from '../../../hooks/queries/useHeaderAssets'
import { HeroContainer, Lines, SvgWithTxt, TextContainer } from './components'
import styled from 'styled-components'

const BG = styled.div`
  position: absolute;
  top: 0;
  left: 0
  
  //height: 400px;
  //width: 500px;
`

const Hero = () => {

  const { logo } = useHeaderAssets();

  return (
    <>
      <HeroContainer  >


        <TextContainer>

          <Typography variant="h2"> hi, I'm </Typography>

          <SvgWithTxt>
            <H />
            <Typography className='enok' variant="h1">enok</Typography>
          </SvgWithTxt>

          <Lines/>

          <Typography variant='h5' className='job'>
            Web developer / <br/>
            markup engineer.
          </Typography>

        </TextContainer>




      </HeroContainer>
    </>
  )
}

export default Hero
