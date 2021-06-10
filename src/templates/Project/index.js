import React, { useContext, useEffect } from 'react'
import Headline from './Headline'
import Intro from './Intro'
import AnalysisPreparation from './AnalysisPreparation'
import ColorPalette from './Colors'
import NextProject from './NextProject'
import FontUsed from './FontUsed'

import { useIntersection } from 'react-use'
import { HeaderContext } from '../../contexts'
import { ContentSectionWrapper, ProjectContainer } from './components'
import MetaTxt from './MetaTxt'

const variant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    }
  }
}



const Project = ({ pageContext }) => {
  const { title, subTitle, about, featured_media, intro } = pageContext.project
  const { headlineImg } = pageContext.imageData;


  const targetElement = React.useRef(null)
  const { setIsWhite } = useContext(HeaderContext);

  const intersection = useIntersection( targetElement, {
    root: null,
    rootMargin: '0px',
    threshold: .2,
  } )

  useEffect(() => {
    setIsWhite(  intersection && intersection.isIntersecting )

  }, [intersection]);


  return (
    <ProjectContainer variants={variant}
                      initial={'initial'}
                      animate={'animate'}
                      exit='exit'

    >

      <Headline
        title={title}
        subTitle={subTitle}
        about={about}
        media={headlineImg}
      />

      <ContentSectionWrapper ref={targetElement} >
        <div className="line" />

        <MetaTxt  />



        <Intro intro={intro} />

        <AnalysisPreparation />

        <ColorPalette />

        <FontUsed />

      </ContentSectionWrapper>

      <NextProject />

    </ProjectContainer>
  )
}

export default Project
