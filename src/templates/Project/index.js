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
  path: '',
  fun: ''
}

const BG = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  //z-index: 1;
  background-color: var(--contentBg);
  transition: background-color 1s ease-in-out ;
  //display: none;
`

const FixedItems = styled.div`
  position: fixed;
  left: 3%;
  top: 29%;
  bottom: 5%;
  z-index: 1;
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
    console.log('Exit------------To: ', args)
    if ( arg.path )
      args.path = arg.path;
    if ( arg.scrollTop )
      args.fun = arg.scrollTop


    if ( arg.path === '/projects/' ){
      console.log(args)

      if ( args.fun )
        args.fun()

      return {}
    }

    return{
      opacity: 0,
      transition: {
        duration: 5
      }
    }
  }
}

const Project = ({ pageContext, location, path }) => {
  const { title, subTitle, about, intro } = pageContext.project
  const { headlineImg } = pageContext.imageData
  const {
    setCurrentPath,
    setFromCaseStudy,
    moScroll
  } = useContext(AppStateContext)

  const loco =  useLocoScroll(true, '.projectContainer')
  // const [isPresent, safeToRemove] = usePresence()

  // console.log(loco.current)

  useEffect(() => {
    setFromCaseStudy(true)
    setCurrentPath(location.pathname)
  }, [])


  const [scrolled, setScrolled] = useState(false);


  useTransform(moScroll.y, latest => {
    if ( latest > 380 ){
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
    <ProjectContainer className='projectContainer' data-scroll-container
                      variants={containerVariants}
                      exit='exit'
                      custom={{
                        scrollTop: () => loco.current.scrollTo('top')
                        ,

                      }}
    >


      <Headline
        title={title}
        subTitle={subTitle}
        about={about}
        media={headlineImg}
      />

      <FixedItems>
        <ReturnBtn to="/projects"  onClick={(ev) => {

        }} />

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
    </ProjectContainer>
  )
}

export default Project
