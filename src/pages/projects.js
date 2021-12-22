// noinspection JSIgnoredPromiseFromCall

import React, {useContext, useLayoutEffect} from 'react'
import ProjectPage from '../scenes/ProjectPage'
import useToolTip from '../hooks/useToolTip'
import useRefreshMouseListeners from '../hooks/useRefreshMouseListeners'
import {AppStateContext, BackgroundOverlayStateContext} from "../contexts/AppStateContext";

const Projects = ({path}) => {
  // console.log(path)

  const {
    backgroundOverlay
  } = useContext(BackgroundOverlayStateContext)

  const {
    setCurrentPath
  } = useContext( AppStateContext )

  useLayoutEffect(() => {
    setCurrentPath(path)
  }, [])

  useToolTip('[data-tooltip-text]')
  useRefreshMouseListeners('[data-pointer]')

  return (
      <>
        {
          !backgroundOverlay && <ProjectPage />
        }
      </>
  )
}

export default Projects
