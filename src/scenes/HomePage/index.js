import React from 'react'
import Hero from './Hero'
import RecentWorks from './RecentDesigns'
import Projects from './Projects'
import Experiments from './Experiments'
import { SectionWrapper } from '../../components/Container'
import BlogPosts from './BlogPosts'
import MyProcess from './MyProcess'
import MailUs from '../MailUs'


const HomePage = () => {
  return (
    <>

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

      <MyProcess data-scroll-section />

      <SectionWrapper dataScrollSection={true}>
        <MailUs />
      </SectionWrapper>


    </>
  )
}

export default HomePage
