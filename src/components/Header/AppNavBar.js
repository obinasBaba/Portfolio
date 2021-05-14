import React from 'react'
import PropTypes from 'prop-types'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import styled, { css } from 'styled-components'
import LogoAndSocial from './components/LogoAndSocial'
import { useMediaQuery, useTheme } from '@material-ui/core'
import NavBtn from './components/NavBtn'
import ContactBtn from './components/ContactBtn'
import { mediumUp, spacing } from '../../styles/mixins'
import NavLinks from './components/NavLinks'

const transition = css`
  transition: all 0.3s;
`

function HideOnScroll(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
}

const AppBarWrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  padding: 2rem 2rem 1.3rem;
  ${transition};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    ${transition};
    background: linear-gradient(0deg, rgba(2, 2, 30, 0.0001) 0%, #02021e 98%);
  }

  ${mediumUp(css`
    ${spacing('pt', 2)};
    ${spacing('pb', 2)};
    ${spacing('pl', 8)};
    ${spacing('pr', 8)};
  `)};
`

const SliderToolBar = styled.nav`
  display: flex;
  ${spacing('gap', 1.5)};
  //gap: 1.5rem;
  justify-content: flex-end;
  align-items: center;
`

function AppNavBar(props) {
  const theme = useTheme()
  const media = useMediaQuery(theme.breakpoints.up('xl'))

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBarWrapper>
          <SliderToolBar>
            <LogoAndSocial />

            <ContactBtn />

           <NavBtn />

          </SliderToolBar>
        </AppBarWrapper>
      </HideOnScroll>
    </React.Fragment>
  )
}

export default AppNavBar
