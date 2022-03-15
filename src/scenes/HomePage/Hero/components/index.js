import styled, { css } from 'styled-components'
import {
  gridColWidth,
  gridify,
  spacing,
  text,

} from '../../../../styles/mixins'
import { motion } from 'framer-motion'
import {largeUp, mediumUp, smallUp, xLargeUp, xxLargeUp} from "../../../../styles/mixins/breakpoints";

export const HeroContainer = styled(motion.section)`
  position: relative;
  z-index: 1;
  height: 100vh;
  width: 100%;
  
  
  //border: thin solid teal;

  ${gridify()};
  
  ${xLargeUp( css`
    //max-height: 80vmin;

  ` )};
`

export const TextContainer = styled( motion.div )`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  grid-row: 2 / 3;
  margin-bottom: 16vmax;
  
  //border: thin solid chocolate;

  ${ gridColWidth() };
  ${spacing('gap', 3)};

  @media(min-width: 800px) {
    grid-row: initial;
    align-items: center;
    justify-content: center;
  }
  

  ${ mediumUp( css`
    width: 50%;
    margin-bottom: 0;

  ` ) };

  ${xLargeUp( css`
    ${spacing('pl', 4)};
    //padding-left: 5rem;
  ` )};


}`

export const Greeting = styled( motion.div )`
  display: flex;
  align-items: center;
  justify-content: center;
  
  //border: thin solid red;

  svg.greeting {
    max-width: 85%;

    ${xLargeUp( css`
      width: 100%;
      height: 100%;
      
  ` )};

  }

  ${mediumUp( css`
    justify-content: flex-start;
  ` )};

  ${xLargeUp( css`
    width: 70%;

  ` )};

  

`

export const Intro = styled( motion.div )`
  
  max-width: 89%;
  
  


  & .intro-txt {
    max-width: 30ch;
    //font-weight: bold;
    color: var(--light_medium_gray);
    
  }

`
