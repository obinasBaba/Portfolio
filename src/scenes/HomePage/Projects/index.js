import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import {gridMultiplayer, heightWidth, spacing} from '../../../styles/mixins'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { getMousePos } from '../../../helpers/utils'
import { navigate } from 'gatsby'
import Headline from '../../../components/Headline'
import lotti from 'lottie-web';
import c1 from './circle.json';
import c2 from './circle2.json';
import {Typography} from '@material-ui/core'

const ProjectContainer = styled.div`
  max-width: 100%;
  overflow: hidden;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  //border: thick solid red;
  padding: 2rem 0;
  ${ spacing( 'mb', 8 ) };

  &::before {
    content: '';
    position: absolute;
    border-radius: 50%;
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
  
  &::after {
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
  }

  .hover-target {
    cursor: pointer;
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
    
    .btn-border {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      
      p{
        //position: absolute;
        //z-index: 99999;
      }
      
      path{
        stroke-width: 4px;
      }
      
    }
    
  }
`

const top = {}


const Projects = () => {

  const hoverValue = useMotionValue(0);
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  const ref = useRef(null);
  const xPos = useMotionValue(0);
  const yPos = useMotionValue(0);

  const x = useSpring(xPos, {
    mass: .7,  damping: 10, stiffness: 50,
    // restSpeed: 11.5,
  })

  const y = useSpring(yPos, {
    mass: 1, damping: 10, stiffness: 50,
  })

  const x2 = useSpring(xPos, {
    mass: 2.2,  damping: 10, stiffness: 30,
    // restSpeed: 11.5,
  })

  const y2 = useSpring(yPos, {
    mass: 2.4, damping: 12, stiffness: 30,
    //    restDelta: 1,
  })

  let rect;

  let mouse = {x: 0, y: 0};
  let mouseMoveHandler = (ev) => {
    // console.log('event: ', ev.clientX, ev.clientY)

    if ( hoverValue.get() === 1 ){
      mouse = getMousePos(ev);
      let x = (mouse.x + window.scrollX - (rect.left + rect.width/2)) * .4;
      let y = (mouse.y  - (  rect.height / 2));
      y = y < 0 ? y * .7 : y * .25;

      xPos.set(x)
      yPos.set(y);
    }
    // console.log(`client: x :${mouse.x} - y: ${mouse.y}`, '----- x: ',x , 'y: ', y)
  }

  useEffect(() => {

    rect = ref.current.getBoundingClientRect();
    window.addEventListener('mousemove', mouseMoveHandler)

    return () => window.removeEventListener('mousemove', mouseMoveHandler)

  }, []);

  useEffect(() => {

    lotti.loadAnimation({
      container: outerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: c1
    })

    lotti.loadAnimation({
      container: innerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: c2
    })


    }, [])
  

  return (
    <motion.div
      id={'proSec'}
    >

      <ProjectContainer>

        <Headline title={'Projects'}
                  mb={3}
                  subtitle={'Case Studies'}  />

        <motion.div

          ref={ref}
          variants={top}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className='hover-target'
          onHoverStart={() => {
            hoverValue.set(1)
          }}
          onHoverEnd={() => {
            hoverValue.set(0)
            xPos.set(0)
            yPos.set(0)

          }}
        >

          <Typography variant='body1' className='all-project' > All Projects(5)</Typography>


          <motion.div ref={outerRef}
                        className="btn-border outer-border"
                        // style={{ x: x2, y: y2 }}

            />


            <motion.div ref={innerRef}
                        className="btn-border inner-border"
                        // style={{ x, y }}
                        onClick={ () => navigate('/projects#one') }

            >

            </motion.div>

        </motion.div>

      </ProjectContainer>

    </motion.div>
  )
}

export default Projects
