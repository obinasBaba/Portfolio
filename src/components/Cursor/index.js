// noinspection JSIgnoredPromiseFromCall

import React, { useContext, useEffect, useLayoutEffect } from "react";
import styled from 'styled-components'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import EventUtil from '../../helpers/EventUtil'
import { text } from '../../styles/mixins'
import InnerPointer from './InnerPointer'
import OuterPointer from './OuterPointer'
import { AppStateContext } from "../../contexts/AppStateContext";

let show = false
let Events;
let animId;

const CursorContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  pointer-events: none;
  z-index: 30;
  opacity: 0;

  & * {
    pointer-events: none;
  }
`

export const PointerContainer = styled(motion.div)`
  //display: g;
  position: absolute;
  //border: thin solid lightcoral;
  height: 1rem;
  width: 1rem;
  top: calc(-1rem / 2);
  left: calc(-1rem / 2);
  right: auto;
  bottom: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
  //transform: translate(-50%, -50%);

  p {

    position: absolute;
    font-family: 'shapes', serif;
    line-height: 0;
    padding: 0;
    margin: 0;
    top: -50%;
    left: -50%;
    inset: auto;
    //color: #b9c8d3;
    //color: rgba(2, 11, 22, 1);
    color: var(--theme);


    //font-size: 3.6rem;
    ${text(3)};


    //mix-blend-mode: difference;
  }

  &.inner {
    p {
      //transition: color .25s ease-in-out;
      //font-size: .78rem;
      ${text(.7)};
    }
  }

`

const Cursor = () => {


  const {
    backgroundOverlay,
  } = useContext(AppStateContext)

  useLayoutEffect(() => {
    Events = EventUtil.getInstance()
  }, [ ])

  // initial opacity
  useEffect(() => {
    if ( backgroundOverlay )
      return

      const clearMouseUpdateAnim = () => {
        // console.log('canceling animation : ', animId);
        cancelAnimationFrame(animId)
        animId = undefined
      }
      const showMouse = () => {
        if ( show ) return

        if ( window.locoInstance && window.locoInstance.scroll.isScrolling )
          return;

        gsap.to('.cursor-container',
          {
            opacity: 1,
            duration: .4,
          },)

        clearMouseUpdateAnim()

        Cursor.updateMousePos()

        show = true;
      }

      window.addEventListener('mousemove', showMouse)

      return () => {
        clearMouseUpdateAnim()
        window.removeEventListener('mousemove', showMouse)
      }

    },
    [backgroundOverlay])

  return (
    <CursorContainer className='cursor-container'>
      <InnerPointer />
      <OuterPointer />
    </CursorContainer>
  )
}

Cursor.updateMousePos = () => {

  const render = () => {
    if ( !animId ) return;

    gsap.to('.cursor-container .pointer.inner',
      {
        x: Events.mousePos.x,
        y: Events.mousePos.y,
        duration: 0,
      })

    gsap.to('.cursor-container .pointer.outer',
      {
        x: Events.mousePos.x,
        y: Events.mousePos.y,
        duration: .83,
        ease: 'power2.out'
      })

    animId = requestAnimationFrame(() => render())

  }
  animId = requestAnimationFrame(() => render())
}

Cursor.stopMouseAnimation = () => {
  if ( !show ) return

  gsap.to('.cursor-container',
    {
      opacity: 0,
      duration: .3,

      onComplete () {
        cancelAnimationFrame(animId)
        animId = undefined
        show = false
      }
    })
}

export default Cursor
