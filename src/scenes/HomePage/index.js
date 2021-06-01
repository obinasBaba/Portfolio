import React from 'react'
import Hero from './Hero'
import RecentWorks from './RecentDesigns'
import Projects from './Projects'
import Experiments from './Experiments'
import MailUs from '../MailUs'
import { PageContainer, SectionWrapper } from '../../components/Container'
import ExitStateProvider from '../../contexts/ExitStateContext'
import { Main } from '../../components/layoutComponents'

const HomePage = () => {
  return (
    <PageContainer>
      <SectionWrapper>
        <Hero />
      </SectionWrapper>

      <RecentWorks />

      <ExitStateProvider>
        <SectionWrapper>
          <Projects />
        </SectionWrapper>
      </ExitStateProvider>

      <SectionWrapper>
        <Experiments />
      </SectionWrapper>

      <SectionWrapper>
        <MailUs />
      </SectionWrapper>
    </PageContainer>
  )
}

export default HomePage
