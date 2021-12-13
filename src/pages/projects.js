// noinspection JSIgnoredPromiseFromCall

import React, {useContext} from 'react'
import ProjectPage from '../scenes/ProjectPage'
import useToolTip from '../hooks/useToolTip'
import useRefreshMouseListeners from '../hooks/useRefreshMouseListeners'
import {BackgroundOverlayStateContext} from "../contexts/AppStateContext";

const Projects = () => {
  // console.log(path)

  const {
    backgroundOverlay
  } = useContext(BackgroundOverlayStateContext)

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
