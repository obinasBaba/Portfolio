import React, { useCallback, useContext, useEffect, useState } from 'react'
import Slide from '@material-ui/core/Slide'
import styled, { css } from 'styled-components'
import HomeLogo from './components/HomeLogo'
import NavBtn from './components/NavBtn'
import { spacing } from '../../styles/mixins'
import { AnimatePresence } from 'framer-motion'
import {AppStateContext, BackgroundOverlayStateContext} from '../../contexts/AppStateContext'
import OverlayController from '../BackgroundOverlay/OverlayController'
import { debounce } from 'lodash'
import BackgroundOverlay from '../BackgroundOverlay'
import { MotionValueContext } from '../../contexts/MotionStateWrapper'

import NavMenu from '../NavMenu'
import {useScrollTrigger} from "@material-ui/core";
import {mediumUp} from "../../styles/mixins/breakpoints";

function HideOnScroll({ children, window }) {

  const { currentPath } = useContext(AppStateContext)
  const [slide, setSlide] = useState(true)
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  const [isLoco, setIsLoco] = useState(true)


  const {
    moScroll: { scrollDirection }, locoInstance
  } = useContext(MotionValueContext)



  useEffect(() => {
    setSlide(true)

    setTimeout(() => {
      if (locoInstance.get()){
        setIsLoco(true)
      }else
        setIsLoco(false)
    }, 1200)


  }, [currentPath])

  useEffect(() => {
    let deb = debounce(arg => {
      if (!arg) return

      if (arg === 'up') setSlide(true)
      else if (arg === 'down') setSlide(false)
    }, 350)

    scrollDirection.onChange(deb)

    return () => {}
  }, [])



  return (
    <Slide appear={false} direction="down" in={isLoco? slide : !trigger}>
      {children}
    </Slide>
  )
}

const NavContainer = styled.div`

  position: fixed;
  z-index: 20;
  top: 0;
  width: 100%;
  padding: 2rem 2rem 1.3rem;
  transition: all .35s ease-in-out;
  pointer-events: none;

  display: flex;
  justify-content: space-between;
  
  &::after {
    //content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    //background-image: var(--head-gradient);
    opacity: var(--head-opacity);
    transition: all .35s ease-in-out;
  }
  

  ${mediumUp(css`
    ${spacing('pv', 2)};
    ${spacing('ph', 6)};
  `)};
`


function HeaderAppBar() {

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const {
     backgroundOverlay
  } = useContext(BackgroundOverlayStateContext)

  useEffect(() => {
    if (menuIsOpen) {
      setTimeout(() => {
        document.body.classList.add('menu_open')
      }, 1000)
    }

    else if ( !menuIsOpen ) {
      setTimeout(() => {
        document.body.classList.remove('menu_open')
      }, 1000)
    }


  }, [menuIsOpen])

  const toggleMenu = useCallback(() => {
    if ( OverlayController.isAnimating )
      return

    setMenuIsOpen(!menuIsOpen)
    if ( menuIsOpen )
      return setTimeout(() => {
        OverlayController.getInstance('nav-menu-overlay').toggle(!menuIsOpen);
      }, 270)

    OverlayController.getInstance('nav-menu-overlay').toggle(!menuIsOpen);

  }, [ menuIsOpen])

  const toggleMenuForLogo = useCallback(() => menuIsOpen && toggleMenu(), [menuIsOpen])

  return (
    <>

      <BackgroundOverlay clsName={'nav-menu-overlay'} />


      <AnimatePresence>

        {menuIsOpen && (
          <NavMenu closeMenu={toggleMenu} />
        )}

      </AnimatePresence>

      <HideOnScroll  >
        <NavContainer  >
          {
            !backgroundOverlay &&
              <>
                <HomeLogo  toggleMenu={toggleMenuForLogo  }/>

                <NavBtn
                  key='nav'
                  menuIsOpen={menuIsOpen}
                  toggleMenu={ toggleMenu}
                />
              </>
          }
        </NavContainer>
      </HideOnScroll>
    </>
  )
}

export default React.memo(HeaderAppBar)
