import React, { useContext, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { processData } from './data'
import Card from './components/Card'
import { useLottiAssets } from '../../../../hooks/queries/useLottiAssets'
import gsap from 'gsap'
import STrigger from 'gsap/ScrollTrigger'
import { AppStateContext } from '../../../../contexts/AppStateContext'
import {
  mediumUp,
  smallDown,
  spacing,
  text,
  title,
} from '../../../../styles/mixins'
import BigPlanet from './components/BigPlanet'
import useOnScreen from '../../../../hooks/useOnScreen'
import LocomotiveScroll from 'locomotive-scroll'
import { randomNumber } from '../../../../helpers/utils'

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

  font-weight: 900;
  font-family: 'Bodoni Moda', serif;
  margin: 0 auto;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  // this one fixes gradient text line breaks safari bug: https://zellwk.com/blog/multi-line-gradient-links/
  -webkit-box-decoration-break: clone;

  background-image: linear-gradient(137.81deg,
  #5d6c7b 3.52%,
  #a4b5c0 41.89%,
  #bfd0d9 96.77%);
  //border: thin dashed burlywood;

  ${spacing('pl', 3)};
  ${spacing('pb', 1.7)}

  ${smallDown(css`
    ${text(3.5)};
  `)};

  ${mediumUp(css`
    ${spacing('pl', 7)};
  `)};
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

const Operate = styled.div`
  display: flex;
  flex-flow: column;
  align-self: center;
`
const OperateTxt = styled(Typography)`
  color: transparent;
  font-weight: 900;
  font-family: 'Bodoni Moda', serif;
  margin: 0 auto;
  -webkit-text-stroke: 1.5px #5d6c7b;
  
  ${text(8)};
  
  & > *{
    line-height: .5;
    padding-bottom: 0;
  }
  
`

const MyProcess = () => {
  const { build, design, ufo, align, rocket } = useLottiAssets()
  const icons = [ufo, align, design, build, rocket]

  const maskRef = useRef(null)
  const titleRef = useRef(null)
  const trackRef = useRef(null)
  const containerRef = useRef(null)
  const mediaMatch = useMediaQuery(useTheme().breakpoints.up('md'))

  let intersecting = useOnScreen(containerRef, 0)
  const [inView, setInView] = useState(false)

  const progress = useMotionValue(0)
  const opacity = useTransform(progress, [0.39, 0.96], [1, 0])

  useEffect(() => {
    if (inView) return
    if (intersecting) setInView(true)
  }, [intersecting])

  useEffect(() => {
    if (!mediaMatch) return

    // if ( inView )

    setTimeout(() => {
      const mask = document.querySelector('.mask')
      const track = document.querySelector('.track')
      const txt = [...track.querySelectorAll('.operate_txt')]

      gsap
        .timeline()
        .to(track, {
          ease: 'none',
          scrollTrigger: {
            trigger: mask,
            pin: true,
            scroller: '[data-scroll-container]',
            start: () => 'top 20%',
            end: () => '+=' + (track.offsetWidth - 400),
          },
        })
        .to(track, {
          x: -(track.offsetWidth - 200),
          ease: 'none',
          scrollTrigger: {
            trigger: '.mask',
            scrub: 1,
            scroller: '[data-scroll-container]',
            start: () => 'top 70%',
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
        .to('.planet_wrapper', {
          scrollTrigger: {
            pin: true,
            pinSpacing: false,
            trigger: '.planet_wrapper',
            scroller: '[data-scroll-container]',
            start: 'top 15%',
            end: () => '+=' + track.offsetWidth,
          },
        })
        .to('.big_planet', {
            scale: 1.1,
            y: -10,
            rotate: 20,
            ease: 'none',

            scrollTrigger: {
              scrub: 1,
              trigger: '.planet_wrapper',
              scroller: '[data-scroll-container]',
              start: 'top 15%',
              end: () => '+=' + track.offsetWidth,
            },
          }
        )

      txt.forEach((txt, idx) => {
        gsap.to(txt, {
          // rotate: rotationsArr[cards.indexOf(card)],
          y: idx % 2 === 0 ? -300 : 300,
          scrollTrigger: {
            trigger: track,
            // endTrigger: 'card-1',
            horizontal: true,
            invalidateOnRefresh: true,
            scrub: 0.1,
            scroller: '[data-scroll-container]',
            start: () => 'left 20%',
            end: () => '+=1510',
          },
        })
      })

      STrigger.refresh()
    }, 0)
  }, [mediaMatch, inView])


  return (
    <ProcessContainer
      ref={containerRef}
      data-scroll-section
      id="process-container"
    >
      <div className="planet_wrapper">
        <div className="big_planet">
          <BigPlanet />
        </div>
      </div>

      <div className="title-wrapper">
        <motion.div style={{ opacity }}>
          <ProcessTitle
            ref={titleRef}
            variant="h1"
            className="title"
            noWrap={true}
          >
            Approach
          </ProcessTitle>
        </motion.div>
      </div>

      <ProcessMask ref={maskRef} className="mask">
        <ProcessTrack ref={trackRef} className="track">
          <Operate>
            <OperateTxt className='operate_txt' variant="h1">How I</OperateTxt>
            <OperateTxt className='operate_txt' variant="h1">Operate</OperateTxt>
          </Operate>

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
