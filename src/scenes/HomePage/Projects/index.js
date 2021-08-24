import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import {
  gridMultiplayer,
  heightWidth,
  spacing,
  text,
} from '../../../styles/mixins'
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
import useOnScreen from '../../../hooks/useOnScreen'

const ProjectContainer = styled.div`
  max-width: 100%;
  min-height: 100vh;
  //overflow: hidden;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  //border: thick solid red;
  padding: 2rem 0;
  ${spacing('pt', 22)};
  ${spacing('mb', 3)};

  .allProjects-txt {
    ${text(1.1)};
  }

  .hover-target {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    padding: 4rem;
    border-radius: 100px;
    position: relative;
    //border: thin solid green;

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

  ${heightWidth('width', 20)};
  ${heightWidth('height', 20)};

  &.planet-two {
    left: initial;
    right: 10%;
    background: linear-gradient(
      37.98deg,
      rgba(16, 8, 74, 0) 16.94%,
      #83a4ff 87.08%
    );

    ${heightWidth('width', 8)};
    ${heightWidth('height', 8)};
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
      duration: 3,
    },
  },
}

const Projects = () => {
  const { circle1, circle2 } = useProjectCircles()
  const projectSectionRestoration = useScrollRestoration('project-section')

  const circle1Ref = useRef(null)
  const txtRef = useRef(null)
  const circle2Ref = useRef(null)
  const containerRef = useRef(null)
  let Lotti = useRef([])

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

  const ySmall = useTransform(yBig, y => y / 4)
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

    if ( inView )
      window.addEventListener('mousemove', handler)
    else
      window.removeEventListener('mousemove', handler)

    return () => window.removeEventListener('mousemove', handler)
  }, [inView])

  //lottie animation
  useEffect(() => {
    // return;
    // if (moRotate.get() !== 0) return

    Lotti.current = [];
    lotti.destroy()

    Lotti.current.push(
      lotti.loadAnimation({
        container: circle1Ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: circle1.publicURL,
      })
    )

    Lotti.current.push(
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
    console.log('inview :', inView, Lotti.current)
    if ( Lotti[0] )
      return;

    if (inView) Lotti.current.forEach(lotti => {
      lotti.play()
    })
    else Lotti.current.forEach(lotti => {
      lotti.stop()
    })
  }, [inView])

  return (
    <motion.section
      id="proSec"
      data-scroll-section
      {...projectSectionRestoration}
      variants={parentVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      ref={containerRef}
    >
      <ProjectContainer>
        <Headline title={'Projects'} mb={3} subtitle={'Case Studies'} />

        <Planet style={{ y: yBig, x: xBig }} />

        <Planet className="planet-two" style={{ y: ySmall, x: xSmall }} />

        <motion.div className="hover-target">
          <Link
            id="proSec"
            data-pointer
            data-magnet
            data-tooltip
            data-tooltip-text="Let me show you how cool i am!"
            className="proSec"
            ref={txtRef}
            to={'/projects/#one'}
          >
            <motion.div className="allProjects-txt  hover_target">
              All Projects(5)
            </motion.div>
          </Link>

          <motion.div
            ref={circle1Ref}
            style={{ rotate: moRotate }}
            className="btn-border outer-border"
          />

          <motion.div
            ref={circle2Ref}
            style={{ rotate: moRotate2 }}
            className="btn-border inner-border"
          />
        </motion.div>
      </ProjectContainer>
    </motion.section>
  )
}

export default Projects
