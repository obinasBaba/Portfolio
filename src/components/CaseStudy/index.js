import React, {useContext, useEffect, useRef, useState} from 'react'
import Headline from './Headline'
import ReturnBtn from '../ReturnBtn'
import { AppStateContext } from '../../contexts/AppStateContext'
import styled from 'styled-components'
import { ProjectContainer } from './components'
import {useMotionValue, usePresence, useTransform} from 'framer-motion'
import { HeadLineBG } from './Headline/Components'
import { bgVariant, transition } from './Headline/variants'
import { MotionValueContext } from '../../contexts/MotionStateWrapper'
import ProjectScrollDown from '../../scenes/ProjectPage/components/SideBarTools/ProjectScrollDown'
import { createPortal } from 'react-dom'
import {navigate} from "gatsby";
import NextProject from "./NextProject";

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
  nextProject: {
    title: 'next title',
    url: '/',
    thumbnailUrl: '/'
  }
}

const FixedPortal = ({children}) => {
  return createPortal(children, document && document.body);
}

const CaseStudy = ({ projectData = projectDataDefault, path, children }) => {
  const { title, subTitle, about } = projectData
  const { thumbnailUrl, title : nextProjectTitle , url } = projectData.nextProject;
  // const { headlineImg, publicURL } = projectData.imageData
  const {
    setCurrentPath,
  } = useContext(AppStateContext)

  const {
    variantsUtil : {fromCaseStudy, isTop, fromProjectList} , moScroll, locoInstance, largeUp
  } = useContext(MotionValueContext)

  const [scrolled, setScrolled] = useState(false);
  const bgRef = useRef(null)

  const moInitial = useMotionValue(fromProjectList.get() ?
      (largeUp.get() ? ['fromProjectsInitial'] : ['fromProjectsSmallInitial'])
      : largeUp.get() ? ['initial'] : ['smallInitial'])

  const moAnimate = useMotionValue(fromProjectList.get() ?
      (largeUp.get() ? ['fromProjectsAnimate'] : ['fromProjectsSmallAnimate'])
      : largeUp.get() ? ['animate'] : ['smallAnimate'])

  const showScrollDown = useMotionValue(0)
  // const [isPresent, safeToRemove] = usePresence()


  useEffect(() => {
    // console.log('fromProject : ', location, path)
    bgRef.current = document.body.querySelector('.projectContainer')
    setCurrentPath(path)
    fromProjectList.set(false)
    fromCaseStudy.set(true)

  }, [])

  useTransform(moScroll.y, latest => {
    if ( latest > 510 ){
      if ( !scrolled  )
        setScrolled( true )

    }else{
      if(scrolled)
        setScrolled(false)
    }
  })

  useEffect(() => {

    if ( scrolled ) {
      showScrollDown.set(1)
      bgRef.current
          ?.classList.add('container-scrolled');

      document.body.classList.add('blog-clr')
    } else {
      showScrollDown.set(0)

      bgRef.current
          ?.classList.remove('container-scrolled')

      document.body.classList.remove('blog-clr')

    }


    return () => document.body.classList.remove('blog-clr')
  }, [scrolled])

  const returnClick = (ev) => {
    ev.preventDefault()
    let s = scrolled;
    console.log('scrolled : ', s)
    locoInstance.get().scrollTo(0, {
      easing: [0.6, 0.01, 0, 0.9],
      callback: () => setTimeout(() => navigate(projectData?.backUrl), scrolled ? 350 : 0)
    })
  }

  return (
    <>

      <div>
        <FixedItems>
          <ReturnBtn to={projectData?.backUrl || '/projects'}
                     onClick={returnClick} />

          <ProjectScrollDown activeIndex={showScrollDown} />

        </FixedItems>
      </div>

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

        <NextProject thumbnailUrl={thumbnailUrl} title={nextProjectTitle} url={url} />

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
