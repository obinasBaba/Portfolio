import React, {useContext, useEffect, useState} from 'react'
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
import {ProjectContainer} from './components'
import {usePresence, useTransform} from 'framer-motion'

let args = {
  path: undefined,
  scroll: undefined
}

const BG = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
  background-color: var(--contentBg);
  transition: background-color .8s ease-in-out ;
  //display: none;
`

const FixedItems = styled.div`
  position: fixed;
  left: 3%;
  top: 29%;
  bottom: 5%;
  z-index: 11;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  
  //border: thin solid red;
`

const containerVariants = {

  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
  },
  exit(arg){
    if ( arg.path )
      args.path = arg.path;
    if ( arg.scrollTop )
      args.scroll = arg.scrollTop

    if ( arg.path === '/projects/' ){
      if ( args.scroll )
        args.scroll()

      return {}
    }

    return{
      opacity: 0,
      transition: {
        duration: 1.5
      }
    }
  }
}

const Project = ({ pageContext, location, path }) => {
  const { title, subTitle, about, intro } = pageContext.project
  const { headlineImg } = pageContext.imageData
  const {
    setCurrentPath,
    moScroll,
    variantsUtil: {fromCaseStudy, isTop}
  } = useContext(AppStateContext)



  const loco =  useLocoScroll(true, '.projectContainer')
  // const [isPresent, safeToRemove] = usePresence()

  // console.log(loco.current)

  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    fromCaseStudy.set(true)
    setCurrentPath(location.pathname)

  }, [])





  useTransform(moScroll.y, latest => {
    if ( latest > 450 ){
      if ( !scrolled  )
        setScrolled( true )

    }else{
      if(scrolled)
        setScrolled(false)
    }
  })

  useEffect(() => {

    if ( scrolled ) {
      document.body
        .querySelector('.projectContainer')
        .classList.add('container-scrolled');
      
      document.body.classList.add('blog-clr')
    }
    else {
      document.body
        .querySelector('.projectContainer')
        .classList.remove('container-scrolled')

      document.body.classList.remove('blog-clr')

    }


    return () => document.body.classList.remove('blog-clr')
  }, [scrolled])


  return (
    <>
      <FixedItems>
        <ReturnBtn to="/projects" onClick={() => {
          isTop.set( moScroll.y.get() < 10 )
          console.log( 'pos: ', moScroll.y.get())
        }} />

        <ScrollDown/>
      </FixedItems>

      <ProjectContainer className='projectContainer' data-scroll-container
                        variants={containerVariants}
                        exit='exit'
                        custom={{
                          scrollTop: () => loco.current.scrollTo('top', {
                            disableLerp: true
                          })
                        }}
      >


        <Headline
          title={title}
          subTitle={subTitle}
          about={about}
          media={headlineImg}
        />


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
      </ProjectContainer>
    </>

  )
}

export default Project
