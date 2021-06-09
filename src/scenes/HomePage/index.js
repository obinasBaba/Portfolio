import React from 'react'
import Hero from './Hero'
import RecentWorks from './RecentDesigns'
import Projects from './Projects'
import Experiments from './Experiments'
import MailUs from '../MailUs'
import { PageContainer, SectionWrapper } from '../../components/Container'
import styled from 'styled-components'

const ProjectSectionWrapper = styled( SectionWrapper )`
  border: thick solid red;
  display: none;
`



const HomePage = () => {
  return (
    <PageContainer>
      <SectionWrapper>
        <Hero />
      </SectionWrapper>

      <RecentWorks />

      {/*<ExitStateProvider>*/}
        <SectionWrapper>
          <Projects />
        </SectionWrapper>
      {/*</ExitStateProvider>*/}

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
