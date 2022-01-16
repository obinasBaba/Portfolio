import React, { useContext, useEffect } from 'react'
import HomePage from '../scenes/HomePage'
import {AppStateContext, BackgroundOverlayStateContext} from '../contexts/AppStateContext'
import useLocoScroll from '../hooks/useLocoScroll'
import useToolTip from '../hooks/useToolTip'
import useRefreshMouseListeners from '../hooks/useRefreshMouseListeners'
import {useMediaQuery, useTheme} from "@material-ui/core";

const IndexPage = ({ path }) => {
  const {
    setCurrentPath,
    registeredScrollPos,
    setRegisteredScrollPos,
  } = useContext(AppStateContext)

  const {
    backgroundOverlay
  } = useContext(BackgroundOverlayStateContext)

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  const loco = useLocoScroll(!backgroundOverlay && matches )

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
  useRefreshMouseListeners('[data-pointer]', !matches)

  useEffect(() => {
    setTimeout(() => {
      // window.locoInstance.update()
    }, 1000)
  }, [])

  return (
     <>
       {
         !backgroundOverlay && <HomePage />
       }
     </>
  )
}

export default IndexPage
