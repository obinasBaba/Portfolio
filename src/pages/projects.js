// noinspection JSIgnoredPromiseFromCall

import React, {useContext, useEffect} from 'react'
import ProjectPage from '../scenes/ProjectPage'
import {AppStateContext} from '../contexts/AppStateContext'

const Projects = ({ location, path }) => {

  // console.log(path)

  const {
    setBackgroundOverlay, setCurrentPath, setListenerTargetSelector
  } = useContext( AppStateContext )

  useEffect(() => {
    setCurrentPath(path)
    setBackgroundOverlay(false)
    setListenerTargetSelector('#main-container [data-pointer]')

    return () => setListenerTargetSelector(undefined)
  }, [])

  return (
    <ProjectPage/>
  )
}

export default Projects
