import React, {useEffect, useRef} from 'react'
import { Link } from 'gatsby'
import {
  List,
  ListItem,
  OthersContainer,
  Title,
} from './components'
import { Typography } from '@material-ui/core'
import {motionValue, motion, useAnimation, useMotionValue} from 'framer-motion'

import one from './img/2.jpg'
import two from './img/1.jpg'
import three from './img/4.jpg'
import four from './img/5.jpg'
import {useIntersection} from 'react-use'

const svgVariant = {}

const imgVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
  },
  exit: {},

  hover(c){
    console.log('hover', c)
    return{
      opacity: c.hover() ? 1 : 0,
    }
  },

  hoverEnd: {
    opacity: 0,
    transition: {
      duration: .5,
      ease: 'easeOut'
    }
  }
}

const listItemVariant = {
  initial: {},
  animate: {},
  exit: {},
  hover(c){

  },
  hoverEnd: {}
}

const listVariant = {
  initial: {},
  animate: {},
  exit: {},
  hover: {},
  hoverEnd: {}
}



const Others = ({ auth, kklLuzern, udemy, active }) => {

  const dmScale = useRef( 0);
  const current = useRef( -1);
  const containerRef = useRef(null)
  const feDisplacementMapEl = useRef(null)
  const svgRef = useRef(null)
  const svgRect = useRef({width: 0, height: 0})
  const mousePos = useRef({x: window.innerHeight/2, y: window.innerWidth/2})
  const lastMousePos = useRef({
    translation: { x: window.innerWidth/2, y: window.innerHeight/2},
    displacement: { x: 0, y: 0 },
  })

  const intersection = useIntersection(containerRef, {
    threshold: 1,
  });

  // let winsize;
  // const calcWinsize = () => winsize = {width: window.innerWidth, height: window.innerHeight};
  // calcWinsize();

  const titles = ['Watchbox', 'Insurance Landing-page', 'Following Filmore', 'Kayam' ]
  const svgController = useAnimation();
  const itemController = useAnimation();
  const hoverIndex = useMotionValue(-1);



  useEffect(() => {

    // window.addEventListener('resize', calcWinsize);

    feDisplacementMapEl.current = svgRef.current.querySelector('feDisplacementMap')
    svgRect.current = svgRef.current.getBoundingClientRect()

    window.addEventListener('mousemove', ev => {


      if ( mousePos.current )
        mousePos.current = getMousePos(ev)
    });

    track();

    }, [intersection])

  const lerp = (a,b,n) => (1 - n) * a + n * b;

  const distance = (x1,x2,y1,y2) => {
    let a = x1 - x2;
    let b = y1 - y2;
    return Math.hypot(a,b);
  };


  const getMousePos = (e) => {

    return { x : e.clientX, y : e.clientY }
  }


  const track = () => {
    lastMousePos.current.translation.x =
      lerp(lastMousePos.current.translation.x, mousePos.current.x, 0.1);

    lastMousePos.current.translation.y =
      lerp(lastMousePos.current.translation.y, mousePos.current.y, 0.1);

    // console.log('x:', lastMousePos.current.translation.x, 'y: ', lastMousePos.current.translation.y)

    svgRef.current.style.transform =
      `translateX(${(lastMousePos.current.translation.x-window.innerWidth/2 )}px)
       translateY(${lastMousePos.current.translation.y -window.innerHeight/2}px)`;

    // console.log('x:', svgRef.current.getBoundingClientRect().x, 'y: ',
    //   svgRef.current.getBoundingClientRect().y)



    // Scale goes from 0 to 100 for mouseDistance values between 0 to 100
    lastMousePos.current.displacement.x =
      lerp(lastMousePos.current.displacement.x, mousePos.current.x, 0.1);

    lastMousePos.current.displacement.y =
      lerp(lastMousePos.current.displacement.y, mousePos.current.y, 0.1);

    const mouseDistance =
      distance(lastMousePos.current.displacement.x, mousePos.current.x,
        lastMousePos.current.displacement.y, mousePos.current.y);

    dmScale.current = Math.min(mouseDistance, 100);
    feDisplacementMapEl.current.scale.baseVal = dmScale.current;

    // if ( intersection && intersection.isIntersecting )
      requestAnimationFrame(() => track());
  }

  return (
    <>

      <OthersContainer ref={containerRef}>

        <motion.svg ref={svgRef} className="distort" width="350" height="450" viewBox="0 0 350 450"
                    initial='initial'
                    animate={svgController}
                    exit='exit'
        >
          <filter id="distortionFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.01 0.003"
                          numOctaves="5" seed="2" stitchTiles="noStitch" x="0%"
                          y="0%" width="100%" height="100%" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0"
                               xChannelSelector="R" yChannelSelector="B" x="0%"
                               y="0%" width="100%" height="100%"
                               filterUnits="userSpaceOnUse" />
          </filter>
          <g filter="url(#distortionFilter)">
            <motion.image custom={{ hover: () =>  hoverIndex.get() === 0 }}
                          variants={imgVariants}  className="distort__img" x="50" y="50" xlinkHref={one} height="350" width="250"  />

            <motion.image custom={{ hover: () => hoverIndex.get() === 1 }}
                          variants={imgVariants} className="distort__img" x="50" y="50" xlinkHref={two} height="350" width="250" />

            <motion.image custom={{ hover: () => hoverIndex.get() === 2 }}
                          variants={imgVariants} className="distort__img" x="50" y="50" xlinkHref={three} height="350" width="250" />

            <motion.image custom={{ hover: () => hoverIndex.get() === 3 }}
                          variants={imgVariants} className="distort__img" x="50" y="50" xlinkHref={four} height="350" width="250" />
          </g>
        </motion.svg>


        <Title variant={'h1'} align="center">
          And  others
        </Title>

        <List variants={{}}
              initial='initial'
              animate='animate'
              exit='exit'
              whileHover={'hover'}
              onHoverEnd={(  ) => {

                svgController.start('hoverEnd')
              }}
        >

          <ListItem variants={listItemVariant} custom={0}
                    onHoverStart={(  ) => {
                      hoverIndex.set(0)
                      svgController.start('hover')
                    }}
          >
            <motion.h1 variant={'h2'} hover > Most </motion.h1>
          </ListItem>

          <ListItem variants={listItemVariant} custom={0} animate={itemController}
                    onHoverStart={(  ) => {
                      hoverIndex.set(1)
                      svgController.start('hover')
                    }}
          >
            <motion.h1 variant={'h2'}> Recent </motion.h1>
          </ListItem>

          <ListItem variants={listItemVariant} custom={0} animate={itemController}
                    onHoverStart={(  ) => {
                      hoverIndex.set(2)
                      svgController.start('hover')
                    }}
          >
            <motion.h1 variant={'h2'}> Most </motion.h1>
          </ListItem>

          <ListItem variants={listItemVariant} custom={0} animate={itemController}
                    onHoverStart={(  ) => {
                      hoverIndex.set(3)
                      svgController.start('hover')
                    }}
          >
            <motion.h1 variant={'h2'}> Bruises </motion.h1>
          </ListItem>

        </List>
      </OthersContainer>

    </>
  )
}

export default Others
