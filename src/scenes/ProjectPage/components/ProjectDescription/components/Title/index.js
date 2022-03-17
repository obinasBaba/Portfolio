import React from 'react'
import styled, {css} from 'styled-components'
import {motion} from 'framer-motion'
import {spacing, title} from '../../../../../../styles/mixins'
import {largeUp} from "../../../../../../styles/mixins/breakpoints";


export const HeadlineTitle = styled(motion.h1)`
  //line-height: 1.25em;
  pointer-events: initial;
  font-weight: 700;
  margin: 0;
  line-height: 1.3; 
  //letter-spacing: 2.5px;
  //overflow: hidden;
  font-family: "Poppins Black",serif;
  overflow-wrap: break-word;
  color: white;

  ${spacing('mt', 2)}
  ${ title(4) };
  //word-spacing: 2px;
  
  ${largeUp( css`
    ${ title(3.65) };

  ` )};
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
  font-family: var(--eli);
  font-weight: bolder;
  letter-spacing: 3px;
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
