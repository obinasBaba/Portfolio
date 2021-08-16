import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { gridMultiplayer, heightWidth, spacing } from '../../../styles/mixins'
import {
  motion,
  useAnimation,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { Link, useScrollRestoration } from 'gatsby'
import Headline from '../../../components/Headline'
import lotti from 'lottie-web'
import { useProjectCircles } from '../../../hooks/queries/useProjectCircles'
import ButtonCtrl from '../../../helpers/buttonCtrl'

const ProjectContainer = styled.div`
  max-width: 100%;
  //overflow: hidden;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  //border: thick solid red;
  padding: 2rem 0;
  ${spacing('mb', 8)};
  
  //border: thick solid red;

  .hover-target {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    padding: 4rem;
    border-radius: 100px;
    position: relative;
    //border: thin solid green;
    transform: scale(1.2);

    ${heightWidth('height', 53)};
    ${heightWidth('width', 53)};

    a {
      z-index: 1;
    }

    .btn-border {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      transition: transform 2s ease-out;

      path {
        stroke-width: 4px;
        //transform: scale(1.2);

      }
    }

    .proSec {
      cursor: pointer;
      z-index: 1;
      //border: thin solid crimson;
      ${spacing('p', 2)};
    }
  }
`

const Planet = styled(motion.div)`
  content: '';
  position: absolute;
  left: 10%;
  border-radius: 50%;
  z-index: 110;
  background: linear-gradient(
    36.99deg,
    rgba(1, 1, 18, 0) 27.49%,
    #262147 78.93%
  );

  ${heightWidth('width', 10)};
  ${heightWidth('height', 10)};

  &.planet-two {
    left: initial;
    right: 10%;
    background: linear-gradient(
      37.98deg,
      rgba(16, 8, 74, 0) 16.94%,
      #83a4ff 87.08%
    );

    ${heightWidth('width', 4)};
    ${heightWidth('height', 4)};
    ${gridMultiplayer('right', 10)};
  }
`

const parentVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
}

const Projects = () => {
  const { circle1, circle2 } = useProjectCircles()
  const projectSectionRestoration = useScrollRestoration('project-section')

  const outerRef = useRef(null)
  const txtRef = useRef(null)
  const innerRef = useRef(null)
  const containerRef = useRef(null)

  const moRotate = useMotionValue(0)
  const moRotate2 = useMotionValue(0)

  const controls = useAnimation()

  const config = {
    mass: 1,
    stiffness: 50,
    damping: 20,
  }

  const yBig = useSpring(0, config)
  const xBig = useSpring(0, config)

  const ySmall = useTransform(yBig, y => y / 6)
  const xSmall = useTransform(xBig, x => x / 6)

  const calculateMotionValues = (x, y) => {
    const xPos = (x - window.innerWidth) / 15
    const yPos = (y - window.innerHeight) / 15
    yBig.set(yPos)
    xBig.set(xPos)
  }

  //transform
  useEffect(() => {
    let handler = async e => {
      calculateMotionValues(e.clientX, e.clientY)
      const xPos = (e.x - window.innerWidth / 2) / 50
      // const yPos =  (e.y - window.innerHeight / 2) / 100;
      moRotate.set(xPos)
      moRotate2.set(xPos * -1)
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  //lottie animation
  useEffect(() => {
    if ( moRotate.get() != 0 ) return;

    lotti.loadAnimation({
      container: outerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: circle1.publicURL,
    })

    lotti.loadAnimation({
      container: innerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: circle2.publicURL,
    })
  }, [])

  useEffect(() => {
    const btn = new ButtonCtrl(txtRef.current)
    btn.on('enter', () => {
      controls.start({
        scale: 1.2,
        cursor: 'pointer',
        transition: {
          duration: 0.3,
          ease: 'easeInOut',
        },
      })
    })

    btn.on('leave', () => {
      controls.start({
        scale: 1,
        transition: {
          duration: 0.8,
          ease: 'easeInOut',
        },
      })
    })
  }, [])

  return (
    <motion.div
      id={'proSec'}
      ref={containerRef}
      {...projectSectionRestoration}
      variants={parentVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      data-scroll-section
    >
      <ProjectContainer>
        <Headline title={'Projects'} mb={3} subtitle={'Case Studies'} />

        <Planet style={{ y: yBig, x: xBig }} />

        <Planet className={'planet-two'} style={{ y: ySmall, x: xSmall }} />

        <motion.div className="hover-target">
          <Link
            id="proSec"
            className="proSec"
            ref={txtRef}
            to={'/projects/#one'}
          >
            <motion.div animate={controls}>All Projects(5)</motion.div>
          </Link>

          <motion.div
            ref={outerRef}
            style={{ rotate: moRotate }}
            className="btn-border outer-border"
          />

          <motion.div
            ref={innerRef}
            style={{ rotate: moRotate2 }}
            className="btn-border inner-border"
          />
        </motion.div>
      </ProjectContainer>
    </motion.div>
  )
}

export default Projects
