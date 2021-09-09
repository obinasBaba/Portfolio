import React from 'react'
import styled from 'styled-components'
import {HeadLineTitle} from '../shared'
import {Typography} from '@material-ui/core'
import {text} from '../../../../styles/mixins'

const ThankYouContainer = styled.div`
  
`

const Body = styled(Typography)`
  font-weight: lighter;
  //color: #bac2d3;
  letter-spacing: 0.6px;
  line-height: 170%;
  //color: #02021e;

  
  ${text(1)};
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


    </ThankYouContainer>
  )
}

export default ThankYou
