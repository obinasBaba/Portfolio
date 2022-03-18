import React, { useRef } from 'react'
import styled, { css } from 'styled-components'
import useHeaderAssets from '../../../hooks/queries/useHeaderAssets'
import { Link } from 'gatsby'
import { length} from '../../../styles/mixins'
import { ReactSVG } from 'react-svg'
import { motion } from 'framer-motion'
import {mediumUp} from "../../../styles/mixins/breakpoints";

const Logo = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  //margin-right: auto;
  fill: var(--theme); //todo gradient
  z-index: 50;
  //border: thin solid red;
  transition: fill 0.35s ease-in-out;
  pointer-events: initial;

  &::after {
    content: '';
    position: absolute;
    display: block;
    top: -17px;
    left: -17px;
    right: -17px;
    bottom: -17px;
    z-index: -1;
  }

  & .logo {
    ${length('max-width', 6)};

    ${mediumUp(css`
      ${length('max-width', 4.5)};
    `)};
  }

  a {
    position: absolute;
    inset: 0;
    pointer-events: all;
  }
`

const logoVariant = {
  initial: {
    opacity: 0,
    scale: 1.56,
    rotate: 20,
  },
  animate: {
    opacity: 1,
    scale: 1.05,
    rotate: 0,
  },
  exit: {  },

  transition: {
    ease: [0.6, 0.01, 0, 0.9],
    duration: 3,
  },
}

const HomeLogo = ({ toggleMenu }) => {
  const { logo } = useHeaderAssets()
  const logoRef = useRef(null)


  return (
    <Logo
          variants={logoVariant}
          transition={logoVariant.transition}
        /*   initial="initial"
          animate="animate" */
          className="logo"
          data-pointer='magnet'
          data-magnet-distance={.8}
          data-magnet-attraction={1.8}
          data-pointer-color='#5d6c7b'
          data-tooltip
          data-tooltip-text='Where it all started'
          ref={logoRef}
          onClick={toggleMenu}
    >

      {/*<div className="trigger"/>*/}

      <Link to={'/'}/>

      <ReactSVG className="logo" src={logo.publicURL} />
    </Logo>
  )
}

export default HomeLogo
