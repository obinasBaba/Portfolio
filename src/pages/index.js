import * as React from 'react'
import { useContext, useEffect } from 'react'
import HomePage from '../scenes/HomePage'
import { AppStateContext } from '../contexts/AppStateContext'
import useLocoScroll from '../hooks/useLocoScroll'
import { AnimatePresence } from 'framer-motion'

const IndexPage = ({ path }) => {
  const {
    backgroundOverlay,
    setCurrentPath,
    registeredScrollPos,
    setRegisteredScrollPos,
    setListenerTargetSelector,
  } = useContext(AppStateContext)

  const loco = useLocoScroll(!backgroundOverlay)

  useEffect(() => {
    if (backgroundOverlay) return

    setCurrentPath(path)
    // setListenerTargetSelector('#main-container [data-pointer]')
    console.log('set listenerTarget in index.js')
  }, [backgroundOverlay])

  useEffect(() => {
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
  }, [])

  return (
      <HomePage />
  )
}

export default IndexPage
