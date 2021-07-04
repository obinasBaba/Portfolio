import React from 'react'
import styled, { css } from 'styled-components'
import {
  gridColWidth,
  heightWidth,
  largeUp,
  mediumUp,
  spacing,
} from '../../../../styles/mixins'
import { motion } from 'framer-motion'

const StackList = styled(motion.ul)`
  position: absolute;
  left: 5%;
  top: 100%;
  & > :not(:first-child){
    ${spacing('ml', 3)};

  }
  
  grid-row: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding: 0;
  overflow: hidden;
  
  // ${gridColWidth(3, 30)};
  ${spacing('mt', 1)};

  ${mediumUp(css`
    grid-row: 2;
    display: flex;

    // ${({ reversed }) => reversed ? gridColWidth(40, 59) : gridColWidth(6, 20)};
  `)};
  
  ${ largeUp( css`
    //display: none;
    ${  gridColWidth(25, 36)} 
    
  ` ) };
  

  img {
    display: block;
    width: auto;
    margin: 0 auto;
    object-fit: cover;
    ${heightWidth('width', 2.5)};
    ${heightWidth('height', 2.5)};
  }
  
`

const transition = {
  duration: 1,
  ease: [0.6, 0.01, 0, 0.9],
}

const listVariant = {
  animateFp(c){
    return {
      transition: {
        staggerChildren: .1,
        delayChildren: c.exit ? 0 : 1.2
      }
    }
  },
  exitFb: {
    transition: {
      staggerChildren: 1,
      delayChildren: .5,
    }
  },

  exit: {
    transition: {
      duration: .7,
      staggerChildren: .06,
      // delayChildren: .5,
    }
  }
};

const itemVariant = {
  initialFp: {
    y: '130%'
  },

  initial: {
    y: '130%'
  },

  animateFp: {
    y: 0
  },
  exitFp: {
    y: '130%'
  },

  exit:{
    y: '130%',
    transition: {
      duration: .7
    }
  }
}

const StackUsed = ({  items, custom }) => {


  return (
    <StackList variants={listVariant} custom={custom}>

      {items.map(({ publicURL }) => {
        return (
          <motion.li transition={transition}
                     variants={itemVariant}
                     custom={custom}
                     key={publicURL}>

            <img src={publicURL} alt="stack logo" loading={'lazy'}   />
          </motion.li>
        )
      })}
    </StackList>
  )
}

export default StackUsed
