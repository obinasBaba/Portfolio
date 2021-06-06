import React from 'react'
import styled, { css } from 'styled-components'
import { Container, Typography } from '@material-ui/core'
import BG from './preview-1.png'
import {  mediumUp, spacing } from '../../../styles/mixins'
import MotionBtn from '../../../components/MotionBtn'

const NextProjectContainer = styled(Container)`
  position: relative;
  display: flex;
  flex-flow: column;

  background-image: url(${BG});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-image: linear-gradient(
      130deg,
      #02021eff -10%,
      rgba(2, 2, 30, 0)
    );
    backdrop-filter: blur(5px);
  }

  ${spacing('pv', 20)};
  ${spacing('pt', 10)};
  ${spacing('ph', 10)};
  ${spacing('pr', 0)};

  ${mediumUp(css`
    flex-flow: wrap row;
    align-items: center;

    ${spacing('pr', 10)};
  `)};

  & * {
    z-index: 2;
  }

  & > :first-child {
    flex: 1 1 100%;
    font-family: var(--sofia-pro);
    font-weight: 300;
    letter-spacing: 1px;
    opacity: 0.7;
  }

  & > :nth-child(2n) {
    font-weight: 900;
    //line-height: 90%;
  }

  & > :last-child {
    ${spacing('mt', 5)}

    ${mediumUp(css`
      margin-left: auto;
      ${spacing('mt', 3)}
    `)};
  }
`

const NextProject = () => {
  return (
    <NextProjectContainer maxWidth={false} fixed={false} component={'section'}>
      <Typography noWrap> Next Work </Typography>
      <Typography variant="h1"> Project Lato </Typography>

      <MotionBtn text="Next Work" clr={'#02021EFF'} />
    </NextProjectContainer>
  )
}

export default NextProject
