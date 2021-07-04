import React from 'react'
import styled from 'styled-components'
import {spacing} from '../../../../styles/mixins'
import ReturnBtn from '../../../../components/ReturnBtn'
import ScrollDown from './ScrollDown'
import NavDots from '../NavDots'

const SideBarToolsContainer = styled.aside`
  position: fixed;
  transform: translateY(-40%);
  top: 50%;
  left: 0;
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 3.5rem;
  
  //border: thin solid red;
  
  ${ spacing('ml', 4) };
`

const SideBarTools = ( {returnOnCLick, navRef} ) => {
  return (
    <SideBarToolsContainer>



    </SideBarToolsContainer>
  )
}

export default SideBarTools
