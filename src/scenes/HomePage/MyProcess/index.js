import React, { useContext, useEffect, useRef } from 'react'
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

gsap.registerPlugin(STrigger)


const ProcessContainer = styled.div`
  // --bg : ${({ inView }) => (inView ? '#02021e' : 'rgba(2,2,30,0)')};

  //border: thin solid red;
  min-height: 100vh;
  overflow: visible;
  position: relative;
  //margin: 10rem 0;
  padding: 14rem 0 10rem;
  //background: var(--bg);

  transition: background 1s cubic-bezier(0.6, 0.01, 0, 0.9);

  .wavy {
    position: sticky;
    top: 0;
  }
`

const ProcessTxt = styled(Typography)`
  display: block;
  //border: thin dashed burlywood;
  //line-height: 100%;
  //padding-left: 7rem;
  //padding-bottom: 2rem;
  ${spacing('pl', 7)};
  ${spacing('pb', 1.7)};

  color: transparent;
  -webkit-text-stroke: 1.5px #f9d6ac;
  font-weight: 900;
  font-family: "Bodoni Moda", sans-serif;
  //height: max-content !important;
`

const ProcessMask = styled(motion.div)`
  //border: thin dashed #89dc14;
  //padding: 6rem 0 2rem 20rem;
  z-index: 5;
  
  ${spacing('pl', 50)};

`

const ProcessTrack = styled(motion.div)`
  display: flex;
  //border: thin dashed #00CCFF;
  //width: 250vw;
  width: max-content;

  & > :not(:last-child) { 
    //margin-right: 11rem;
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

  const progress = useMotionValue(0)
  const opacity = useTransform(progress, [.89, .96], [1, 0])
  const y = useTransform(progress, [0, 1], [0, -200])
  // animate(y)

  useEffect(() => {

    let cards = gsap.utils.toArray('.card')

    setTimeout(() => {
      gsap.to('.track', {
        // x: -(trackRef.current.offsetWidth - 500 ),
        ease: "none",
        scrollTrigger: {
          trigger: '.mask',
          // scrub: 2,
          pin: true,
          start: 'top 25%',
          end: () => '+=' +  (trackRef.current.offsetWidth - 300),
        },
      })

      gsap.to('.track', {
        x: -(trackRef.current.offsetWidth - 400 ),
        ease: "none",
        scrollTrigger: {
          trigger: '.mask',
          scrub: 1.3,
          // pin: true,
          start: 'top 25%',
          onUpdate(self){
            progress.set(self.progress)
          },
          end: () => '+=' +  trackRef.current.offsetWidth ,
        },
      })

      gsap.to('.title-wrapper', {
        scrollTrigger: {
          pin: true,
          pinSpacing: false,
          trigger: '.title-wrapper',
          start: 'top 10%',
          end: () => '+=' +  (trackRef.current.offsetWidth ) ,
        }
      })

      gsap.to('.wavy', {
        scrollTrigger: {
          pin: true,
          pinSpacing: false,
          trigger: '.wavy',
          start: 'top 5%',
          end: () => '+=' +  (trackRef.current.offsetWidth ) ,
        }
      })

      STrigger.refresh()
    }, 1000)

  }, [loadingPage])


  return (
    <ProcessContainer ref={containerRef} >
      <div className="wavy">
        <motion.div style={{y}}>
          <BigPlanet progress={progress} />
        </motion.div>

      </div>


      <div className="title-wrapper">
        <motion.div style={{opacity}}>
          <ProcessTxt ref={titleRef} variant="h1" className="title" noWrap={true}>
              My Approach
          </ProcessTxt>
        </motion.div>

      </div>



      <ProcessMask ref={maskRef} className='mask' >
        <ProcessTrack ref={trackRef} className='track'>
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
