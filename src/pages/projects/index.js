// noinspection JSIgnoredPromiseFromCall

import React, {useContext, useLayoutEffect} from 'react'
import ProjectPage from '../../scenes/ProjectPage'
import useToolTip from '../../hooks/useToolTip'
import useCursorEventRefresher from '../../hooks/useRefreshMouseListeners'
import {AppStateContext, BackgroundOverlayStateContext} from "../../contexts/AppStateContext";
import Seo from "../../components/seo";
import {MotionValueContext} from "../../contexts/MotionStateWrapper";

const Projects = ({path}) => {


    const {
    setCurrentPath
  } = useContext( AppStateContext )

  useLayoutEffect(() => {
    setCurrentPath(path)
  }, [])

  useToolTip('[data-tooltip-text]')
  useCursorEventRefresher('[data-pointer]')

  return (
      <>
        <Seo title='projects' description='this are featured project i have worked on.'/>
        <ProjectPage />
      </>
  )
}

export default Projects
