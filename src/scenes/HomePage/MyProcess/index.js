import React, { useContext, useEffect, useRef, useState } from 'react'
import styled, {css} from 'styled-components'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import {Typography, useMediaQuery, useTheme} from '@material-ui/core'
import { processData } from './data'
import Card from './components/Card'
import { useApproachAssets } from '../../../hooks/queries/useApproachAssets'
import gsap from 'gsap'
import STrigger from 'gsap/ScrollTrigger'
import { AppStateContext } from '../../../contexts/AppStateContext'
import {mediumUp, smallDown, spacing, text, title} from '../../../styles/mixins'
import BigPlanet from './components/BigPlanet'
import useOnScreen from '../../../hooks/useOnScreen'

const ProcessContainer = styled.section`
  position: relative;
  min-height: 100vh;
  //border: thin solid red;
  
  ${spacing('mt', 25.4)};
  ${spacing('mb', 16)};
`

const ProcessTitle = styled(Typography)`
  position: relative;
  display: block;
  color: transparent;
  -webkit-text-stroke: 1.5px #f9d6ac;
  font-weight: 900;
  font-family: 'Bodoni Moda', serif;
  margin: 0 auto;
  //border: thin dashed burlywood;
  
  ${spacing('pl', 3)};
  ${spacing('pb', 1.7)}

  ${smallDown( css`
    ${text(3)};
  ` )};
  
  ${mediumUp( css`
    ${spacing('pl', 7)};
  ` )};
  
  
`

const ProcessMask = styled(motion.div)`
  z-index: 5;
  //border: thin dashed #89dc14;

  ${mediumUp(css`
    ${spacing('pl', 50)};
  `)};
`

const ProcessTrack = styled(motion.div)`
  //border: 2px dashed #00ccff;
  display: flex;
  width: 100%;
  flex-flow: column;
  align-items: center;
  ${spacing('p', 4)};
  ${spacing('gap', 3.5)};



  ${mediumUp(css`
    flex-flow: row; 
    flex-wrap: nowrap;
    align-items: stretch;
    width: max-content;
    ${spacing('p', 0)};
    ${spacing('gap', 0)};
    

    & > :not(:last-child) {
      ${spacing('mr', 17.5)};
    }
  `)};
`


const MyProcess = () => {
  const { build, design, ufo, align, rocket } = useApproachAssets()
  const icons = [ufo ,align, design, build, rocket]

  const maskRef = useRef(null)
  const titleRef = useRef(null)
  const trackRef = useRef(null)
  const containerRef = useRef(null)
  const mediaMatch =  useMediaQuery( useTheme().breakpoints.up('md') )

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
    if ( !mediaMatch ) return;

    // if ( inView )

    setTimeout(() => {

      const mask = document.querySelector('.mask')
      const track = document.querySelector('.track')

      STrigger.refresh()

      gsap.timeline()
        .to(track, {
        ease: 'none',
        scrollTrigger: {
          trigger: mask,
          pin: true,
          scroller: '[data-scroll-container]',
          start: () => 'top 23%',
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
    }, 0)
  }, [mediaMatch, inView])

  return (
    <ProcessContainer ref={containerRef} data-scroll-section>
      <div className="wavy">
        <motion.div style={{ y }}>
          <BigPlanet progress={progress} />
        </motion.div>
      </div>

      <div className="title-wrapper">
        <motion.div style={{ opacity }}>
          <ProcessTitle ref={titleRef} variant="h1" className="title" noWrap={true}>
            My Approach
          </ProcessTitle>
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
