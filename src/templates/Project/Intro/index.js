import React from 'react'
import { Container, Typography } from '@material-ui/core'
import styled, { css } from 'styled-components'
import { heightWidth, largeUp, mediumUp, spacing } from '../../../styles/mixins'
import MotionBtn from '../../../components/MotionBtn'
import Logo from './logoEffect.svg'

const IntroContainer = styled(Container)`
  position: relative;
  background-color: #973c22;
  //color: ${({ theme }) => theme.palette.primary.main};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  text-align: center;
  ${spacing('pv', 10)};
  ${spacing('mb', 10)};

  &::after{
    content: url(${Logo});
    position: absolute;
    display: block;
    bottom: -35%;
    left: 5%;
    z-index: 11;
    opacity: .1;
  } 
  
  ${mediumUp(css`
    ${spacing('pv', 4)};
  `)};

  & > :not(:first-child) {
    ${heightWidth('margin-top', 3)};
  }
  
  
  
`

const Description = styled( Typography )`
  max-width: 45ch;
  font-family: var(--sofia-pro);
  font-weight: 300;
  line-height: 160%;
  letter-spacing: 0.5px;
  opacity: 0.7;
`

const Title = styled( Typography )`
  
`

const Intro = () => {
  return (
    <IntroContainer maxWidth={false} fixed={false} component={'section'}>

      <Typography variant={'h1'}>The Project</Typography>

      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        aperiam beatae, consectetur deserunt explicabo nemo, non pariatur sit
        ut, velit vero voluptates? Amet dicta eos et maiores quam sunt voluptas.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, quas.
      </Description>

      <MotionBtn text={'Visit Website'} />

    </IntroContainer>
  )
}

export default Intro
