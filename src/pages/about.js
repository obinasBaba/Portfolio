import React, {useContext, useEffect} from 'react'
import AboutPage from '../scenes/AboutPage'
import useLocoScroll from '../hooks/useLocoScroll'
import {AppStateContext, BackgroundOverlayStateContext} from '../contexts/AppStateContext'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import useToolTip from "../hooks/useToolTip";
import useRefreshMouseListeners from "../hooks/useRefreshMouseListeners";


gsap.registerPlugin(ScrollTrigger)

const About = ({path}) => {

  const loco = useLocoScroll(true);

  const {
    setCurrentPath
  } = useContext( AppStateContext )

  const {
    backgroundOverlay
  } = useContext( BackgroundOverlayStateContext )


  useEffect(() => {
    setCurrentPath(path)
  }, [])

  useToolTip('[data-tooltip-text]')
  useRefreshMouseListeners('[data-pointer]')

  return (
    <>
      {
        !backgroundOverlay && <AboutPage/>
      }
    </>
  )
}

export default About
