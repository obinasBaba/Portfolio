// noinspection JSIgnoredPromiseFromCall

import React, {useContext, useEffect, useRef, useState} from 'react'
import { motion, useMotionValue } from 'framer-motion'
import styled from 'styled-components'
import { gridify } from '../../styles/mixins'
import Moon from '../../layouts/Components/Moon'
import NavDots from './components/NavDots'
import ReactFullpage from '@fullpage/react-fullpage'
import { AppStateContext } from '../../contexts/AppStateContext'
import ProjectImage from './components/ProjectImage'
import ProjectDescription from './components/ProjectDescription'
import Others from './components/Others'
import { useProjectData } from './util/projectData'
import { moonVariants, parentVariant, topVariant } from './util/variants'
import ProjectScrollDown from './components/SideBarTools/ProjectScrollDown'
import SideBarTools from './components/SideBarTools'
import LoadingSpinner from '../../components/LoadingSpinner'
import ImgLoaded from 'imagesloaded'

const ProjectContainerGrid = styled(motion.div)`
  ${gridify};

  align-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  //border: thick solid red;
`
const ProjectPageContainer = styled(motion.main)`
  position: relative;
  max-width: 100%;
  overflow: hidden;
`


const ProjectPage = () => {
  const { othersAssets, items } = useProjectData()

  const controllers = items.map(({ controller }) => controller)
  const activeNavDotRef = useRef(null)

  const { variantsUtil: {fromCaseStudy}, projectImgLoaded } = useContext(AppStateContext)


  const moVariants = useMotionValue(
    fromCaseStudy.get() ? ['initial', 'animate'] : ['initial']
  )

  const [activeIndex, setActiveIndex] = useState(0)
  const [imgLoaded, setImgLoaded] = useState(projectImgLoaded.get());

  useEffect(() => {
    if ( projectImgLoaded.get() ) return;

    const imgNotifier =  ImgLoaded('#project-img', {})
    imgNotifier.on('always', self => {
      setImgLoaded(true)
      projectImgLoaded.set(true)
    })

  }, [])

  return (
    <>
      {
        imgLoaded ?
          <ProjectPageContainer
            variants={parentVariant}
            initial={moVariants.get()}
            animate="animate"
            // exit='exit'
          >
            <Moon showMoon={false} variants={moonVariants} />

            <NavDots ref={activeNavDotRef} />
            <ProjectScrollDown show={activeIndex === 0} />

            <ReactFullpage
              easingcss3="cubic-bezier(0.645, 0.045, 0.355, 1)"
              scrollingSpeed="1e3"
              anchors={['one', 'two', 'three', 'four']}
              animateAnchor={false}
              setLockAnchors={false}
              setRecordHistory={false}
              scrollBar={false}
              autoScrolling={true}
              fitToSection={true}
              recordHistory={true}
              scrollOverflow={true}
              lazyLoading={true}
              menu={'#navDots'} //for dotted navigation
              onLeave={(origin, dist, dir) => {
                // console.log('onLeave ...')
                if (
                  activeNavDotRef.current &&
                  activeNavDotRef.current.setActiveAnchors
                )
                  activeNavDotRef.current.setActiveAnchors(dist.index)

                setActiveIndex(dist.index)

                if (dist.isLast) {
                  controllers[origin.index].start('exitFp')
                  return true
                }

                controllers[origin.index].start('exitFp')
                controllers[dist.index].start('animateFp')
              }}
              afterLoad={(origin, dist, dir) => {
                // console.log('afterLoad ----', dist.index, dir)

                if (dir === null && !fromCaseStudy.get())
                  controllers.forEach(controller => controller.start('initial'))
              }}
              afterRender={({ index, isLast }) => {
                // console.log('afterRender .------', index, isLast,fromCaseStudy.get())
                // setAnchors.current.setAnchors(index)
                setActiveIndex(index)

                if (fromCaseStudy.get()) {
                  items.forEach(
                    ({ controller }, i) =>
                      i !== index && controller.start('initial')
                  )

                  fromCaseStudy.set(false)
                }

                setTimeout(() => {
                  if (items[index])
                    items[index].controller.start('animateFp')
                }, )

              }}
              render={state => {
                // console.log('render -------- ', state)

                return (
                  <>
                    {items.map((item, index) => {
                      if (!item.partners) return

                      const { partners, tags, preview, alt, link, title, url } = item

                      return (
                        <div className="section" key={link}>
                          <ProjectContainerGrid
                            variants={topVariant}
                            initial={moVariants.get()}
                            animate={controllers[index]}
                            exit={'exit'}
                            data-scroll
                          >
                            <ProjectImage
                              reversed={true}
                              link={link}
                              alt={alt}
                              title={title}
                              index={index}
                              preview={preview}
                              url={url}
                              exit={fromCaseStudy.get()}
                              items={partners}
                            />

                            <ProjectDescription
                              link={link}
                              reversed={true}
                              title={title}
                              index={index}
                              tags={tags}
                              url={url}
                              exit={fromCaseStudy.get()}
                            />
                          </ProjectContainerGrid>
                        </div>
                      )
                    })}

                    <div className="section fp-auto-height">
                      <Others {...othersAssets} active={activeIndex} />
                    </div>
                  </>
                )
              }}
            />
          </ProjectPageContainer>

          :

          <>
            <LoadingSpinner/>
            {
              items.map((item,index) => {
                if(index === items.length - 1 ) return ;

                return <img id='project-img' src={item.preview.publicURL} alt="" />

              })
            }
          </>

      }

    </>
  )
}

export default ProjectPage
