import React from 'react';
import styled, { css } from 'styled-components';
import { Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import {
  gridColWidth, gridify, spacing, text,
} from '../../../../styles/mixins';
import { largeUp, mediumUp } from '../../../../styles/mixins/breakpoints';
import AboutHeroPicture from './AboutHeroPicture';
import TextWrapper from './TextContainer';

const AboutHeroContainer = styled.div`
  position: relative;
  min-height: 100vh;
  display: grid;

  ${gridify()};

  //place-items: start;
  //flex-flow: column;
  //align-items: center;
  //justify-content: center;

  //border: thick solid green;

  ${mediumUp(css`
    flex-flow: row;
    justify-content: flex-start;
  `)};

  ${largeUp(css`
    ${spacing('mt', 4)};
  `)};

  .text-container {
    //position: absolute;
    width: 100%;
    grid-row: 2 / 4;
    display: grid;
    place-items: center;
    //align-items: end;

    //border: thin solid red;
    //padding-left: 15%;

    ${gridColWidth()};

    svg {
      max-width: 100%;
    }

    ${mediumUp(css`
      width: 60%;
      grid-row: initial;

      svg {
        width: 80%;
      }
    `)};
  }
`;

function AboutHero () {
  return (<AboutHeroContainer maxWidth='lg'>
    <motion.div className='text-container'>
      <TextWrapper />
    </motion.div>

    <AboutHeroPicture />
  </AboutHeroContainer>);
}

export default AboutHero;
