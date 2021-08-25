import * as React from 'react'
import { useContext, useEffect } from 'react'
import HomePage from '../scenes/HomePage'
import { AppStateContext } from '../contexts/AppStateContext'
import useLocoScroll from '../hooks/useLocoScroll'

const IndexPage = ({path}) => {

  const {
    setCurrentPath
  } = useContext( AppStateContext )

  useEffect(() => {
    setCurrentPath(path)
  }, [])

  useLocoScroll(true);


  return (
    <>
      <HomePage />
    </>
  )
}

export default IndexPage
