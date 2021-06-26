import * as React from 'react'
import { useContext, useEffect } from 'react'
import HomePage from '../scenes/HomePage'
import { AppStateContext } from '../contexts/AppStateContext'

const IndexPage = () => {
  const { setMoonLight, moonLight } = useContext(AppStateContext)

  useEffect(() => {
    setMoonLight(true)
  }, [])

  return (
    <>
      <HomePage />
    </>
  )
}

export default IndexPage
