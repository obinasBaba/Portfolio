import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const OverflowOuter = styled( motion.div )`
  overflow: hidden;
  width: max-content;
  pointer-events: initial;
`

const OverFlowInner = styled( motion.div )`

`

const OverFlowBox = ({children, variants}) => {
  return (
    <OverflowOuter
    >
      <OverFlowInner variants={variants.inner}
                     custom={variants.custom}
                     transition={variants.transition}>

        {children}

      </OverFlowInner>
    </OverflowOuter>
  )
}

export default OverFlowBox
