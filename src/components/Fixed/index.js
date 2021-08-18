import React from 'react'
import styled from 'styled-components'
import ToolTip from './ToolTip'
import BackgroundStars from '../BackgroundStars'
import {SkyColor} from '../../layouts/Components/SkyColor'

const FixedContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;

  //z-index: 99999;
`

const Fixed = () => {
  return (
    <FixedContainer>
      <ToolTip />
      <BackgroundStars />
      <SkyColor />

    </FixedContainer>
  )
}

export default Fixed
