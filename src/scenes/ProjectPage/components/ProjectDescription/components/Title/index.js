import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { spacing, title } from '@/styles/mixins';
import { largeUp, mediumUp } from '@/styles/mixins/breakpoints';

export const HeadlineTitle = styled(motion.h1)`
  //line-height: 1.25em;
  pointer-events: initial;
  font-weight: 900;
  margin: 0;
  //letter-spacing: 2.5px;
  //overflow: hidden;
  //font-family: "Poppins Black", serif;
  overflow-wrap: break-word;
  color: white;

  //border: 1px solid red;

  ${spacing('mt', 2)}
  ${title(4)};
  //word-spacing: 2px;

  ${mediumUp(css`
    line-height: 1.3;
    letter-spacing: initial;
  `)};

  ${largeUp(css`
    ${title(3.65)};
  `)};
`;

const Word = styled(motion.span)`
  display: inline-block;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: top;
`;

const Letter = styled(motion.span)`
  font-family: var(--eli);
  font-weight: bolder;
  letter-spacing: 3px;
  display: inline-block;
  //border: thin solid tomato;
`;

function Title ({
  title: titleTxt = '', variants = { title: {}, letter: {}, transition: {} },
}) {
  return (
    <HeadlineTitle variants={variants.title} transition={variants.transition}>
      {titleTxt.split(' ').map((word, idx) => (
        <Word key={idx}>
          {Array.from(word).map((letter, idx2) => (<Letter
            key={idx2 + 100}
            variants={variants.letter}
            transition={variants.transition}
          >
            {letter}
          </Letter>))}
          &#160;
        </Word>
      ))}
    </HeadlineTitle>);
}

export default Title;
