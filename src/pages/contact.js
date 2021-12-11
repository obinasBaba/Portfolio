import React, {useContext, useEffect} from 'react'
// import ContactPage from '../scenes/ContactPage'
// import MailUs from '../scenes/MailUs'
import {AppStateContext} from '../contexts/AppStateContext'
// import useLocoScroll from '../hooks/useLocoScroll'
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

  return (<div/>)

  // const loco = useLocoScroll(true);


  const {
    setCurrentPath, setBackgroundOverlay
  } = useContext( AppStateContext )

  useEffect(() => {
    console.log(path)
    setCurrentPath(path)
    setBackgroundOverlay(false)
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
      {/*<ContactPage/>*/}
      {/*<MailUs/>*/}
    </motion.div>
  )
}

export default Contact
