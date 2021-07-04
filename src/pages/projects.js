// noinspection JSIgnoredPromiseFromCall

import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { heightWidth } from '../styles/mixins'
import { Typography } from '@material-ui/core'
import ReturnBtn from '../components/ReturnBtn'
import ReactFullpage from '@fullpage/react-fullpage'
import { AppStateContext } from '../contexts/AppStateContext'
import { useAnimation, useMotionValue } from 'framer-motion'
import useProjectsAssets from '../hooks/queries/useProjectsAssets'
import NavDots from '../scenes/ProjectPage/components/NavDots'
import { motion } from 'framer-motion'
import {
  Others,
  ProjectContainerGrid,
  ProjectDescription,
  ProjectImage,
} from '../scenes/ProjectPage'
import ScrollDown from '../scenes/ProjectPage/components/SideBarTools/ScrollDown'
import SideBarTools from '../scenes/ProjectPage/components/SideBarTools'

const topVariant = {}

const Projects = ({ location }) => {
  const { auth, kklLuzern, udemy, ...listAssets } = useProjectsAssets()
  const othersAssets = { auth, kklLuzern, udemy }
  const {
    preview1,
    preview2,
    // preview3,
    css3,
    postgres,
    sql,
    typescript,
    javascript,
    mongo,
    vue,
    pwa,
    react,
    angular,
    node,
  } = listAssets

  const items = [
    {
      id: 0,
      link: '/portfolio/project-1',
      url: '/projects#one',
      linkTitle: 'Case Study',
      preview: preview1,
      tags: 'UX, UI, Illustrations, Icons',
      title: 'Digital Creative Agency.',
      alt: 'Primary Smart Bedding Website',
      imgTitle: 'Primary Smart Bedding Website',
      partners: [react, pwa, mongo, javascript],
      controller: useAnimation(),
    },
    {
      id: 1,
      link: '/portfolio/project-2',
      url: '/projects#two',
      linkTitle: 'Case Study',
      preview: preview2,
      tags: 'Analytics, UX, UI, Icons, Front-end',
      title: 'Beauty And Hair Space.',
      alt: 'Mobalytics. Game Analytics Platform Website',
      imgTitle: 'Mobalytics. Game Analytics Platform Website',
      partners: [node, angular, typescript, sql],
      controller: useAnimation(),
    },
    {
      id: 2,
      link: '/portfolio/project-3',
      url: '/projects#three',
      linkTitle: 'coming soon',
      preview: preview1,
      tags: 'Analytics, UX, UI, Front-end',
      title: 'smart clock ',
      alt: 'Glance Clock — First Smart Clock',
      imgTitle: 'Glance Clock — First Smart Clock',
      partners: [postgres, vue, javascript, css3],
      controller: useAnimation(),
    },
  ]

  const controllers = useRef([
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ])
  const setActiveNavDot = useRef(null)

  const {
    moonLight,
    setMoonLight,
    fromCaseStudy,
    setFromCaseStudy,
  } = useContext(AppStateContext)

  const moInitial = useMotionValue(
    fromCaseStudy ? ['initial', 'animate'] : ['animate', 'initial']
  )
  const moDir = useMotionValue('')

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    setMoonLight({ ...moonLight, showMoon: false })

    // console.log(location.state)
    console.log(activeIndex)
  }, [])

  return (
    <>

      <ReturnBtn onClick={() => window.history.back()} />

      <NavDots ref={setActiveNavDot}  />

      <ScrollDown activeIndex={activeIndex}  />

      <ReactFullpage
        // key={'fullpage'}
        easingcss3="cubic-bezier(0.645, 0.045, 0.355, 1)"
        scrollingSpeed="1e3"
        anchors={['one', 'two', 'three', 'four']}
        animateAnchor={false}
        setLockAnchors={false}
        setRecordHistory={false}
        // navigation={true}
        // navigationPosition="left"
        dragAnAndMove={true}
        scrollBar={false}
        autoScrolling={true}
        fitToSection={true}
        onLeave={(origin, dist, dir) => {
          // console.log('onLeave ----')

          if (setActiveNavDot.current && setActiveNavDot.current.setAnchors)
            setActiveNavDot.current.setAnchors(dist.index)

          moDir.set(dir)
          setActiveIndex(dist.index)

          if (dist.isLast) {
            controllers.current[origin.index].start('exitFp')
            return true
          }

          controllers.current[origin.index].start('exitFp')
          controllers.current[dist.index].start('animateFp')
        }}
        afterLoad={(origin, dist, dir) => {
          // console.log('afterLoad ----', dist.index, dir)

          if (dir === null && !fromCaseStudy)
            controllers.current.forEach((c, i) => c.start('initial'))

          if (dist.isLast) return true

          // if (dir === null && !fromCaseStudy)
          //   return controllers.current.forEach(c => c.start('initialFp'))
        }}
        afterRender={({ index, isLast }) => {
          // console.log('afterRender .------', index, isLast)
          // setAnchors.current.setAnchors(index)
          setActiveIndex(index)

          controllers.current[index].start('animateFp')

          if (fromCaseStudy) {
            controllers.current.forEach(
              (c, i) => i !== index && c.start('initial')
            )

            setFromCaseStudy(false)
          }
        }}
        render={state => {
          // console.log('render -------- ', state)

          return (
            <>
              {items.map((item, index) => {
                const { partners, tags, preview, alt, link, title, url } = item

                return (
                  <div className="section" key={link}>
                    <ProjectContainerGrid
                      variants={topVariant}
                      initial={moInitial.get()}
                      animate={controllers.current[index]}
                      exit={'exit'}
                    >
                      <ProjectImage
                        reversed={true}
                        link={link}
                        alt={alt}
                        title={title}
                        index={index}
                        preview={preview}
                        url={url}
                        exit={fromCaseStudy}
                        items={partners}
                        custom={{ dir: moDir.get() }}
                      />

                      <ProjectDescription
                        link={link}
                        reversed={true}
                        title={title}
                        index={index}
                        tags={tags}
                        url={url}
                        exit={fromCaseStudy}
                        active={
                          (state.state.initialized &&
                            state.state.destination.index) === index
                        }
                      />

                      {/*<StackUsed items={partners} reversed={true} />*/}
                    </ProjectContainerGrid>
                  </div>
                )
              })}

              <div className="section">
                <Others {...othersAssets} active={activeIndex} />
              </div>
            </>
          )
        }}
      />
    </>
  )
}

export default Projects
