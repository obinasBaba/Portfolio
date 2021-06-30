import React, { useContext, useEffect } from 'react'
import Headline from './Headline'
import Intro from './Intro'
import AnalysisPreparation from './AnalysisPreparation'
import ColorPalette from './Colors'
import FontUsed from './FontUsed'

import { useIntersection } from 'react-use'
import { ContentSectionWrapper, ProjectContainer } from './components'
import MetaTxt from './MetaTxt'
import Concept from './Concept'
import Development from './Development'
import ReturnBtn from '../../components/ReturnBtn'
import {AppStateContext} from '../../contexts/AppStateContext'
import {Link} from 'gatsby'

const topVariant = {


}



const Project = ({ pageContext, location }) => {
  const { title, subTitle, about,  intro } = pageContext.project
  const { headlineImg } = pageContext.imageData;

  // console.log(location)

  const targetElement = React.useRef(null)
  const { setIsWhite } = useContext( AppStateContext );

  const intersection = useIntersection( targetElement, {
    root: null,
    rootMargin: '0px',
    threshold: .2,
  } )

  useEffect(() => {
    setIsWhite(  intersection && intersection.isIntersecting )

  }, [intersection]);


  return (
    <ProjectContainer variants={topVariant}
                      initial='initial'
                      animate='animate'
                      exit='exit'
                      key='pro-container'

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

        <Concept  />

        <Development />

      </ContentSectionWrapper>

      {/*<NextProject />*/}

      <Link to={location.state.path} state={{ path: location.pathname }} >
        <ReturnBtn key='return'  />
      </Link>


    </ProjectContainer>
  )
}

export default Project
