import React from 'react'
import { motion } from 'framer-motion'
import LogoBgEffect from '../BackgroundOverlay/components/LogoBgEffect'
import Menu from '../BackgroundOverlay/components/Menu'
import styled from 'styled-components'

const MenuContainer = styled(motion.div)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 9;

  display: flex;
  align-items: center;
  justify-content: center;
  //pointer-events: none;

  ${({ isOpen }) => isOpen && 'pointer-events: initial;'};
`

const containerVariants = {

}

const NavMenu = ( {closeMenu} ) => {


  return (
      <MenuContainer variants={containerVariants} id='menu-container' >
        <LogoBgEffect />
        <Menu onClick={closeMenu}  />

      </MenuContainer>
  )
}

export default NavMenu
