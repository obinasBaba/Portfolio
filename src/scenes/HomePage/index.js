import React from 'react'
import Hero from './Hero'
import RecentWorks from './RecentDesigns'
import Projects from './Projects'
import Experiments from './Experiments'
import { SectionWrapper } from '../../components/Container'
import BlogPosts from './BlogPosts'
import MailUs from '../MailUs'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const HomeContainer = styled( motion.div )`
  
`

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1
  },
  exit: {
    opacity: 0
  },

   transition: {
    duration: 5
   }
}

const HomePage = () => {
  return (
    < motion.div variants={containerVariants}
                 transition={containerVariants.transition}
                 initial="initial"
                 animate="animate"
                 exit="exit"
    >

      <SectionWrapper dataScrollSection={true}>
        <Hero />
      </SectionWrapper>

      <RecentWorks />

      <Projects />

      <SectionWrapper dataScrollSection={true} >
        <BlogPosts />
      </SectionWrapper>

      <SectionWrapper dataScrollSection={true}>
        <Experiments />
      </SectionWrapper>

      <MailUs />


    </motion.div>
  )
}

export default HomePage
