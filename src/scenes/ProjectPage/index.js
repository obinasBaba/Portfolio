import React from 'react'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import { gridify, smallUp, spacing } from '../../styles/mixins'

export { default as ProjectImage } from './components/ProjectImage'
export { default as ProjectDescription} from './components/ProjectDescription'
export { default as Others} from './components/Others'

export const ProjectContainerGrid = styled(motion.div)`
  ${gridify};
  // ${spacing('pt', 2)};

  ${smallUp(css`
    // ${spacing('pt', 4)};
    // ${spacing('p', 4)};
  `)};

  align-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
`


