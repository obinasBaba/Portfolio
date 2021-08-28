import React from 'react'
import { transition} from '../variants'
import {motion} from 'framer-motion'
import styled from 'styled-components'
import {spacing, title} from '../../../../styles/mixins'

const TitleContainer = styled( motion.h1 )`
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
  //border: thin solid lightblue;
  letter-spacing: 2.5px;
  font-family: 'Poppins Black', serif;
  overflow-wrap: break-word;

  ${spacing('mt', 2)}
  ${title(3.35)};

  .word {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    vertical-align: top;
  }
`

const titleVariant = {
  fromProjectsInitial: {},
  fromProjectsAnimate: {
    scale: 1.3,
    y: -30,
    originX: 0
  },

  initial: {},
  animate: {
    scale: 1.3,
    y: -30,
    originX: 0
  },

  exit(arg){
    if ( arg && arg.path === '/projects/' ){
      const delay = arg.isTop ? arg.isTop.get() : false;

      return{
        scale: 1,
        y: 0,
        transition: {
          ...transition,
          delay: delay ? 0 : 1,
        }
      }

    }
    return {
      opacity: 0,
    }
  },
}

const Title = ( {title} ) => {
  return (
    <TitleContainer className="title"
               variants={titleVariant}
               transition={transition}
    >
      {title.split(' ').map((word, i) => (
        <motion.span className="word">{word}&#160;</motion.span>
      ))}
    </TitleContainer>
  )
}

export default Title
