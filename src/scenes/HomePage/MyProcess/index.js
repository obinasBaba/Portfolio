import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import {
  motion,
  useElementScroll,
  useMotionValue,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion'
import { useIntersection } from 'react-use'
import { Typography } from '@material-ui/core'

const ProcessContainer = styled.div`
  background-color: #02021e;
  border: thick solid chocolate;
  height: 450vh;
  overflow: visible;
  position: relative;
  //margin: 10rem 0;
  padding: 24rem 0 15rem;
`

const ProcessTxt = styled( Typography )`
  position: sticky;
  top: 5rem;
  border: thin dashed burlywood;
  margin-bottom: 3rem;
  line-height: 100%;
`

const ProcessMask = styled(motion.div)`
  border: thick dashed #89dc14;
  margin-top: 4rem;
  padding: 10rem 0 0 12.5rem;
  top: 7rem;
  position: sticky;
  overflow: hidden;
  z-index: 5;
`

const ProcessTrack = styled(motion.div)`
  display: flex;
  align-items: center;
  border: thin dashed #ec1f30;
  gap: 7rem;

  width: 260vw;
`

const Card = styled.div`
  padding: 2rem;
  background-color: goldenrod;
  position: relative;
  max-width: 54ch;
  border-radius: 20px;
  box-shadow: 0 40px 49px 0 rgba( 0 0 0/ 16%);
`



const MyProcess = () => {
  const maskRef = useRef(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useViewportScroll()
  const { scrollYProgress2 } = useElementScroll(maskRef)

  let [ rootMargin, setRootMargin ] = useState(0)
  let rect;


  const intersection = useIntersection(maskRef, {
    root: null,
    rootMargin: `-100px 0px -${rootMargin}px 0px`,
    threshold: 0,
  });


  const background = useMotionValue('#6797c7')
  const pos = useMotionValue(0);
  const latestY = useMotionValue(0);

  const mapped = useTransform(scrollYProgress, (i) => {
    if ( intersection && intersection.isIntersecting ){

      background.set('#d95b09')
      pos.set( containerRef.current.getBoundingClientRect().y - latestY.get() );
      return pos.get();
    }

    latestY.set(containerRef.current && containerRef.current.getBoundingClientRect().y );
    background.set('#6797c7')

  })

  const moX = useSpring(mapped, {
    // mass: .7, damping: 10, stiffness: 50
  })

  useEffect(() => {

    let style = getComputedStyle(maskRef.current);
    const rootMargin = window.innerHeight - style.top.substring(0, style.top.length - 2)
    setRootMargin(rootMargin);

    const ff = () => {
      // console.log(containerRef.current.getBoundingClientRect())
    };
    window.addEventListener('scroll', ff)


      return () => window.removeEventListener('scroll', ff)
    }, [])


  useEffect(() => {


    }, [])
  

  const x = useSpring(mapped, {
    mass: 1, damping: 10, stiffness: 50
  })
  const y = useSpring(mapped, {
    mass: 0.41,
    damping: 110,
    stiffness: 150,
  })

  return (
    <ProcessContainer ref={containerRef} >

      <ProcessTxt variant='h1' noWrap={true}>My Process</ProcessTxt>


      <ProcessMask ref={maskRef} >
        <ProcessTrack  style={{ x: mapped, background }}   >
          <Card>
            <Typography variant="h3">Discovery Call</Typography>
            <Typography>
              This is the phase where i dive deep into your world and
              get to know you. Before i can properly design your
              good-looking website, i need to understand you,
              you pain-points, and you audience.
            </Typography>

          </Card>
          <Card>
            <Typography variant="h3">Design Phase</Typography>
            <Typography >
              I take what i've learned about you and craft a
              bespoke website that's tailored to meet your
              specific needs, all while accurately representing your
              brand and keeping things aesthetically pleasing and useable
              for you purpose.
            </Typography>
          </Card>
          <Card>
            <Typography variant="h3">Build Phase</Typography>
            <Typography >
              Once you're happy with the designs, i will proceed to building them
              making sure everyting is optimised to follow modern web practices,
              such as speed, security and reliability.
            </Typography>

          </Card>
          <Card>
            <Typography variant="h3">Launch Phase</Typography>
            <Typography>
              After 've completed the build and double cheked everything
              alongside your approval, it's time to launch your
              website. in this phase i will also provide same traning videos
              on how you can add content to your website so you can do it yourself.
            </Typography>

          </Card>
        </ProcessTrack>
      </ProcessMask>
    </ProcessContainer>
  )
}

export default MyProcess
