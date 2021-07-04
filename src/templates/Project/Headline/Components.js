import styled, { css } from 'styled-components'
import {
  gridColWidth,
  gridify,
  largeUp,
  mediumUp,
  smallUp,
  spacing,
  title,
} from '../../../styles/mixins'
import { Typography } from '@material-ui/core'
import { motion } from 'framer-motion'

export const HeadlineContainer = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: relative;
  //background: #02021e;

  ${gridify};
  //align-content: center;
  align-items: center;
  align-content: center;
  //border: thin solid #FB7209;
`

export const ImageWrapper = styled(motion.div)`
  ${gridColWidth()}; //mobile-first
  background: rgba(55,25,202,1);
  position: relative;
  //border: thick solid red;
  align-self: center;

  ${mediumUp(css`
    grid-row: 1;
    ${gridColWidth(25, 65)};
  `)};

  img {
    width: 100%;
    object-fit: cover;
  }

  .overlay {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(55, 25, 202, 0.45);
    mix-blend-mode: soft-light;
    backdrop-filter: blur(5px);
    //filter: blur(15px);
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
  height: 100vh;

  img {
    width: 100%;
    object-fit: cover;
  }
`

export const MetaTexts = styled(motion.div)`
  display: flex;
  flex-flow: column;
  z-index: 1;
  grid-row: 2;
  //border: thin solid red;
  margin-left: calc(100vw / 64 * 2);

  ${gridColWidth(8, 58)}
  ${spacing('pt', 6)};
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
    ${gridColWidth(8, 35)};
    ${spacing('pt', 6)};
  `)};
  
  & > :last-child{
    ${spacing('mt', 4.5)};
  }

  & .pro-title {
    font-weight: 700;
    margin: 0;
    ${spacing('mt', 2)}
    ${ title(3.35) };
    line-height: 1.3;
    //border: thin solid lightblue;
    letter-spacing: 2.5px;
    //overflow: hidden;
    font-family: "Poppins Black",serif;


    overflow-wrap: break-word;
   

    .word{
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      vertical-align: top;
    }

  }

  
`

export const Tags = styled(Typography)`
  display: none;
  font-weight: 300;
  line-height: 1.6em;
  letter-spacing: 0.5px;
  color: #b3afaf;
  opacity: 0;

  ${largeUp(css`
    display: initial;
  `)};
`

export const BG = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #02021e;

`