import React, { useContext, useEffect, useState } from 'react'
import Headline from './Headline'
import ReturnBtn from '../components/ReturnBtn'
import { AppStateContext } from '../contexts/AppStateContext'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { ProjectContainer } from './components'
import { useMotionValue, useTransform } from 'framer-motion'
import { HeadLineBG } from './Headline/Components'
import { bgVariant, transition } from './Headline/variants'
import { MotionValueContext } from '../contexts/MotionStateWrapper'
import ProjectScrollDown from '../scenes/ProjectPage/components/SideBarTools/ProjectScrollDown'

let args = {
  path: undefined,
  scroll: undefined,
}

const FixedItems = styled.div`
  position: fixed;
  left: 3.8%;
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

const projectDataDefault = {
  title: 'Vigoza Digital Agency',
  subTitle: 'this is vigoza subtitle',
  headlineImage: '',
  about: {
    role: 'FrontEnd Developer',
    context: 'Design',
    period: 'End 2018',
  },
  intro: {
    themeColor: '#f1c9b3',
    color: '#02021e',
    logoUrl: '/projects/honey-logo.png',
    // imageData: preview2,
    link: 'https://www.prosapient.com',
    title: 'The Project',
    desc:
        `
        Honey is an outstanding Beauty and Hair space in Addis Abeba, Ethiopia.
        They include a variety of services including professional hair cutting and
        styling, manicures , pedicures, cosmetics, makeup and makeovers to say a few.
        This WebApp(PWA) makes their client to keep up and admire their daily post as
        well us to easily make an appointment despite the massive no of client.   
        `,
  },
}

const CaseStudy = ({ projectData = projectDataDefault, path, children }) => {
  const { title, subTitle, about } = projectData
  // const { headlineImg, publicURL } = projectData.imageData
  const {
    setCurrentPath,
  } = useContext(AppStateContext)

  const {
    variantsUtil : {fromCaseStudy, isTop, fromProjectList} , moScroll
  } = useContext(MotionValueContext)


  const [scrolled, setScrolled] = useState(false);


  const moInitial = useMotionValue(fromProjectList.get() ? ['fromProjectsInitial'] : ['initial'])
  const moAnimate = useMotionValue(fromProjectList.get() ? ['fromProjectsAnimate'] : ['animate'])

  useEffect(() => {
    // console.log('fromProject : ', location, path)
    setCurrentPath(path)
    fromProjectList.set(false)
    fromCaseStudy.set(true)

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

  const returnClick = () => {
    isTop.set( moScroll.y.get() < 10 )
  }

  return (
    <>
      <FixedItems>
        <ReturnBtn to={projectData?.location?.state?.path || '/projects'}
                   onClick={returnClick} />

        {/*<ScrollDown/>      */}
        <ProjectScrollDown  />

      </FixedItems>

      <ProjectContainer className='projectContainer'
                        variants={containerVariants}
                        initial={moInitial.get()}
                        animate={moAnimate.get()}
                        exit='exit'
                        custom={{
                          scrollTop: () => {
                            /*loco.current.scrollTo('top', {
                              disableLerp: true
                            })*/
                          }
                        }}
      >


        <Headline
          title={title}
          subTitle={subTitle}
          about={about}
          media={projectData.headlineImage}
        />


        <HeadLineBG  variants={bgVariant} transition={transition} />

        {
          children
        }


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

export default CaseStudy
