import React from 'react'
import Hero from './Hero'
import RecentWorks from './RecentDesigns'
import Projects from './Projects'
import Experiments from './Experiments'
import styled from 'styled-components'
import { SectionWrapper } from '../../components/Container'
import BlogPosts from './BlogPosts'
import MyProcess from './MyProcess'
import { motion } from 'framer-motion'
import Moon from '../../layouts/Components/Moon'

const RecentWorkWrapper = styled.section`
  max-width: 100vw;
  overflow: hidden;
  width: 100%;
  //display: none;
`

const MoonContainer = styled.div`
  //border: thick solid red;
  max-width: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
`

const parentVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

const transition = {
  duration: 1,
}

const HomePage = () => {
  return (
    <motion.div
      variants={parentVariant}
      transition={transition}
      initial="initial"
      animate="animate"
      exit="exit"
    >

      <MoonContainer>
        <Moon />


        <SectionWrapper>
          <Hero />
        </SectionWrapper>

        <RecentWorkWrapper>
          <RecentWorks />
        </RecentWorkWrapper>


      </MoonContainer>

      <Projects />

      <SectionWrapper>
        <BlogPosts />
      </SectionWrapper>

      <SectionWrapper>
        <Experiments />
      </SectionWrapper>

      <MyProcess />
    </motion.div>
  )
}

export default HomePage
