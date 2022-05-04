import React, { useContext, useEffect, Suspense} from 'react'
import { motion } from 'framer-motion'
import loadable from '@loadable/component';
import Hero from './Hero'
import RecentWorks from './RecentDesigns'
import Projects from './Projects'
import Experiments from './Experiments'
import { SectionWrapper } from '../../components/Container'
import BlogPosts from './BlogPosts'
import {MotionValueContext} from "../../contexts/MotionStateWrapper";
// import MailUs from "../MailUs";

const doExit = true;

const MailUs = loadable(() => import('../../components/MailUs'))

const containerVariants = {
  exit(){
    if(!doExit)
      return {
        opacity: 0,
      }

    return {}
  },


}

const  transition = {
  duration: .3,
  ease: [0.6, 0.01, 0, 0.9],
};

function HomePage() {



  const { mainAnimationController, screenOverlayEvent } = useContext(MotionValueContext)

  useEffect(() => {

  }, [])

  return (
    < motion.main variants={containerVariants}
                  className='homepage-container'
                 transition={transition}
                 initial="initial"
                  animate={ screenOverlayEvent.get() === 'closed' ? 'animate' :  mainAnimationController}
                  exit="exit"
                 whileInView="inView"
    >

        <Hero />


     <RecentWorks />

      <Projects />

      <SectionWrapper dataScrollSection>
        <Experiments />
      </SectionWrapper>


      <SectionWrapper dataScrollSection >
        <BlogPosts />
      </SectionWrapper>


      <MailUs />
      {/* <Suspense  fallback={<footer> fotter is loading </footer>}>
      <MailUs />
        </Suspense> */}



    </motion.main>
  )
}

export default HomePage
