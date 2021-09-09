import React, {useContext, useEffect} from 'react'
import AboutPage from '../scenes/AboutPage'
import useLocoScroll from '../hooks/useLocoScroll'
import {AppStateContext} from '../contexts/AppStateContext'

const About = ({path}) => {


  const loco = useLocoScroll(true);


  const {
    setCurrentPath,
  } = useContext( AppStateContext )

  useEffect(() => {
    setCurrentPath(path)
  }, [])

  return (
    <>
      <AboutPage/>
    </>
  )
}

export default About
