import React, {Suspense, useContext} from 'react'
import Hero from './Hero'
import RecentWorks from './RecentDesigns'
import Projects from './Projects'
import Experiments from './Experiments'
import { SectionWrapper } from '../../components/Container'
import BlogPosts from './BlogPosts'
import { motion } from 'framer-motion'
import {MotionValueContext} from "../../contexts/MotionStateWrapper";
import MailUs from "../MailUs";

// const MailUs = React.lazy(() => import('../MailUs'))

const containerVariants = {
  initial: {
    opacity :1,
  },
  exit(arg){
    // opacity : 0,
    if (arg && arg.exitPresent)
      return {}

    return {
      opacity: 0,
    }
  },
}

const HomePage = () => {

  const isSSR = typeof window === "undefined"

  const { inView } = useContext(MotionValueContext)

  return (
    < motion.div variants={containerVariants}
                 transition={containerVariants.transition}
                 initial="initial"
                 animate="animate"
                 exit="exit"
                 custom={{exitPresent: inView.get()}}
                 // whileInView="inView"
    >

      <SectionWrapper dataScrollSection={true}>
        <Hero />
      </SectionWrapper>

      <RecentWorks />

      <Projects />

      <SectionWrapper dataScrollSection={true}>
        <Experiments />
      </SectionWrapper>


      <SectionWrapper dataScrollSection={true} >
        <BlogPosts />
      </SectionWrapper>


      {
        // !isSSR && <Suspense fallback={<h1>loading...</h1>}><MailUs /></Suspense>
      }

      <MailUs />


    </motion.div>
  )
}

export default HomePage
