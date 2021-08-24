import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Typography } from '@material-ui/core'
import { processData } from './data'
import Card from './components/Card'
import { useApproachAssets } from '../../../hooks/queries/useApproachAssets'
import gsap from 'gsap'
import STrigger from 'gsap/ScrollTrigger'
import { AppStateContext } from '../../../contexts/AppStateContext'
import { spacing } from '../../../styles/mixins'
import BigPlanet from './components/BigPlanet'
import useOnScreen from '../../../hooks/useOnScreen'

const ProcessContainer = styled.section`
  min-height: 100vh;
  overflow: visible;
  position: relative;
  padding: 14rem 0 10rem;
  //border: thin solid red;
`

const ProcessTxt = styled(Typography)`
  display: block;
  color: transparent;
  -webkit-text-stroke: 1.5px #f9d6ac;
  font-weight: 900;
  font-family: 'Bodoni Moda', serif;
  //border: thin dashed burlywood;

  ${spacing('pl', 7)};
  ${spacing('pb', 1.7)}
`

const ProcessMask = styled(motion.div)`
  z-index: 5;
  //border: thin dashed #89dc14;

  ${spacing('pl', 50)};
`

const ProcessTrack = styled(motion.div)`
  display: flex;
  //border: 2px dashed #00ccff;
  width: max-content;

  & > :not(:last-child) {
    ${spacing('mr', 17.5)};
  }
`

const MyProcess = () => {
  const { build, design, pentool, phone, rocket } = useApproachAssets()
  const { loadingPage } = useContext(AppStateContext)

  const icons = [phone, pentool, design, build, rocket]

  const maskRef = useRef(null)
  const titleRef = useRef(null)
  const trackRef = useRef(null)
  const containerRef = useRef(null)

  let intersecting = useOnScreen(containerRef, 0)
  const [inView, setInView] = useState(false)

  const progress = useMotionValue(0)
  const opacity = useTransform(progress, [0.89, 0.96], [1, 0])
  const y = useTransform(progress, [0, 1], [0, -200])

  useEffect(() => {
    if (inView) return
    if (intersecting) setInView(true)
  }, [intersecting])

  useEffect(() => {
    // if ( inView )

    setTimeout(() => {

      const mask = document.querySelector('.mask')
      const track = document.querySelector('.track')

      // STrigger.refresh()


      gsap.timeline()
        .to(track, {
        ease: 'none',
        scrollTrigger: {
          trigger: '.mask',
          pin: true,
          scroller: '[data-scroll-container]',
          start: () => 'top 25%',
          end: () => '+=' + (track.offsetWidth - 300),
        },
      })

        .to(track, {
        x: -(track.offsetWidth - 400),
        ease: 'none',
        scrollTrigger: {
          trigger: '.mask',
          scrub: 1,
          scroller: '[data-scroll-container]',
          start: () => 'top 25%',
          end: () => '+=' + track.offsetWidth,

          onUpdate(self) {
            progress.set(self.progress)
            console.log(self.progress)
          },
        },
      })

        .to('.title-wrapper', {
        scrollTrigger: {
          pin: true,
          pinSpacing: false,
          trigger: '.title-wrapper',
          scroller: '[data-scroll-container]',
          start: () => 'top 10%',
          end: () => '+=' + track.offsetWidth,
        },
      })

        .to('.wavy', {
        scrollTrigger: {
          pin: true,
          pinSpacing: false,
          trigger: '.wavy',
          scroller: '[data-scroll-container]',
          start: 'top 5%',
          end: () => '+=' + track.offsetWidth,
        },
      })

      STrigger.refresh()
    })
  }, [inView])

  return (
    <ProcessContainer ref={containerRef} data-scroll-section>
      <div className="wavy">
        <motion.div style={{ y }}>
          <BigPlanet progress={progress} />
        </motion.div>
      </div>

      <div className="title-wrapper">
        <motion.div style={{ opacity }}>
          <ProcessTxt ref={titleRef} variant="h1" className="title" noWrap={true}>
            My Approach
          </ProcessTxt>
        </motion.div>
      </div>

      <ProcessMask ref={maskRef} className="mask">
        <ProcessTrack ref={trackRef} className="track">
          {processData.map(({ no, title, txt, keys }, index) => (
            <Card
              key={title}
              no={no}
              title={title}
              txt={txt}
              index={index}
              path={icons[index].publicURL}
              methodologies={keys}
            />
          ))}
        </ProcessTrack>
      </ProcessMask>
    </ProcessContainer>
  )
}

export default MyProcess
