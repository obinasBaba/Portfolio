import React from 'react'
import styled, { css } from 'styled-components'
import { Container, Typography } from '@material-ui/core'
import BG from './preview-1.png'
import {  spacing } from '../../../styles/mixins'
import MotionBtn from '../../MotionBtn'
import {mediumUp} from "../../../styles/mixins/breakpoints";

const NextProjectContainer = styled.section`
  position: relative;
  display: flex;
  flex-flow: column;
  background-image: url(${({url}) => url});
  
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  color: white !important;

  ${spacing('mt', 25)};


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
      #02021eff 10%,
    rgba(2, 2, 30, 0));
  }

  ${spacing('pv', 15)};
  // ${spacing('ph', 10)};
  // ${spacing('pr', 0)};

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

const NextProjectWrapper = styled.div`
    //max-width: 80%;
  margin-left: 10%;
`

const NextProject = ({title, url, thumbnailUrl}) => {
  return (
    <NextProjectContainer maxWidth={'xl'} component={'section'} url={thumbnailUrl}>


        <NextProjectWrapper maxWidth='xl'>
            <Typography noWrap> Next Work </Typography>
            <Typography variant="h1" className='title'> {title} </Typography>

            <MotionBtn text="Go to next"  to={url} />
        </NextProjectWrapper>

    </NextProjectContainer>
  )
}

export default NextProject
