import styled, { css } from 'styled-components'
import { Typography } from '@material-ui/core'
import {
  gridColWidth,
  gridify,
  length,
  largeUp,
  mediumUp,
  spacing, text,
} from '../../../../../styles/mixins'
import { motion } from 'framer-motion'

export const OthersContainer = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  
  //border: thin solid red;
  
  
  svg{
    position: absolute;
    //border: thin solid lightblue;
    pointer-events: none;
    will-change: transform;
    //border: thin solid red;


    .distort__img {
      //opacity: 0;
      z-index: -1;
      object-fit: cover;
    }
  }
`


export const Title = styled(Typography)`
  line-height: 1.25em;
  font-weight: 900;
  grid-row: 1;
  -webkit-text-stroke: 1px white;
  color: transparent;
  text-align: left;
  //align-self: flex-start;
  ${spacing('ml', 15)};

  writing-mode: vertical-lr;

  text-orientation: mixed;

`

export const List = styled( motion.ul )`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  gap: 4rem;
  
  ${spacing('m', 5)};
  ${spacing('mh', 10)};
  // ${spacing('ml', 40)};
  //text-align: center;
  //border: thin solid red;

  z-index: 1;
`

export const ListItem = styled( motion.li )`
  cursor: pointer;
  padding: 0;
  margin: 0;
  //max-width: 45ch;
  flex: 1 1 32%;
  
  // ${spacing('p', 1)};
  // ${spacing('ph', 2)};


  .title{
    // ${ text(2.4) };
    line-height: 1.7;
    
    span{
      display: inline-block;
    }
  }

`
