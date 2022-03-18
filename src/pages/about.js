import React, {useContext, useEffect} from 'react'
import AboutPage from '../scenes/AboutPage'
import useLocoScroll from '../hooks/useLocoScroll'
import {AppStateContext, BackgroundOverlayStateContext} from '../contexts/AppStateContext'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import useToolTip from "../hooks/useToolTip";
import useRefreshMouseListeners from "../hooks/useRefreshMouseListeners";
import Seo from "../components/seo";
import useUpdatePath from "../hooks/useUpdatePath";


gsap.registerPlugin(ScrollTrigger)

const About = ({path}) => {

  useUpdatePath(path)

  const loco = useLocoScroll();

  useToolTip('[data-tooltip-text]');
  useRefreshMouseListeners('[data-pointer]');



  return (
    <>
      <Seo title='about' description='this is where i talk about my skills, about me and my process of getting work done'/>
      <AboutPage/>
    </>
  )
}

export default About
