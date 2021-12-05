import React, { useContext, useEffect, useState } from 'react'
import Headline from './Headline'
import Intro from './Intro'
import ReturnBtn from '../../components/ReturnBtn'
import { AppStateContext } from '../../contexts/AppStateContext'
import { Link } from 'gatsby'
import useLocoScroll from '../../hooks/useLocoScroll'
import styled from 'styled-components'
import ScrollDown from '../../components/ScrollDown'
import { ProjectContainer } from './components'
import { useMotionValue, useTransform } from 'framer-motion'
import { HeadLineBG } from './Headline/Components'
import { bgVariant, transition } from './Headline/variants'

let args = {
  path: undefined,
  scroll: undefined,
}

const BG = styled.div`
  display: none;
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
  const { headlineImg, publicURL } = pageContext.imageData
  const {
    setCurrentPath,
    moScroll,
    variantsUtil: {fromCaseStudy, isTop, fromProjectList}
  } = useContext(AppStateContext)

  const [scrolled, setScrolled] = useState(false);

  const loco =  useLocoScroll(true, '.projectContainer')
  const moInitial = useMotionValue(fromProjectList.get() ? ['fromProjectsInitial'] : ['initial'])
  const moAnimate = useMotionValue(fromProjectList.get() ? ['fromProjectsAnimate'] : ['animate'])

  useEffect(() => {
    // console.log('fromProject : ', fromProjectList)
    fromProjectList.set(false)
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
        <ReturnBtn to={"/projects" } onClick={() => {
          isTop.set( moScroll.y.get() < 10 )
        }} />

        <ScrollDown/>
      </FixedItems>

      <ProjectContainer className='projectContainer' data-scroll-container
                        variants={containerVariants}
                        initial={moInitial.get()}
                        animate={moAnimate.get()}
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
          media={publicURL}
        />


        <HeadLineBG  variants={bgVariant} transition={transition} />


        <div className="line" />

        <Intro intro={intro}/>

        {/*<MetaTxt />

        <AnalysisPreparation />

        <ColorPalette />

        <FontUsed />

        <Concept />

        <Development />
*/}

        <Link to={'/projects'} state={{ path: 'location.pathname' }}>
          <ReturnBtn key="return" />
        </Link>
      </ProjectContainer>
    </>

  )
}
/*
* Thanks for stopping by Alien,

This is relatively a new project I just finished, so am
putting together some intercis  to prepare and in depth,
walk-through story to tell.

Aside that enjoy other places of my space.
* */

export default Project
