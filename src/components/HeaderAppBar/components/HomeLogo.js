import React, {useEffect, useLayoutEffect, useRef} from 'react'
import styled, { css } from 'styled-components'
import useHeaderAssets from '../../../hooks/queries/useHeaderAssets'
import { Link } from 'gatsby'
import { heightWidth, mediumUp } from '../../../styles/mixins'
import { ReactSVG } from 'react-svg'
import { motion } from 'framer-motion'
import useOnScreen from '../../../hooks/useOnScreen'
import MagnetElement from '../../../helpers/MagnetElement'
import useMagnet from '../../../hooks/useMagnet'

const Logo = styled(motion.div)`
  position: relative;
  margin-right: auto;
  fill: white; //todo gradient
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  //border: thin solid red;
  
  .trigger{
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    z-index: -1;
    //border: thin solid tomato;
  }

  & .logoSvg {
    ${heightWidth('max-width', 6)};

    ${mediumUp(css`
      ${heightWidth('max-width', 5)};
    `)};
  }

  ${({ isWhite }) =>
    isWhite &&
    css`
      .logoSvg {
        fill: ${({ theme }) => theme.palette.primary.main};
      }
    `};
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
    delay: 1,
  },
}

const HomeLogo = ({ isWhite }) => {
  const { logo } = useHeaderAssets()
  const logoRef = useRef(null)

  useMagnet('.logo', 1.6, .51, )


  return (
    <Logo isWhite={isWhite}
          variants={logoVariant}
          transition={logoVariant.transition}
          initial="initial"
          animate="animate"
          className="magnet logo"
          data-tooltip
          data-tooltip-text='Where it all started'
          ref={logoRef}
    >

      <div className="trigger"/>

      <Link to={'/'}>
        <ReactSVG className="logoSvg" src={logo.publicURL} />
      </Link>
    </Logo>
  )
}

export default HomeLogo
