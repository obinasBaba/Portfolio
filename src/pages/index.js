import * as React from 'react'
import {useContext, useEffect, useLayoutEffect} from 'react'
import HomePage from '../scenes/HomePage'
import { AppStateContext } from '../contexts/AppStateContext'
import useLocoScroll from '../hooks/useLocoScroll'

const IndexPage = ({path}) => {

  const loco = useLocoScroll(true);


  const {
    setCurrentPath,
    registeredScrollPos, setRegisteredScrollPos
  } = useContext( AppStateContext )

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
    <>
      <HomePage />
    </>
  )
}

export default IndexPage
