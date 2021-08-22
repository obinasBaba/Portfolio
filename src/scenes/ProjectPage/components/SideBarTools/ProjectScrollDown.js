import React from 'react'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import { spacing } from '../../../../styles/mixins'
import ScrollDown from '../../../../components/ScrollDown'

const ProjectSDContainer = styled(motion.div)`
  position: fixed;
  z-index: 99;
  left: 0;
  ${spacing('ml', 2.1)};

  bottom: 4%;
  cursor: pointer;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-items: center;
  grid-gap: 0.6rem;
`
const parentVariant = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeIn',
    },
  },

  exit: {
    y: '100%',
    opacity: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
}

const ProjectScrollDown = ({ show }) => {
  return (
    <AnimatePresence>
      {show && (
        <ProjectSDContainer
          variants={parentVariant}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <ScrollDown show={show} />
        </ProjectSDContainer>
      )}
    </AnimatePresence>
  )
}

export default ProjectScrollDown
