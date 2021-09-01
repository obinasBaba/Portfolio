import React from 'react'
import styled from 'styled-components'

import { AnimatePresence } from 'framer-motion'

const FixedContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;

  //z-index: 0 ;
`



const Fixed = () => {
  return (
    <AnimatePresence>

      <FixedContainer>
      </FixedContainer>

    </AnimatePresence>
  )
}

export default Fixed
