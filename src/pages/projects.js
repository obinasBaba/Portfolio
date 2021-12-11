// noinspection JSIgnoredPromiseFromCall

import React, {useContext, useEffect} from 'react'
// import ProjectPage from '../scenes/ProjectPage'
import {AppStateContext} from '../contexts/AppStateContext'

const Projects = ({ location, path }) => {

  // console.log(path)

  const {
    setBackgroundOverlay, setCurrentPath, setListenerTargetSelector
  } = useContext( AppStateContext )

  useEffect(() => {
    setCurrentPath(path)

  }, [])

  return (
    <div/>
  )
}

export default Projects
