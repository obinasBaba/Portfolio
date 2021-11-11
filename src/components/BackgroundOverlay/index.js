import React, {useContext, useEffect, useLayoutEffect, useRef} from 'react'
import styled, {css} from 'styled-components'
import { AppStateContext } from '../../contexts/AppStateContext'
import OverlayController from './OverlayController'
import LogoBgEffect from './components/LogoBgEffect'
import {AnimatePresence} from 'framer-motion'
import Menu from './components/Menu'

const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  
  pointer-events: none;
  
  z-index: 8;

  svg{
    pointer-events: none;
    
    .shape-overlays__path:nth-of-type(1) {
      fill: url(#gradient1);
    }

    .shape-overlays__path:nth-of-type(2) {
      fill: url(#gradient2);
    }

    .shape-overlays__path:nth-of-type(3) {
      fill: url(#gradient3);
    }
  }
  
  & .shape-overlays {
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;
    //pointer-events: none;
    //z-index: 1;
    
    path{
      position: relative;
    }


    //border: thick solid red;
  }
`

const BackgroundOverlay = ({loading=true, clsName}) => {


  return (
    <OverlayContainer >

      <svg className={clsName} viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00c99b" />
            <stop offset="100%" stopColor="#ff0ea1" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffd392" />
            <stop offset="100%" stopColor="#ff3898" />
          </linearGradient>

          <linearGradient id="gradient3" x1="0.177" y1="0.104" x2="0.949" y2="0.947" gradientUnits="objectBoundingBox">
            <stop offset="0" stopColor="#5d6c7b" />
            <stop offset="0.482" stopColor="#a4b5c0" />
            <stop offset="1" stopColor="#bfd0d9" />
          </linearGradient>

          <linearGradient id="gradient4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#110046"/>
            <stop offset="100%" stopColor="#32004a"/>
          </linearGradient>

        </defs>
        <path className="shape-overlays__path" />
        <path className="shape-overlays__path" />
        <path className="shape-overlays__path" />
      </svg>

    </OverlayContainer>
  )
}

export default BackgroundOverlay
