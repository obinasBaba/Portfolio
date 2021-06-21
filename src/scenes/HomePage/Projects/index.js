import React, { useEffect, useRef } from 'react'
import 'fullpage.js/vendors/scrolloverflow'
import styled from 'styled-components'
import {gridMultiplayer, heightWidth, spacing} from '../../../styles/mixins'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { getMousePos } from '../../../helpers/utils'
import { navigate, useScrollRestoration } from 'gatsby'
import Headline from '../../../components/Headline'

const ProjectContainer = styled.div`
  max-width: 100%;
  overflow: hidden;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  //border: thin solid red;
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
    padding: 0;
    border-radius: 100px;
    position: relative;
    //border: thin solid green;

    ${heightWidth('height', 50)};
    ${heightWidth('width', 75)};
    
    .btn-border {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 250px;
      width: 250px;
      //border: 2px solid #02021e;
      border-radius: 50%;
      background: linear-gradient( to top left, red, yellow );

      box-shadow: 70px 120px 150px -30px rgba(2, 2, 30, 0.6);
      
      &:last-child{
        background: linear-gradient(
                258.52deg,
                  #3719ca -132.34%,
                rgba(55, 25, 202, 0) 22.57%
        ),
        linear-gradient(
                283.68deg,
                rgba(235, 174, 149, 0) 45.54%,
                rgba(235, 174, 149, 0.19) 130.68%
        ),
        linear-gradient(3.27deg, #02021e 13.68%, #262147 142.62%);
      }

    }
    
  }

  .cursor {
    display: none;
  }

  @media (any-pointer: fine) {
    .cursor {
      position: fixed;
      top: 0;
      left: 0;
      display: block;
      pointer-events: none;
    }

    .cursor__inner {
      fill: var(--cursor-fill);
      stroke: var(--cursor-stroke);
      stroke-width: var(--cursor-stroke-width);
    }

    .credits {
      padding-left: 25vw;
    }
  }
`

const top = {}


const Projects = () => {

  const magnetRestoration = useScrollRestoration('magnet');


  const hoverValue = useMotionValue(0);


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

  }, [])

  return (
    <motion.div
      id={'proSec'}
      {...magnetRestoration }
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
          {/*<Link to={'/projects'}>*/}
            <motion.div className="btn-border outer-border"
                        style={{ x: x2, y: y2 }}

            />


            <motion.div className="btn-border inner-border"
                        style={{ x, y }}
                        onClick={ () => navigate('/projects') }

            >
              All Projects(12)
            </motion.div>
          {/*</Link>*/}

        </motion.div>

      </ProjectContainer>

    </motion.div>
  )
}

export default Projects
