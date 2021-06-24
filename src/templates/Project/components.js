import styled from 'styled-components'
import { motion } from 'framer-motion'
import { spacing } from '../../styles/mixins'

export const ProjectContainer = styled(motion.div)`
  max-width: 1600px;
  width: 100%;
  overflow: hidden;
`

export const ContentSectionWrapper = styled.section`
  //position: relative;
  background-color: #f3f3f3;
  border: .1px solid #f3f3f3;  /// fix this wierd bug
  z-index: 1;
  color: #02021e;

  // ${spacing('pv', 0)};
  ${spacing('pb', 15)};

  .line {
    position: absolute;
    width: 1px;
    background-color: black;
    opacity: 0.04;
    top: 0;
    bottom: 0;
    left: 50%;
    z-index: 2;
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
    z-index: 2;
    opacity: 0.04;
  }

  &::after {
    left: 20%;
  }
`