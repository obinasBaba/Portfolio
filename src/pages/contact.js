import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import loadable from '@loadable/component';
import ContactPage from '../scenes/ContactPage';
import useToolTip from '../hooks/useToolTip';
import Seo from '../components/seo';
import { MotionValueContext } from '@contexts/MotionStateWrapper';
import useUpdatePath from '../hooks/useUpdatePath';

// import Footer from '../scenes/Footer'
const MailUs = loadable(() => import('@components/Footer'));

const containerVariants = {
  initial: {
    opacity: 1,
    y: 0,
  },

  exit: {
    opacity: 0,
    y: -40,
  },
};

function Contact ({ path }) {
  const { mainAnimationController, screenOverlayEvent } =
    useContext(MotionValueContext);
  // useLocoScroll();
  useUpdatePath(path);

  useToolTip('[data-tooltip-text]');
  // useRefreshMouseListeners( '.contact-container [data-pointer]' )

  return (
    <>
      <Seo
        title='Contacts'
        description={`If you want to create a product or you would like to discuss how it could be realized,
         you're exactly where you're supposed to be to
          receive advice from experienced specialist.`}
      />

      <motion.div
        variants={containerVariants}
        className='contact-container'
        transition={{
          duration: 1.3,
          ease: 'easeOut',
        }}
        initial='initial'
        animate={'animate'}
        exit='exit'
      >
        <ContactPage />
      </motion.div>
    </>
  );
}

export default Contact;
