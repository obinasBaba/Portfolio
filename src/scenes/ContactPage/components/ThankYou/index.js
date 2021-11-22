import React from 'react'
import styled, { css } from 'styled-components'
import { HeadLineTitle } from '../shared'
import { Typography } from '@material-ui/core'
import { length, text } from '../../../../styles/mixins'
import LineArt from '../../../../components/LineArt'

const ThankYouContainer = styled.div`
  //border: thin solid red;
  position: relative;
`

const Body = styled(Typography)`
  font-weight: lighter;
  //color: #bac2d3; // i thought u said u hadnt your ear phone with you
  letter-spacing: 0.6px;
  line-height: 170%;
  //color: #02021e;


  ${text(1)};
`

const ArtContainer = styled.div`
  position: absolute;
  pointer-events: none;
  top: -100px;
  left: -60vw;
  //right: -30%;
  z-index: -1;
  opacity: .8;

  height: 250vh;
  width: 220vw;

  //border: thick solid red;
  
  & * {
    pointer-events: none;
  }
`

const ThankYou = () => {

  return (
    <ThankYouContainer>
      <HeadLineTitle variant='h2'>
        Thank you.
      </HeadLineTitle>

      <div style={{
        margin: '-2rem 0 0 1rem',
      }}>
        <Body>
          Let's create something great.
        </Body>
        <Body>
          I'll be with you soon.
        </Body>
      </div>

      <ArtContainer className='art-container'>
        <LineArt/>
      </ArtContainer>

    </ThankYouContainer>
  )
}

export default ThankYou
