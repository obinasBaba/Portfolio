import React, {useEffect, useState} from 'react'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import styled, {css} from 'styled-components'
import LogoAndSocial from './components/LogoAndSocial'
import NavBtn from './components/NavBtn'
import ContactBtn from './components/ContactBtn'
import {mediumUp, spacing} from '../../styles/mixins'
import {AnimatePresence, motion} from 'framer-motion'
import * as PropTypes from 'prop-types'
import Menu from './components/Menu'
import {Typography} from '@material-ui/core'

const transition = css`
  transition: all 0.3s;
`

function HideOnScroll (props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    threshold: 50,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const NavContainer = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  padding: 2rem 2rem 1.3rem;
  ${transition};

  &::after {
    content: '';
    display: ${({ isGradient }) => (isGradient ? 'block' : 'none')};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    ${transition};
    background: ${({ isWhite }) =>
            isWhite
                    ? 'linear-gradient(180deg, rgba(243, 243, 243, 1) 0%, rgba(243, 243, 243, 0) 98%)'
                    : 'linear-gradient(0deg, rgba(2, 2, 30, 0.0001) 0%, #02021e 98%)'};
  }

  ${mediumUp(css`
    ${spacing('pt',
            2)};
    ${spacing('pb',
            2)};
    ${spacing('pl',
            8)};
    ${spacing('pr',
            8)};
  `)};
`

const ToolBarWrapper = styled.nav`
  margin: 0 auto;
  max-width: 1600px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

`

function HeaderAppBar ({ isGradient, isWhite }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  useEffect(() => {
      if ( menuIsOpen ) document.body.classList.add('locked')
      // else document.body.classList.remove('locked')
    },
    [menuIsOpen])


  return (
    <>

      <AnimatePresence>
        {menuIsOpen && <Menu key={menuIsOpen.toString()}
                             toggleMenu={{ setMenuIsOpen, menuIsOpen }} />}
      </AnimatePresence>


      <HideOnScroll>

        <NavContainer isGradient={isGradient} isWhite={isWhite}>

          <ToolBarWrapper>

            <LogoAndSocial isWhite={isWhite} />

            <AnimatePresence>
              {
                !menuIsOpen && <>
                  <ContactBtn isWhite={isWhite}
                              key={menuIsOpen.toString() + 'con'} />

                  <NavBtn isWhite={isWhite}
                          key={!menuIsOpen.toString() + 'nav'}
                          toggleMenu={{setMenuIsOpen, menuIsOpen}} />
                </>
              }

            </AnimatePresence>


          </ToolBarWrapper>

        </NavContainer>

      </HideOnScroll>
    </>
  )
}

export default HeaderAppBar
