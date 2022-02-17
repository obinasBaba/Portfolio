import React from 'react'
import styled, { css } from 'styled-components'
import { Container, Typography } from '@material-ui/core'
import BG from './preview-1.png'
import {  spacing } from '../../../styles/mixins'
import MotionBtn from '../../MotionBtn'
import {mediumUp} from "../../../styles/mixins/breakpoints";

const NextProjectContainer = styled(Container)`
  position: relative;
  display: flex;
  flex-flow: column;
  background-image: url(${BG});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  color: #c9dae5 !important;

  &::after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    backdrop-filter: blur(5px);
    background-image: linear-gradient(130deg,
      #02021eff -10%,
    rgba(2, 2, 30, 0));
  }

  ${spacing('pv', 10)};
  ${spacing('ph', 10)};
  ${spacing('pr', 0)};

  ${spacing('gap', 2)};


  & .title {
    font-family: var(--eli);
    font-weight: bolder;
    text-shadow: 0.1em 0.1em 0.3em #000;
  }

  & * {
    z-index: 2;
  }
`

const NextProject = () => {
  return (
    <NextProjectContainer maxWidth={false} fixed={false} component={'section'}>
      <Typography noWrap> Next Work </Typography>
      <Typography variant="h1" className='title'> Project Lato </Typography>

      <MotionBtn text="Next Work"   />
    </NextProjectContainer>
  )
}

export default NextProject
