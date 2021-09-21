import React, {useContext, useEffect} from 'react'
import ContactPage from '../scenes/ContactPage'
import MailUs from '../scenes/MailUs'
import {AppStateContext} from '../contexts/AppStateContext'
import useLocoScroll from '../hooks/useLocoScroll'
import {motion} from 'framer-motion'


const containerVariants = {
  initial: {
    opacity: 1,
    y: 0,
  },

  exit: {
    opacity: 0,
    y: -40
  }
}

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
    <motion.div variants={containerVariants}
                transition={{
                  duration: 1.3,
                  ease: 'easeOut'
                }}
                initial="initial"
                animate='animate'
                exit="exit"
    >
      <ContactPage/>
      <MailUs/>
    </motion.div>
  )
}

export default Contact
