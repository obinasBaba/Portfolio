// noinspection JSIgnoredPromiseFromCall

import React, {useContext, useEffect, useRef, useState} from 'react'
import styled, { css } from 'styled-components'
import { gridify, heightWidth, smallUp, spacing } from '../styles/mixins'
import { Typography } from '@material-ui/core'
import ReturnBtn from '../components/ReturnBtn'
import ReactFullpage from '@fullpage/react-fullpage'
import { AppStateContext } from '../contexts/AppStateContext'
import { motion, useAnimation } from 'framer-motion'
import ProjectImage from '../scenes/ProjectPage/components/ProjectImage'
import ProjectDescription from '../scenes/ProjectPage/components/ProjectDescription'
import StackUsed from '../scenes/ProjectPage/components/StackUsed'
import Others from '../scenes/ProjectPage/components/Others'
import useProjectsAssets from '../hooks/queries/useProjectsAssets'

const Scroll = styled.div`
  position: fixed;
  cursor: pointer;
  left: 17px;
  bottom: 2%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-items: center;
  grid-gap: 0.6rem;

  // ${heightWidth('height', 6)};
  // ${heightWidth('width', 6)};
`

const ScrollTxt = styled(Typography)`
  font-weight: 300;
  line-height: 1.6em;
  letter-spacing: 3px;
  color: #b3afaf;
  z-index: 999999;
`

const ProjectContainerGrid = styled(motion.div)`
  ${gridify};
  // ${spacing('pt', 2)};

  ${smallUp(css`
    // ${spacing('pt', 4)};
    // ${spacing('p', 4)};
  `)};

  align-content: center;
  position: relative;
  min-height: 100vh;
`

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

  const controllers = useRef([useAnimation(), useAnimation(), useAnimation(), useAnimation()])


  const { moonLight, setMoonLight } = useContext(AppStateContext);
  const [ initialVariant, setInitialVariant ] = useState( 'initial' );


  useEffect(() => {
    setMoonLight({ ...moonLight, showMoon: false })

    console.log(controllers)
  }, [])

  return (
    <>
      <ReturnBtn
        key="return"
        onClick={() => {
          window.history.back()
        }}
      />

      <ReactFullpage
        // key={'fullpage'}
        easingcss3="cubic-bezier(0.645, 0.045, 0.355, 1)"
        scrollingSpeed="1e3"
        anchors={['one', 'two', 'three', 'four']}
        animateAnchor={false}
        setLockAnchors={false}
        setRecordHistory={false}
        navigation={true}
        navigationPosition="left"
        dragAnAndMove={true}
        scrollBar={false}
        autoScrolling={true}
        fitToSection={true}
        onLeave={(origin, dist, dir) => {
          console.log('onLeave ----')

          if (dist.isLast) {
            controllers.current[origin.index].start('exitFp')
            return true
          }

          controllers.current[origin.index].start('exitFp')
          controllers.current[dist.index].start('animateFp')
        }}
        afterLoad={(origin, dist, dir) => {
          console.log('afterLoad ----', dist.index, dir)

          if (dist.isLast) return true

          // if (dir === null)
          //   return controllers.forEach(i => i('initialFp'))
        }}
        afterRender={({ index, isLast }) => {
          console.log('afterRender .------', index, isLast)
          if (isLast) return
          // controllers.forEach(i => i('animate'))

          controllers.current[index].start('animateFp')
        }}
        render={state => {
          console.log('render -------- ',)

          return (
            <>
              {items.map((item, index) => {
                const { partners, tags, preview, alt, link, title, url } = item

                return (
                  <div className="section" key={link}>
                    <ProjectContainerGrid
                      variants={topVariant}
                      initial={initialVariant}
                      animate={controllers.current[index]}
                      exit="exit"
                    >
                      <ProjectImage
                        reversed={true}
                        link={link}
                        alt={alt}
                        title={title}
                        index={index}
                        preview={preview}
                        url={url}
                      />

                      <ProjectDescription
                        link={link}
                        reversed={true}
                        title={title}
                        index={index}
                        tags={tags}
                        url={url}
                      />

                      <StackUsed items={partners} reversed={true} />
                    </ProjectContainerGrid>
                  </div>
                )
              })}

              <div className="section">
                <Others {...othersAssets} />
              </div>
            </>
          )
        }}
      />
    </>
  )
}

export default Projects
