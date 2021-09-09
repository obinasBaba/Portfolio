import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {spacing, title} from '../../../../../../styles/mixins'


export const HeadlineTitle = styled(motion.h1)`
  //line-height: 1.25em;
  pointer-events: initial;
  font-weight: 700;
  margin: 0;
  line-height: 1.3; 
  letter-spacing: 2.5px;
  //overflow: hidden;
  font-family: "Poppins Black",serif;
  overflow-wrap: break-word;

  ${spacing('mt', 2)}
  ${ title(3.35) };
  //word-spacing: 2px;
`

const Word = styled( motion.span )`
  display: inline-block;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: top;
`

const Letter = styled( motion.span )`
  font-family: "Poppins Black",serif;
  display: inline-block;
  //border: thin solid tomato;
`

const Title = ({title='',
  variants = { title: {}, letter: {}, transition: {} }}) => {

  return (
    <HeadlineTitle variants={variants.title}
                   transition={variants.transition}
    >
      {
        title.split(' ').map((w, i) => (
          <Word key={title + i}>
            {
              Array.from(w)
                .map((letter, i) => (
                <Letter key={letter + i}
                        variants={variants.letter}
                        transition={variants.transition}
                >
                  {letter}
                </Letter>
              ))
            }
            &#160;
          </Word>
        ))
      }
    </HeadlineTitle>
  )
}

export default Title