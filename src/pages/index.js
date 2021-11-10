import * as React from 'react'
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import HomePage from '../scenes/HomePage'
import { AppStateContext } from '../contexts/AppStateContext'
import useLocoScroll from '../hooks/useLocoScroll'
import useLoadingFonts from "../hooks/useFonts";
import LoadingSpinner from "../components/LoadingSpinner";
import { AnimatePresence } from "framer-motion";

const IndexPage = ({path}) => {

  const {fontLoaded,
    setCurrentPath,
    registeredScrollPos, setRegisteredScrollPos
  } = useContext( AppStateContext )

  const [fontFinish, setFontFinish] = useState(fontLoaded.get())

  const loco = useLocoScroll(fontFinish);

  useLoadingFonts(fontLoaded, setFontFinish)

  useEffect(() => {
    setCurrentPath(path)
  }, [])

  useEffect(() => {

    if ( registeredScrollPos !== null  ){
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
    <AnimatePresence exitBeforeEnter>

      { fontFinish ? <HomePage /> :

        <LoadingSpinner key={"lkasdjf;laksjdf"} finish={fontFinish} />}

    </AnimatePresence>
  )
}

export default IndexPage
