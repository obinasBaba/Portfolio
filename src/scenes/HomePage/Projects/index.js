import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { gridMultiplayer, heightWidth, spacing } from '../../../styles/mixins'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {Link, navigate} from 'gatsby'
import Headline from '../../../components/Headline'
import lotti from 'lottie-web'
import { Typography } from '@material-ui/core'
import { useProjectCircles } from '../../../hooks/queries/useProjectCircles'
import {useScrollRestoration} from 'gatsby'

const ProjectContainer = styled.div`
  max-width: 100%;
  overflow: hidden;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  //border: thick solid red;
  padding: 2rem 0;
  ${spacing('mb', 8)};

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
    
    a{
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
      }
    }
  }
`

const Planet = styled( motion.div )`
  content: '';
  position: absolute;
  left: 10%;
  border-radius: 50%;
  background: linear-gradient(
          36.99deg,
          rgba(1, 1, 18, 0) 27.49%,
          #262147 78.93%
  );

  ${ heightWidth('width', 10) };
  ${ heightWidth('height', 10) };
  
  
  &.planet-two{
    left: initial;
    right: 10%;
    background: linear-gradient(
            37.98deg,
            rgba(16, 8, 74, 0) 16.94%,
            #83a4ff 87.08%
    );
    
    ${ heightWidth('width', 4) };
    ${ heightWidth('height', 4) };
    ${ gridMultiplayer('right', 10) };
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
      duration: 1.5,
    }
  }
}


const Projects = () => {

  const { circle1, circle2 } = useProjectCircles();
  const projectSectionRestoration = useScrollRestoration('project-section')


  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const containerRef = useRef(null);


  const moRotate = useMotionValue(0);
  const moRotate2 = useMotionValue(0);

  const config = {
    mass: 1,
    stiffness: 50,
    damping: 20,
  }

  const yBig = useSpring( 0, config);
  const xBig = useSpring(0, config);

  const ySmall = useTransform(yBig, y => y / 5)
  const xSmall = useTransform(xBig, x => x / 5)

  const calc = (x, y) => {
    const xPos =  (x - window.innerWidth ) / 18;
    const yPos =  (y - window.innerHeight ) / 18;
    yBig.set(yPos);
    xBig.set(xPos);
  };


  //transform
  useEffect(() => {
    let handler = async (e) => {
      calc(e.clientX, e.clientY);
      const xPos =  (e.x - window.innerWidth / 2) / 50;
      // const yPos =  (e.y - window.innerHeight / 2) / 100;
      moRotate.set( xPos )
      moRotate2.set( xPos * -1 )
    };
    window.addEventListener('mousemove', handler )
    return () => window.removeEventListener('mousemove', handler)

  }, [])


  //lottie animation
  useEffect(() => {

    lotti.loadAnimation({
      container: outerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: circle1.publicURL
    })

    lotti.loadAnimation({
      container: innerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: circle2.publicURL
    })
    }, [])
  

  return (
    <motion.div
      id={'proSec'}
      ref={containerRef}

      variants={parentVariant}
      initial='initial'
      animate='animate'
      exit='exit'
    >

      <ProjectContainer>

        <Headline title={'Projects'} mb={3} subtitle={'Case Studies'}  />

        <Planet style={{ y: yBig, x: xBig }}  />

        <Planet className={'planet-two'}  style={{ y: ySmall, x: xSmall }} />

        <motion.div  className='hover-target'>

          <Link id='proSec'  to={'/projects/#one'}>All Projects(5)</Link>


          {/*<Typography variant='subtitle1' className='all-project' > </Typography>*/}


          <motion.div ref={outerRef}
                      style={{rotate: moRotate}}

                      className="btn-border outer-border" />

          <motion.div ref={innerRef}
                      style={ { rotate: moRotate2 } }
                      className="btn-border inner-border" />


        </motion.div>

      </ProjectContainer>

    </motion.div>
  )
}

export default Projects
