import React from 'react'
import Hero from './Hero'
import RecentWorks from './RecentDesigns'
import Projects from './Projects'
import Experiments from './Experiments'
import styled from 'styled-components'
import { SectionWrapper } from '../../components/Container'
import BlogPosts from './BlogPosts'
import MyProcess from './MyProcess'
import {motion} from 'framer-motion'

const RecentWorkWrapper = styled.section`
  max-width: 100vw;
  overflow: hidden;
  width: 100%;
  //display: none;
`

const parentVariant = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0
  }
}

const transition ={
  duration: 1,
}

const HomePage = () => {


  return (
    <motion.div variants={parentVariant}
                transition={transition}
                initial='initial'
                animate='animate'
                exit='exit'
    >

      <SectionWrapper>
        <Hero />
      </SectionWrapper>

      <RecentWorkWrapper>
        <RecentWorks />
      </RecentWorkWrapper>

      <Projects />

      <SectionWrapper>
        <BlogPosts/>
      </SectionWrapper>

      <SectionWrapper>
        <Experiments />
      </SectionWrapper>

      <MyProcess/>

    </motion.div>
  )
}

export default HomePage
