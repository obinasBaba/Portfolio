import React, { useEffect } from 'react'
import Headline from './Headline'
import styled, { css } from 'styled-components'
import { mediumUp, spacing } from '../../styles/mixins'
import { Container } from '@material-ui/core'
import Intro from './Intro'
import AnalysisPreparation from './AnalysisPreparation'
import ColorPalette from './Colors'
import NextProject from './NextProject'
import { useHeaderIsWhite } from '../../hooks/useHeaderIsWhite'
import FontUsed from './FontUsed'

const ProjectContainer = styled.div`
  max-width: 1600px;
  ${spacing('pt', 27.4)};

  ${mediumUp(css`
    ${spacing('pt', 17)};
  `)};
`

const ContentSectionWrapper = styled(Container)`
  position: relative;
  background-color: #f3f3f3;
  max-width: 1600px;
  margin: 0 auto;
  z-index: 1;

  ${spacing('mt', -18)};
  ${spacing('pt', 35)};
  ${spacing('pb', 15)};

  .line {
    position: absolute;
    width: 1px;
    background-color: black;
    opacity: 0.04;
    top: 0;
    bottom: 0;
    left: 50%;
    z-index: -1;
  }

  &::before,
  &::after {
    content: '';
    font-size: 10rem;
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    width: 1px;
    right: 20%;
    background-color: black;
    z-index: -1;
    opacity: 0.04;
  }

  &::after {
    left: 20%;
  }
`

const Project = ({ pageContext }) => {
  const { title, subTitle, about, featured_media } = pageContext.project
  const ref = React.useRef(null)

  useEffect(() => {}, [ref])

  return (
    <ProjectContainer>
      <Headline
        title={title}
        subTitle={subTitle}
        about={about}
        media={featured_media}
      />

      <ContentSectionWrapper
        disableGutters={true}
        maxWidth={false}
        fixed={false}
        component={'section'}
        ref={ref}
      >
        <div className="line" />

        <Intro />

        <AnalysisPreparation />

        <ColorPalette />

        <FontUsed />
      </ContentSectionWrapper>

      <NextProject />
    </ProjectContainer>
  )
}

export default Project
