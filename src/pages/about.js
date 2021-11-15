import React, {useContext, useEffect} from 'react'
import AboutPage from '../scenes/AboutPage'
import useLocoScroll from '../hooks/useLocoScroll'
import {AppStateContext} from '../contexts/AppStateContext'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

const About = ({path}) => {


  const loco = useLocoScroll(true);


  const {
    setCurrentPath, setBackgroundOverlay
  } = useContext( AppStateContext )

  useEffect(() => {
    setCurrentPath(path)
    setBackgroundOverlay(false)
  }, [])

  return (
    <>
      <AboutPage/>
    </>
  )
}

export default About
