import * as React from 'react'
import { useContext, useEffect } from 'react'
import HomePage from '../scenes/HomePage'
import { AppStateContext } from '../contexts/AppStateContext'
import ToolTip from '../components/Fixed/ToolTip'

const IndexPage = ({path}) => {

  const {
    setCurrentPath
  } = useContext( AppStateContext )

  useEffect(() => {
    setCurrentPath(path)
  }, [])

  return (
    <>
      <HomePage />
    </>
  )
}

export default IndexPage
