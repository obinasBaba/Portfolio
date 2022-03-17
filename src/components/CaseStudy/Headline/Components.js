import styled, { css } from 'styled-components'
import {
  gridColWidth,
  gridify, gridMultiplayer,
  spacing,
  title,
} from '../../../styles/mixins'
import { Typography } from '@material-ui/core'
import { motion } from 'framer-motion'
import {largeUp, mediumUp, smallUp} from "../../../styles/mixins/breakpoints";

export const HeadlineContainer = styled(motion.div)`
  position: relative;
  z-index: 1;
  height: 100vh;
  width: 100vw;
  align-items: center;
  align-content: center;
  //border: thin solid #fb7209;
  color: white;

  ${gridify};
`

export const ImageWrapper = styled(motion.div)`
  position: relative;
  align-self: center;
  background: rgba(55, 25, 202, 1);
  //border: thick solid red;

  ${gridColWidth()}; //mobile-first

  ${mediumUp(css`
    grid-row: 1;
    ${gridColWidth(25, 65)};
  `)};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
`

export const InnerWrapper = styled(motion.div)`
  //display: none;
  position: relative;
  //z-index: 1;
  width: 100%;

  overflow: hidden;
  display: flex;
  align-items: center;

  img {
    width: 100%;
    object-fit: cover;
  }
  
  ${largeUp( css`
    height: 100vh;
  ` )};
`

export const Texts = styled(motion.div)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-flow: column;
  grid-row: 2;
  //border: thin solid red;
  word-break: break-all;
  word-wrap: break-word;
  //margin-left: calc(100vw / 64 * 2);

  ${gridColWidth(8, 58)}
  ${spacing('pt', 1.7)};
  ${spacing('pb', 6)};

  & > * + * {
    ${spacing('mt', 2)}
  }

  ${smallUp(css`
    ${spacing('pt', 0)};
  `)};

  ${mediumUp(css`
    grid-row: 1;
    //border: thin solid red;
    gridColWidth(4, 28)
    ${spacing('pb', 0)};
  `)};

  ${largeUp(css`
    ${gridColWidth(10, 35)};
    ${spacing('pt', 12)};
  `)};

  & > :last-child {
    ${spacing('mt', 4.5)};
  }

  & .title {
   
  }
`



export const HeadLineBG = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--contentBg);
  transition: background-color .8s ease-in-out ;
  z-index: -1;
  
  ${mediumUp( css`
    //z-index: -1;
  ` )};
  
  //display: none;
  
  &::after{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 30%;
    width: 2px;
    z-index: 1;
    
    background-color: var(--medium);
    opacity: .05;
    
  }
  &::before{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 30%;
    width: 2px;
    z-index: 1;
    opacity: .05;


    background-color: var(--medium);
  }
  
`