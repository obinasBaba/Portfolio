import React from 'react'
import styled from 'styled-components'
import { spacing } from '../../../../styles/mixins'
import { motion } from 'framer-motion'

const SideBarToolsContainer = styled( motion.aside )`
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  
  
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  
  border: thin solid red;
`

const sideBarVariants = {
  initial: {
   x: '-200px'
  },
  animate: {
    x: 0
  },
  exit: {
    x: '-200px'
  }
}

const SideBarTools = ( { children } ) => {
  return (
    <SideBarToolsContainer variants={sideBarVariants}
                           initial='initial'
                           animate='animate'
                           exit='exit'

    >
      {children}

    </SideBarToolsContainer>
  )
}

export default SideBarTools
