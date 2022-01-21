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
import {Link} from "gatsby";

// const MailUs = React.lazy(() => import('../MailUs'))

const containerVariants = {

}

const HomePage = () => {

  const isSSR = typeof window === "undefined"

  // const { inView } = useContext(MotionValueContext)

  return (
    < motion.main variants={containerVariants}
                 transition={containerVariants.transition}
                 initial="initial"
                 animate="animate"
                 exit="exit"
                 // custom={{exitPresent: inView.get()}}
                 whileInView="inView"
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


      <MailUs />



    </motion.main>
  )
}

export default HomePage
