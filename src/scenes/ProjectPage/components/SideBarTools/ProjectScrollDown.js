import React, {useEffect, useState} from 'react'
import styled, { css } from "styled-components";
import {AnimatePresence, motion, useMotionValue} from 'framer-motion'
import { spacing, xLargeUp } from "../../../../styles/mixins";
import ScrollDown from '../../../../components/ScrollDown'

const ScrollDownWrapper = styled(motion.div)`
  position: fixed;
  //z-index: 3;
  left: 0;
  bottom: 5%;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-items: center;
  grid-gap: 0.6rem;

  ${spacing('ml', 2.25)};

  ${xLargeUp( css`
    ${spacing('ml', 6.35)};
    
  ` )};

  //border: thin solid red;
`
const wrapperVariants = {
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

const containerVariant = {
  initial: {
    x: 'calc( -100% + (var(--indent) * -2.25rem))',
  },
  animate: {
    x: 0,
  },
  exit: {
    x: 'calc( -100% + (var(--indent) * -2.25rem))',
  },

  transition: {
    delay: 0.3,
    duration: 1,
    ease: [0.6, 0.01, 0, 0.9],
  },
}

const ProjectScrollDown = ({ activeIndex }) => {

  const [show, setShow] =  useState(true)

  useEffect(() => {
    // activeIndex.clearListeners()

    activeIndex.onChange(v => {
      if (v > 0)
        setShow(false)
      else
        setShow(true)
    })

  }, [])

  return (
    <ScrollDownWrapper
      variants={containerVariant}
      transition={containerVariant.transition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <AnimatePresence>
        {show && (
          <motion.div
            variants={wrapperVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <ScrollDown show={show} />
          </motion.div>
        )}
      </AnimatePresence>
    </ScrollDownWrapper>
  )
}

export default ProjectScrollDown
