import React from 'react'
import Hero from './Hero'
import RecentWorks from './RecentDesigns'
import Projects from './Projects'
import Experiments from './Experiments'
import MailUs from '../MailUs'
import { SectionWrapper } from '../../components/Container'
import styled from 'styled-components'
import BlogPosts from './BlogPosts'
import MyProcess from './MyProcess'

const RecentWorkWrapper = styled.section`
  max-width: 100vw;
  overflow: hidden;
  width: 100%;
  //display: none;
`

const HomePage = () => {


  return (
    < >

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

      {/*<SectionWrapper>*/}
        <MyProcess/>
      {/*</SectionWrapper>*/}


      {/*<SectionWrapper>*/}
      {/*  <MailUs />*/}
      {/*</SectionWrapper>*/}



    </>
  )
}

export default HomePage
