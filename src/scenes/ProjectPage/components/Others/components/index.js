import styled, { css } from 'styled-components'
import { Typography } from '@material-ui/core'
import {
  gridColWidth,
  gridify,
  heightWidth,
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
  
  border: thin solid red;
  
  
  svg{
    position: absolute;
    //border: thin solid lightblue;
    pointer-events: none;
    will-change: transform;

    .distort__img {
      //opacity: 0;
      z-index: -1;
    }
  }
`


export const Title = styled(Typography)`
  line-height: 1.25em;
  font-weight: 900;
  grid-row: 1;
  -webkit-text-stroke: 1.5px white;
  color: transparent;
  text-align: left;
  //align-self: flex-start;
  // ${spacing('mh', 15)};




`

export const List = styled( motion.ul )`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  //gap: 1rem;
  flex-flow: column;
  //align-items: center;
  //justify-content: space-evenly;
  ${spacing('mt', 5)};
  text-align: center;
  border: thin solid red;

  z-index: 1;
`

export const ListItem = styled( motion.li )`
  cursor: pointer;
  padding: 0;
  margin: 0;
  // ${spacing('p', 1)};
  ${spacing('ph', 2)};


  h1{
    ${ text(2.4) };

  }

`
