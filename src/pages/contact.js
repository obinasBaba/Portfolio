import React, {useContext, useEffect} from 'react'
import ContactPage from '../scenes/ContactPage'
import MailUs from '../scenes/MailUs'
import {AppStateContext} from '../contexts/AppStateContext'
import useLocoScroll from '../hooks/useLocoScroll'

const Contact = ({path}) => {

  const loco = useLocoScroll(true);


  const {
    setCurrentPath,
  } = useContext( AppStateContext )

  useEffect(() => {
    console.log(path)
    setCurrentPath(path)
  }, [])

  return (
    <>
      <ContactPage/>
      <MailUs/>
    </>
  )
}

export default Contact
