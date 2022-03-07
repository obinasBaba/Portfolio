import React, { useContext, useEffect } from 'react'
import HomePage from '../scenes/HomePage'
import {AppStateContext, BackgroundOverlayStateContext} from '../contexts/AppStateContext'
import useLocoScroll from '../hooks/useLocoScroll'
import useToolTip from '../hooks/useToolTip'
import useRefreshMouseListeners from '../hooks/useRefreshMouseListeners'
import {useMediaQuery, useTheme} from "@material-ui/core";
import Seo from "../components/seo";

const IndexPage = ({ path }) => {
  const {
    setCurrentPath,
  } = useContext(AppStateContext)

  const {
    backgroundOverlay
  } = useContext(BackgroundOverlayStateContext)

  const loco = useLocoScroll(!backgroundOverlay )

  useEffect(() => {
    if (backgroundOverlay) return

    setCurrentPath(path)

    /*if (registeredScrollPos !== null) {
      loco.current.update()
      setTimeout(() => {
        loco.current.scrollTo(registeredScrollPos, {
          duration: 0,
          disableLerp: true,
          offset: 300,
        })
      })
      setRegisteredScrollPos(null)
    }*/
  }, [backgroundOverlay])

  useToolTip('[data-tooltip-text]')
  useRefreshMouseListeners('[data-pointer]', )


  return (
     <>
       <Seo title='homepage' description='this is homepage of my portfolio site'/>
       {
         !backgroundOverlay && <HomePage />
       }
     </>
  )
}

export default IndexPage
