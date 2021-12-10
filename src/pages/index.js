import React, {Suspense} from 'react'
import { useContext, useEffect } from 'react'
import HomePage from '../scenes/HomePage'
import { AppStateContext } from '../contexts/AppStateContext'
import useLocoScroll from '../hooks/useLocoScroll'
import useToolTip from "../hooks/useToolTip";
import useRefreshMouseListeners from "../hooks/useRefreshMouseListeners";

const IndexPage = ({ path }) => {

  const {
    backgroundOverlay,
    setCurrentPath,
    registeredScrollPos,
    setRegisteredScrollPos,
    setListenerTargetSelector,
  } = useContext(AppStateContext)

  const loco = useLocoScroll(true)


  useEffect(() => {

    if(backgroundOverlay) return;

    setCurrentPath(path)

    if (registeredScrollPos !== null) {
      loco.current.update()
      setTimeout(() => {
        loco.current.scrollTo(registeredScrollPos, {
          duration: 0,
          disableLerp: true,
          offset: 300,
        })
      })
      setRegisteredScrollPos(null)
    }
  }, [backgroundOverlay])

  useToolTip('[data-tooltip-text]')
  useRefreshMouseListeners('[data-pointer]')

  useEffect(() => {
     window.locoInstance.update()

  }, [])

  return (
      <>
        <HomePage />
        {/*{!backgroundOverlay && }*/}
      </>
  )
}

export default IndexPage
