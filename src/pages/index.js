import * as React from 'react'
import { useContext, useEffect } from 'react'
import HomePage from '../scenes/HomePage'
import { AppStateContext } from '../contexts/AppStateContext'
import ToolTip from '../components/Fixed/ToolTip'

const IndexPage = () => {

  const {
    moonLight,
    setMoonLight
  } = useContext( AppStateContext )

  useEffect(() => {
    setMoonLight({...moonLight, showMoon: true, position: 'absolute'})

  }, [])

  return (
    <>
      <HomePage />
    </>
  )
}

export default IndexPage
