import React from 'react'
import styled from 'styled-components'
import { spacing } from '../../../../styles/mixins'
import { motion } from 'framer-motion'

const SideBarToolsContainer = styled( motion.aside )`
  position: fixed;
  transform: translateY(-43%);
  top: 50%;
  left: 0;
  
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  
  
  border: thin solid red;
  
  ${ spacing('ml', 3.5) };
`

const SideBarTools = ( { children } ) => {
  return (
    <SideBarToolsContainer >
      {children}

    </SideBarToolsContainer>
  )
}

export default SideBarTools
