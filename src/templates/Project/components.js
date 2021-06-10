import styled, {css} from 'styled-components'
import {motion} from 'framer-motion'
import {mediumUp, spacing} from '../../styles/mixins'

export const ProjectContainer = styled( motion.div )`
  max-width: 1600px;
  // ${spacing('pt', 27.4)};

  ${mediumUp(css`
    // ${spacing('pt', 17)};
  `)};
`

export const ContentSectionWrapper = styled.section`
  position: relative;
  background-color: #f3f3f3;
  border: var(--thin);
  max-width: 1600px;
  margin: 0 auto;
  //z-index: 1;

  // ${spacing('mt', -18)}; 
  // ${spacing('pt', 35)};
  ${spacing('pb', 15)};

  .line {
    position: absolute;
    width: 1px;
    background-color: black;
    opacity: 0.04;
    top: 0;
    bottom: 0;
    left: 50%;
    z-index: -1;
  }

  &::before,
  &::after {
    content: '';
    font-size: 10rem;
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    width: 1px;
    right: 20%;
    background-color: black;
    z-index: -1;
    opacity: 0.04;
  }

  &::after {
    left: 20%;
  }
`