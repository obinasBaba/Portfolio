import React, { useContext, useEffect } from 'react'
import Headline from './Headline'
import Intro from './Intro'
import AnalysisPreparation from './AnalysisPreparation'
import ColorPalette from './Colors'
import FontUsed from './FontUsed'
import MetaTxt from './MetaTxt'
import Concept from './Concept'
import Development from './Development'
import ReturnBtn from '../../components/ReturnBtn'
import { AppStateContext } from '../../contexts/AppStateContext'
import { Link } from 'gatsby'
import useOnScreen from '../../hooks/useOnScreen'
import useLocoScroll from '../../hooks/useLocoScroll'
import styled from 'styled-components'
import ScrollDown from '../../components/ScrollDown'

const BG = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #f3f3f3;
  z-index: -1;
`
const FixedItems = styled.div`
  position: fixed;
  left: 3%;
  top: 29%;
  bottom: 5%;
  z-index: 10;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
`

const Project = ({ pageContext, location, path }) => {
  const { title, subTitle, about, intro } = pageContext.project
  const { headlineImg } = pageContext.imageData

  // console.log(location)

  const targetElement = React.useRef(null)
  const intersection = useOnScreen(targetElement, 0, '0px 0px -510px 0px')

  const {
    setCurrentPath,
    setFromCaseStudy,
  } = useContext(AppStateContext)

  useLocoScroll(true)

  useEffect(() => {
    setFromCaseStudy(true)
    setCurrentPath(location.pathname)

    // return

    if (intersection) {
      console.log(intersection)
      document.body.classList.add('blog-clr')
    } else {
      console.log(intersection)
      document.body.classList.remove('blog-clr')
    }

    return () => {
      document.body.classList.remove('blog-clr')
    }
  }, [intersection])


  return (
    <>
      <Headline
        title={title}
        subTitle={subTitle}
        about={about}
        media={headlineImg}
      />

      <FixedItems>
        <ReturnBtn to="/projects" />
        <ScrollDown/>
      </FixedItems>


      <BG/>

      <div className="line" />

      <MetaTxt />

      <Intro intro={intro} />

      <AnalysisPreparation />

      <ColorPalette />

      <FontUsed />

      <Concept />

      <Development />


      <Link to={'/projects'} state={{ path: 'location.pathname' }}>
        <ReturnBtn key="return" />
      </Link>
    </>
  )
}

export default Project
