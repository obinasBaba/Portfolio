import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import {Typography} from '@material-ui/core'
import {
  motion, useElementScroll,
  useMotionValue,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion'
import {useIntersection, useScroll} from 'react-use'

const ProcessContainer = styled.div`
  background-color: palevioletred;
  height: 450vh;
  overflow: visible;
  position: relative;
  padding-top: 10rem;
`

const Track = styled( motion.div )`
  background: papayawhip;
  padding: 5rem;
  top: 10rem;
  position: sticky;
  overflow: hidden;
  //width: 200vw;
  z-index: 5;
`

const ProcessStage = styled.div`
  display: flex;
  align-items: center;
  background-color: #ff4d5a;
  gap: 1rem;
  overflow: hidden;

  //width: 260vw;
`

const Card = styled.div`
  padding: 5rem;
  background-color: goldenrod;
  position: relative;
`

const MyProcess = () => {

  const trackRef = useRef(null);

  const containerRef = useRef(null);

  const { scrollYProgress } = useViewportScroll();
  const { scrollYProgress2  }  = useElementScroll(containerRef);


  const intersection = useIntersection(containerRef, {
    root: null,
    rootMargin: '-130px 0px -110px 0px',
    threshold: 0,
  })


  const moX = useMotionValue(0);
  const moY = useMotionValue(0);

  const mapped = useTransform(scrollYProgress, [0, 1], [2200, -1400])

  const x = useSpring(mapped, {
    mass: 1, damping: 10, stiffness: 50
  })

  const y = useSpring(moY, {
    mass: .41, damping: 110, stiffness: 150
  })


  return (
    <ProcessContainer ref={containerRef}  >


      <Track style={ { x } }  >
        {/*<Typography variant='h1' noWrap={true}>MYalk;sdjfa;lsdjkf;lajskdf;lkkajsdf;lkkjas;ldfja;lksdfj;lasjdf;lkjPROCESS</Typography>*/}

        <ProcessStage >

          <Card/>
          <Card/>
          <Card/>
          <Card/>

        </ProcessStage>


      </Track>
    </ProcessContainer>
  )
}

export default MyProcess
