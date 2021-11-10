import React, { useContext, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import {
  gridMultiplayer,
  largeUp,
  length,
  smallUp,
  spacing,
  text,
} from '../../../styles/mixins'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Link } from 'gatsby'
import lotti from 'lottie-web'
import { useProjectCircles } from '../../../hooks/queries/useProjectCircles'
import useOnScreen from '../../../hooks/useOnScreen'
import { AppStateContext } from '../../../contexts/AppStateContext'
import { Typography } from '@material-ui/core'
import HeadlineTitle from "../../../components/Headline";
import RotationCircleText from "./RotationCircleText";

const parentVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}


const ProjectContainer = styled(motion.section)`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  flex-flow: column;
  place-items: center;
  place-content: center;
  
  align-items: center;
  justify-content: center;
  max-width: 100%;
  min-height: 100vh;
  //border: thick solid red;
  //padding: 2rem 0;
  z-index: 11;
  
  ${spacing('pt', 26)};
  ${spacing('pb', 11)};
`

const Planet = styled(motion.div)`
 
  position: absolute;
  border-radius: 50%;
  z-index: 110;
  background: linear-gradient(
    36.99deg,
    rgba(1, 1, 18, 0) 27.49%,
    #262147 78.93%
  );

  ${length('width', 20)};
  ${length('height', 20)};

  &.planet-right {
    background: linear-gradient(
      37.98deg,
      rgba(16, 8, 74, 0) 16.94%,
      #83a4ff 87.08%
    );

    ${length('width', 8)};
    ${length('height', 8)};
    ${gridMultiplayer('right', 10)};
  }
`

const ScrollPlanet = styled.div`
  position: absolute;
  left: -12%;
  bottom: 30%;
  
  ${largeUp(css`
    left: 6%;
    bottom: 25%;
  `)};

`

const ScrollPlanet2 = styled.div`
  position: absolute;
  top: 50%;
  right: 30%;

  ${smallUp(css`
    top: 40%;
    right: 10%;
  `)};
`

const LottiContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  padding: 4rem;
  border-radius: 100px;
  //border: thin solid green;
  
  grid-row: 2 / 3;
  grid-column: 1/ 1;



  ${length('height', 63)};
  ${length('width', 63)};

  .lotti {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: transform 2s ease-out;

    path {
      stroke-width: 4px;
    }
  }

  .to-projects {
    //no need to make it relative for z-index to work b/c of the dynamic transform property
    z-index: 1; 
    // ${text(1.1)};
    ${spacing('p', 2)};
    
    & > :first-child {
      font-weight: bolder;
      -webkit-text-stroke: 2px #5d6c7b;
      color: transparent;
      font-family: Elianto-Regular;
    }
  }
`

const Projects = () => {
  const { circle1, circle2 } = useProjectCircles()
  const {
     setRegisteredScrollPos
  } = useContext( AppStateContext )

  const circle1Ref = useRef(null)
  const circle2Ref = useRef(null)
  const containerRef = useRef(null)
  let lottiRef = useRef([])

  const moRotate = useMotionValue(0)
  const moRotate2 = useMotionValue(0)

  const config = {
    mass: 1,
    stiffness: 50,
    damping: 20,
  }

  const inView = useOnScreen(containerRef, 0)

  const yBig = useSpring(0, config)
  const xBig = useSpring(0, config)

  const ySmall = useTransform(yBig, y => y / 6)
  const xSmall = useTransform(xBig, x => x / 4)

  const calculateMotionValues = (x, y) => {
    const xPos = (x - window.innerWidth) / 15
    const yPos = (y - window.innerHeight) / 15
    yBig.set(yPos)
    xBig.set(xPos)
  }

  let handler = async e => {
    calculateMotionValues(e.clientX, e.clientY)
    const xPos = (e.x - window.innerWidth / 2) / 50
    // const yPos =  (e.y - window.innerHeight / 2) / 100;
    moRotate.set(xPos)
    moRotate2.set(xPos * -1)
  }

  //transform
  useEffect(() => {
    // return;

    // if (inView) window.addEventListener('mousemove', handler)
    // else window.removeEventListener('mousemove', handler)
    window.addEventListener('mousemove', handler)

    return () => window.removeEventListener('mousemove', handler)
  }, [inView])

  //lottie animation
  useEffect(() => {
    // return;
    // if (moRotate.get() !== 0) return

    lottiRef.current = []
    lotti.destroy()

    lottiRef.current.push(
      lotti.loadAnimation({
        container: circle1Ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: circle1.publicURL,
      })
    )

    lottiRef.current.push(
      lotti.loadAnimation({
        container: circle2Ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: circle2.publicURL,
      })
    )
  }, [])

  useEffect(() => {
    // console.log('inview :', inView, Lotti.current)
    if (lottiRef[0]) return

    if (inView)
      lottiRef.current.forEach(lotti => {
        lotti.play()
      })
    else
      lottiRef.current.forEach(lotti => {
        lotti.pause()
      })
  }, [inView])

  return (
    <ProjectContainer
      id="projects"
      data-scroll-section
      variants={parentVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      ref={containerRef}
    >
      <HeadlineTitle title={'Projects'} mb={3} subtitle={'Case Studies'} />

      <ScrollPlanet data-scroll
                    // data-scroll-trigger='#projects'
                    data-scroll-speed='-3'>
        <Planet className='planet-left' style={{ y: yBig, x: xBig }} />
      </ScrollPlanet>

      <ScrollPlanet2 data-scroll
                     // data-scroll-trigger='#projects'
                     data-scroll-speed='-6'>
        <Planet className="planet-right" style={{ y: ySmall, x: xSmall }} />
      </ScrollPlanet2>

      {/*<LottiContainer >

        <motion.div
          ref={circle1Ref}
          style={{ rotate: moRotate }}
          className="lotti lotti-1"
        />

        <motion.div
          ref={circle2Ref}
          style={{ rotate: moRotate2 }}
          className="lotti lotti-2"
        />
      </LottiContainer>*/}

      <RotationCircleText />

    </ProjectContainer>
  )
}

export default Projects
