import React from 'react'
import { Container, Typography } from '@material-ui/core'
import styled, { css } from 'styled-components'
import { heightWidth, largeUp, mediumUp, spacing } from '../../../styles/mixins'
import MotionBtn from '../../../components/MotionBtn'
import Logo from './logoEffect.svg'

const IntroContainer = styled(Container)`
  position: relative;
  background-color: #973c22;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  text-align: center;
  ${spacing('pv', 10)};
  ${spacing('mb', 15)};

  &::after{
    content: url(${Logo});
    position: absolute;
    display: block;
    bottom: -25%;
    right: 15%;
    z-index: 11;
    opacity: .1;
  }
  
  
  ${mediumUp(css`
    ${spacing('pv', 4)};
  `)};

  & > :not(:first-child) {
    ${heightWidth('margin-top', 3)};
  }

  & > :first-child {
    font-family: var(--gramatika);
    font-weight: 900;
  }

  & > :nth-child(2n) {
    max-width: 50ch;
  }
  
 
  
`

const Intro = () => {
  return (
    <IntroContainer maxWidth={false} fixed={false} component={'section'}>
      <Typography variant={'h2'}>The Project</Typography>

      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        aperiam beatae, consectetur deserunt explicabo nemo, non pariatur sit
        ut, velit vero voluptates? Amet dicta eos et maiores quam sunt voluptas.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, quas.
      </Typography>

      <MotionBtn text={'Visit Website'} />
    </IntroContainer>
  )
}

export default Intro
