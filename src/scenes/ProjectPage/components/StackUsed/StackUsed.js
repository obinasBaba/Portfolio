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
  grid-row: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding: 0;
  overflow: hidden;
  
  ${gridColWidth(3, 30)};
  ${spacing('mt', 1)};

  ${mediumUp(css`
    grid-row: 2;
    display: flex;

    ${({ reversed }) =>
      reversed ? gridColWidth(40, 59) : gridColWidth(6, 20)};
  `)};
  
  ${ largeUp( css`

    ${({ reversed }) =>
            reversed ? gridColWidth(21, 36) : gridColWidth(6, 20)};
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
  animateFp: {
    transition: {
      staggerChildren: .1,
      delayChildren: 1.5,
    }
  },
  exitFb: {
    transition: {
      staggerChildren: .1,
      delayChildren: .5,
    }
  }
};

const itemVariant = {
  initialFp: {
    y: '130%'
  },
  animateFp: {
    y: 0
  },
  exitFp: {
    y: '130%'
  }
}

const StackUsed = ({ reversed, items, controller }) => {


  return (
    <StackList reversed={reversed}
               variants={listVariant}
               initial='initial'
               animate={controller}
    >
      {items.map(({ publicURL }) => {
        return (
          <motion.li transition={transition}
                     variants={itemVariant}
                     key={publicURL}>
            <img src={publicURL} alt="stack logo"   />
          </motion.li>
        )
      })}
    </StackList>
  )
}

export default StackUsed
