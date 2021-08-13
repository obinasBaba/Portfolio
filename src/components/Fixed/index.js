import React from 'react'
import styled from 'styled-components'
import ToolTip from './ToolTip'

const FixedContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 99999;
`

const Fixed = () => {
  return (
    <FixedContainer>
      <ToolTip />
    </FixedContainer>
  )
}

export default Fixed
