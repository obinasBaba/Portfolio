import React from 'react'
import Hero from './Hero'
import RecentWorks from './RecentDesigns'
import Projects from './Projects'
import Experiments from './Experiments'
import MailUs from '../MailUs'
import {PageContainer, SectionWrapper} from '../../components/Container'

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
