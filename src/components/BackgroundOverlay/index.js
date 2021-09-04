import React, { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
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
  
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  
  z-index: 15;

  svg{
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
    pointer-events: none;
    //z-index: 1;
    
    path{
      position: relative;
    }


    //border: thick solid red;
  }
`
const BackgroundOverlay = () => {

  const {
    menuIsOpen, setMenuIsOpen
  } = useContext(AppStateContext)

  const overlayRef = useRef(null);
  const firstRender = useRef(true)

  useEffect(() => {

     overlayRef.current = OverlayController.getInstance(
      document.querySelector('.shape-overlays')
    );

    }, [])

  useEffect(() => {
    overlayRef.current.toggle(menuIsOpen);

  }, [menuIsOpen])
  
  
  return (
    <OverlayContainer onClick={() => {}}>

      <svg className="shape-overlays" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00c99b" />
            <stop offset="100%" stopColor="#ff0ea1" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffd392" />
            <stop offset="100%" stopColor="#ff3898" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0.177" y1="0.104" x2="0.949" y2="0.947"
                          gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#e7a28f" />
            <stop offset="0.482" stopColor="#f9d6ac" />
            <stop offset="1" stopColor="#fbfefc" />
          </linearGradient>
        </defs>
        <path className="shape-overlays__path" />
        <path className="shape-overlays__path" />
        <path className="shape-overlays__path" />
      </svg>


      <AnimatePresence>
        {

          menuIsOpen &&
          <React.Fragment key={menuIsOpen.toString() + 'menu'}>
            <LogoBgEffect />
            <Menu onClick={() => {}} />
          </React.Fragment>
        }
      </AnimatePresence>



    </OverlayContainer>
  )
}

export default BackgroundOverlay
