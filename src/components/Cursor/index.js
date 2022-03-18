// noinspection JSIgnoredPromiseFromCall

import React, {useContext, useEffect, useLayoutEffect, useState} from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import EventUtil from '../../helpers/EventUtil'
import { text } from '../../styles/mixins'
import InnerPointer from './InnerPointer'
import OuterPointer from './OuterPointer'
import { useMediaQuery, useTheme } from '@material-ui/core'
import {MotionValueContext} from "../../contexts/MotionStateWrapper";
import CursorEventComponent from "./CursorEventComponent";

let show = false;
let Events;
let animId

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


const Cursor = () => {
  
  const { mouse: { mouseX,  mouseY }, screenOverlayEvent } = useContext( MotionValueContext );

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [ready, setReady] = useState(false);


  const trackMouse = () => {
    const render = () => {
      if (!animId) return;

      gsap.to('.cursor-container .pointer.inner', {
        x: mouseX.get(),
        y: mouseY.get(),
        duration: 0,
      })

      gsap.to('.cursor-container .pointer.outer', {
        x: mouseX.get(),
        y: mouseY.get(),
        duration: 0.83,
        ease: 'power2.out',
      })

      animId = requestAnimationFrame(() => render())
    }
    animId = requestAnimationFrame(() => render())
  }

  const clearMouseUpdateAnim = () => {
    // console.log('canceling animation : ', animId);
    cancelAnimationFrame(animId)
    animId = undefined
  }

  useEffect(() => {
    screenOverlayEvent.onChange(state => {
      if (state === 'closed')
        setReady(true)
    })
  }, [])

  useEffect(() => {
    if (!matches || !ready) return;

    const showMouse = () => {
      if (show) return;
      show = true;

      if (
        window.locoInstance &&
        Math.abs(window.locoInstance.scroll.instance.speed) > 2
      )
        return;


      gsap.to('.cursor-container', {
        opacity: 1,
        duration: 0.4,
      })

      clearMouseUpdateAnim()

      // Cursor.updateMousePos()
      trackMouse()

    }

    window.addEventListener('mousemove', showMouse)

    return () => {
      clearMouseUpdateAnim()
      window.removeEventListener('mousemove', showMouse)
    }
  }, [matches, ready])

  return (
    <>
      {(ready && matches) && (
        <>
          <CursorContainer className="cursor-container">
            <InnerPointer />
            <OuterPointer />
          </CursorContainer>
          <CursorEventComponent/>
        </>

      )}
    </>
  )
}

Cursor.stopMouseAnimation = () => {
  if (!show) return

  gsap.to('.cursor-container', {
    opacity: 0,
    duration: 0.3,

    onComplete() {
      cancelAnimationFrame(animId)
      animId = undefined;
      show = false;
    },
  })
}

export default Cursor
