import React, {Suspense, useEffect} from 'react'
import { motion } from 'framer-motion'
import Menu from './components/Menu'
import styled from 'styled-components'
import useRefreshMouseListeners from "../../hooks/useRefreshMouseListeners";

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

const LogoBgEffect = React.lazy(() => import('./components/LogoBgEffect'));

const NavMenu = ( {closeMenu} ) => {

    useRefreshMouseListeners('#menu-container [data-pointer]')


  return (
      <MenuContainer variants={containerVariants} id='menu-container' >
        <Suspense  fallback={<div/>}>
          <LogoBgEffect />
        </Suspense>
        <Menu onClick={closeMenu}  />

      </MenuContainer>
  )
}

export default NavMenu
