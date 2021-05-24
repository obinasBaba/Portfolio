import React from 'react'
import Headline from './Headline'
import styled, { css } from 'styled-components'
import { mediumUp, spacing } from '../../styles/mixins'
import { Container } from '@material-ui/core'
import Intro from './Intro'
import AnalysisPreparation from './AnalysisPreparation'
import ColorPalette from './Colors'
import NextProject from './NextProject'

const ProjectContainer = styled.div`
  ${spacing('pt', 27.4)};

  ${mediumUp(css`
    ${spacing('pt', 17)};
  `)};
`

const ContentSectionWrapper = styled( Container )`
  background-color: #f3f3f3;
  max-width: 1600px;
  margin: 0 auto;

  ${spacing('mt', -18)};
  ${spacing('pt', 35)};
`

const Project = ({ pageContext }) => {
  const { title, subTitle, about, featured_media } = pageContext.project;

  return (
    <ProjectContainer>
      <Headline title={title} subTitle={subTitle} about={about} media={featured_media}  />

      <ContentSectionWrapper disableGutters={true}
                             maxWidth={false}
                             fixed={false}
                             component={'section'} >
        <Intro/>

        <AnalysisPreparation />

        <ColorPalette/>

        <NextProject/>



      </ContentSectionWrapper>

    </ProjectContainer>
  )
}

export default Project
