import React, {useContext, useEffect} from 'react'
import ContactPage from '../scenes/ContactPage'
import MailUs from '../scenes/MailUs'
import {AppStateContext, BackgroundOverlayStateContext} from '../contexts/AppStateContext'
import useLocoScroll from '../hooks/useLocoScroll'
import {motion} from 'framer-motion'
import useToolTip from "../hooks/useToolTip";
import useRefreshMouseListeners from "../hooks/useRefreshMouseListeners";
import Seo from "../components/seo";


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

  // const loco = useLocoScroll(true);


  const {
    setCurrentPath
  } = useContext( AppStateContext )

  const {
    backgroundOverlay
  } = useContext( BackgroundOverlayStateContext )

  useEffect(() => {
    setCurrentPath(path)
  }, [])


  useToolTip('[data-tooltip-text]')
  useRefreshMouseListeners('[data-pointer]')

  return (
      <>
        <Seo title='contact' description='this is the contact page where my visitors can contact me.'/>

        {
          !backgroundOverlay &&
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
        }
      </>

  )
}

export default Contact
