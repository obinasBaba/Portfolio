import React, { useContext, useEffect} from 'react'
import Hero from './Hero'
import RecentWorks from './RecentDesigns'
import Projects from './Projects'
import Experiments from './Experiments'
import { SectionWrapper } from '../../components/Container'
import BlogPosts from './BlogPosts'
import { motion } from 'framer-motion'
import {MotionValueContext} from "../../contexts/MotionStateWrapper";
import MailUs from "../MailUs";

let doExit = true;

// const MailUs = React.lazy(() => import('../MailUs'))

const containerVariants = {
  exit(){
    if(!doExit)
      return {
        opacity: 0,
      }

    return {}
  },

  transition :{
    duration: .3,
    ease: [0.6, 0.01, 0, 0.9],
  },
}

const HomePage = () => {


  const { inView } = useContext(MotionValueContext)

  useEffect(() => {
    inView.onChange(v => {
      doExit = v
    })
  }, [])

  return (
    < motion.main variants={containerVariants}
                 transition={containerVariants.transition}
                 initial="initial"
                 animate="animate"
                 exit="exit"
                 custom={{inView: () => inView.get()}}
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



    </motion.main>
  )
}

export default HomePage
