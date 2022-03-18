import React, { useContext, useEffect, Suspense} from 'react'
import Hero from './Hero'
import RecentWorks from './RecentDesigns'
import Projects from './Projects'
import Experiments from './Experiments'
import { SectionWrapper } from '../../components/Container'
import BlogPosts from './BlogPosts'
import { motion } from 'framer-motion'
import {MotionValueContext} from "../../contexts/MotionStateWrapper";
import loadable from '@loadable/component';
import {AppStateContext} from "../../contexts/AppStateContext";
// import MailUs from "../MailUs";

let doExit = true;

const MailUs = loadable(() => import('../MailUs'))

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

const HomePage = () => {



  const { mainAnimationController } = useContext(MotionValueContext)

  useEffect(() => {

  }, [])

  return (
    < motion.main variants={containerVariants}
                 transition={transition}
                 initial="initial"
                 animate={mainAnimationController}
                 exit="exit"
                 whileInView="inView"
    >

      {/*<SectionWrapper dataScrollSection={true}>*/}
        <Hero />
      {/*</SectionWrapper>*/}


     <RecentWorks />

      <Projects />

      <SectionWrapper dataScrollSection={true}>
        <Experiments />
      </SectionWrapper>


      <SectionWrapper dataScrollSection={true} >
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
