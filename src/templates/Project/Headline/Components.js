import styled, {css} from 'styled-components'
import {
  gridColWidth,
  gridify, heightWidth,
  largeUp,
  mediumUp, smallUp,
  spacing, title,
} from '../../../styles/mixins'
import {Container, Typography} from '@material-ui/core'
import {motion} from 'framer-motion'
import img from './preview-111.jpg'

export const HeadlineContainer = styled( motion.div )`
  height: 100vh;
  width: 100vw;
  position: relative;
  //background: #02021e;
  
  ${gridify};
  //align-content: center;
  align-items: center;
  
`



export const ImgGradient = styled( motion.div )`
  ${gridColWidth()}; //mobile-first
  position: relative;
  //filter: blur(5px);
  //border: thick solid red;
  align-self: center;
  
  display: flex;
  align-items: center;
  overflow: hidden;


  ${mediumUp(css`
    grid-row: 1;
    ${ gridColWidth(21, 65)};
    
  `)};

  img {
    width: 100%;
    object-fit: cover;
  }

  .project-image{
    width: 100%;
    height: 100%;
    //height: 100vh;

    //transition: opacity 0s !important;

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

export const MetaTexts = styled(motion.div)`
  
  display: flex;
  flex-flow: column;
  z-index: 1;
  grid-row: 3;
  overflow: hidden;
  align-items: flex-start;
  justify-content: center;
  //display: inline-block;

  //border: thin solid yellow;
  
  & > * {
    margin: 0;
    padding: 0;
  }

  ${gridColWidth(8, 32)}

  & > * + * {
    ${spacing('mt', 4)}
  }

  ${smallUp(css`
    ${spacing('pt', 0)};
  `)};

  ${mediumUp(css`
    grid-row: 1;
    //border: thin solid red;
    ${gridColWidth(4, 48)};
  `)};

  ${largeUp(css`
    ${gridColWidth(8, 37)};
  `)};


  & .pro-title{
    font-family: "Poppins Black",serif;
    font-weight: 700;
    margin: 0;
    ${ title(4.35) };
    line-height: 1.3;
    letter-spacing: 2.6px;
    //border: thin solid rebeccapurple;
  }
  
  .type{
    font-weight: 500;
    letter-spacing: 2.3px;
    
    ${spacing('mt', 5)}
    // ${ heightWidth('font-size', 3) };
    
  }
  
`

