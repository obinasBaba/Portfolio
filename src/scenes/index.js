import React from 'react'
import Hero from './HomePage/Hero'
import RecentWorks from './HomePage/RecentDesigns'
import Projects from './HomePage/Projects'
import Experiments from './HomePage/Experiments'
import MailUs from './MailUs'
import {PageContainer, SectionWrapper} from '../components/Container'

const HomePage = (  ) => {
  return (
    <PageContainer>

      <SectionWrapper >
        <Hero/>
      </SectionWrapper>

      <RecentWorks/>

      <SectionWrapper >
        <Projects/>
      </SectionWrapper>

      <SectionWrapper >
        <Experiments />
      </SectionWrapper>

      <SectionWrapper >
        <MailUs />
      </SectionWrapper>


    </PageContainer>
  )
}

export default HomePage
