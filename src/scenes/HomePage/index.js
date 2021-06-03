import React, { useContext, useEffect, useState } from 'react'
import Hero from './Hero'
import RecentWorks from './RecentDesigns'
import Projects from './Projects'
import Experiments from './Experiments'
import MailUs from '../MailUs'
import { PageContainer, SectionWrapper } from '../../components/Container'
import styled from 'styled-components'
import ReactFullpage from '@fullpage/react-fullpage'
import ProjectImage from './Projects/components/List/components/ProjectImage'
import ProjectDescription from './Projects/components/List/components/ProjectDescription'
import StackUsed from './Projects/components/List/components/StackUsed'
import { ExitStateContext } from '../../contexts/ExitStateContext'
import { Typography } from '@material-ui/core'
import ProjectList from './Projects/components/List'
import useProjectsAssets from '../../hooks/queries/useProjectsAssets'

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
