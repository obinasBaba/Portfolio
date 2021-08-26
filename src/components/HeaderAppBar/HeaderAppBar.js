import React, { useContext, useEffect, useState } from 'react'
import Slide from '@material-ui/core/Slide'
import styled, { css } from 'styled-components'
import HomeLogo from './components/HomeLogo'
import NavBtn from './components/NavBtn'
import { mediumUp, spacing } from '../../styles/mixins'
import { AnimatePresence } from 'framer-motion'
import Menu from './components/Menu'
import { AppStateContext } from '../../contexts/AppStateContext'
import ContactMe from '../ContactMe'

const transition = css`
  transition: all 0.3s;
`
let intervalId;
function HideOnScroll({ children, window, isMenuOpen }) {
  const [slide, setSlide] = useState(true)
  const [trigger, setTrigger] = useState(true)

  const {
    isContactOpen,
    moScroll: {y},
  } = useContext(AppStateContext)

  const init = () =>{
    clearInterval(intervalId)
    intervalId = setInterval(() => {
      if (y.get() > y.getPrevious())
        setTrigger(false)

      else if (y.get() < y.getPrevious())
        setTrigger(true)

    }, 1000)
  }


  useEffect(() => {

    init()

  }, [])

  useEffect(() => {
    if ( isContactOpen || isMenuOpen ){
      setSlide(false)
    }else {
      setSlide(trigger)
    }

  }, [isContactOpen, trigger, isMenuOpen])

  return (
    <Slide appear={false} direction="down" in={slide}>
      {children}
    </Slide>
  )
}

const NavContainer = styled.div`

  position: fixed;
  z-index: 10;
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
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const {
    isWhite,
    isHeaderGradient,
    isContactOpen,
    setContactModal,
    toolTip, setToolTip
  } = useContext(AppStateContext)

  useEffect(() => {
    if (menuIsOpen) document.body.classList.add('locked')

    return () => document.body.classList.remove('locked')
  }, [menuIsOpen])

  return (
    <>
      <AnimatePresence>
        {menuIsOpen && (
          <Menu
            key={menuIsOpen.toString()}
            toggleMenu={{ setMenuIsOpen, menuIsOpen }}
          />
        )}

        {isContactOpen && (
          <ContactMe toggleModal={{ setContactModal, isContactOpen }} />
        )}

      </AnimatePresence>

      <HideOnScroll isMenuOpen={menuIsOpen} >
        <NavContainer isGradient={false} isWhite={isWhite}>
            <HomeLogo isWhite={isWhite} />

            <NavBtn
              isWhite={isWhite}
              key={!menuIsOpen.toString() + 'nav'}
              toggleMenu={{ setMenuIsOpen, menuIsOpen }}
              menu={menuIsOpen}
            />
        </NavContainer>
      </HideOnScroll>
    </>
  )
}

export default HeaderAppBar
