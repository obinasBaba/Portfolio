import React, { useContext, useEffect, useState } from 'react'
import Slide from '@material-ui/core/Slide'
import styled, { css } from 'styled-components'
import HomeLogo from './components/HomeLogo'
import NavBtn from './components/NavBtn'
import { mediumUp, spacing } from '../../styles/mixins'
import { AnimatePresence } from 'framer-motion'
import { AppStateContext } from '../../contexts/AppStateContext'
import ContactMe from '../ContactMe'

let intervalId;

function HideOnScroll({ children, window }) {
  const [slide, setSlide] = useState(true)
  const [trigger, setTrigger] = useState(true)

  const {
    isContactOpen,
    currentPath,
    moScroll: {y},
  } = useContext(AppStateContext)

  const init = () =>{
    setSlide(true)
    clearInterval(intervalId)
    intervalId = setInterval(() => {
      if (y.get() > y.getPrevious())
        setTrigger(false)

      else if (y.get() < y.getPrevious())
        setTrigger(true)

    }, 500)
  }


  useEffect(() => {

    init()

  }, [currentPath])

  useEffect(() => {
    if ( isContactOpen  ){
      setSlide(false)
    }else {
      setSlide(trigger)
    }

  }, [isContactOpen, trigger])

  return (
    <Slide appear={false} direction="down" in={slide}>
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

const NavWrapper = styled.nav`
  position: relative;
  margin: 0 auto;
  max-width: 1600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > *{
    //pointer-events: initial;
  }
`

function HeaderAppBar({}) {
  const {
    isWhite,
    isContactOpen,
    setContactModal,
    toolTip, setToolTip,
    menuIsOpen, setMenuIsOpen
  } = useContext(AppStateContext)

  useEffect(() => {
    if (menuIsOpen) document.body.classList.add('locked')

    return () => document.body.classList.remove('locked')
  }, [menuIsOpen])

  return (
    <>
      <AnimatePresence>

        {isContactOpen && (
          <ContactMe toggleModal={{ setContactModal, isContactOpen }} />
        )}

      </AnimatePresence>

      <HideOnScroll isMenuOpen={menuIsOpen} >
        <NavContainer isGradient={false} isWhite={isWhite}>
            <HomeLogo isWhite={isWhite} />

            <NavBtn
              isWhite={isWhite}
              key='nav'
              toggleMenu={ () => setMenuIsOpen(!menuIsOpen)}
              menu={menuIsOpen}
            />
        </NavContainer>
      </HideOnScroll>
    </>
  )
}

export default HeaderAppBar
