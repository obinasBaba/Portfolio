import React, { useContext, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import {
  gridMultiplayer,
  largeUp,
  length,
  smallUp,
  spacing,
} from '../../../styles/mixins'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import useOnScreen from '../../../hooks/useOnScreen'
import { AppStateContext } from '../../../contexts/AppStateContext'
import HeadlineTitle from '../../../components/Headline'
import RotationCircleText from './RotationCircleText'

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
  display: none;
  
  ${largeUp(css`
    left: 6%;
    bottom: 25%;
    display: initial;
  `)};

`

const ScrollPlanet2 = styled.div`
  position: absolute;
  top: 50%;
  right: 30%;
  display: none;

  ${largeUp(css`
    display: block;
    top: 40%;
    right: 10%;
  `)};
`


const Projects = () => {
  const {
     setRegisteredScrollPos
  } = useContext( AppStateContext )

  const containerRef = useRef(null)

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


      <RotationCircleText inview={inView} />

    </ProjectContainer>
  )
}

export default Projects
