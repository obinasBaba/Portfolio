import React, { useContext, useEffect, useRef } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

import one from './img/one.png';
import two from './img/two.png';
import three from './img/three.png';
import four from './img/four.png';

import Item from './components/Item';
import { lerp } from '@helpers/utils';
import { MotionValueContext } from '@contexts/MotionStateWrapper';
import data from './data';
import * as s from './others.module.scss';
import { Typography } from '@material-ui/core';
import { useMotionBreakPoint } from '@contexts/BreakPoint';

const imgVariants = {
  initial: {
    opacity: 0,
  },
  animate: {},
  exit: {},

  hover (c) {
    return {
      opacity: c.hovering() ? 1 : 0,
      scale: c.hovering() ? 1 : 0.9,
    };
  },

  hoverEnd: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const containerVariants = {};

const transition = {
  ease: [0.6, 0.01, 0, 0.9],
  duration: 1.5,

  // repeat: Infinity,
  // repeatType: 'mirror',
};

const titleVariants = {
  initial (args) {
    console.log('args initial:', args);

    return {
      opacity: 0,
      x: '-100%',
    };
  },

  animate (arg) {
    console.log('args animate: ', arg);
  },

  animateFp (args) {

    console.log('args animFP: ', args?.breakpoint?.get());

    return {
      opacity: 1,
      x: args?.breakpoint?.get()?.xlUp ? '0' : 0,
      transition: {
        opacity: {
          ...transition,
          duration: 2.5,
        },
        x: {
          ...transition,
          ease: [0.6, 0.01, 0, 0.9],
          duration: 2.5,
        },
      },
    };
  },

  exitFp: {
    opacity: 0,
    x: '-100%',
  },
};

let x = 0;
let y = 0;
let dx = 0;
let dy = 0;

function Others ({ auth, kklLuzern, udemy, active }) {
  const cancelId = useRef(null);
  const dmScale = useRef(0);
  const current = useRef(-1);
  const containerRef = useRef(null);
  const feDisplacementMapEl = useRef(null);
  const svgRef = useRef(null);
  const svgRect = useRef({ width: 0, height: 0 });
  const { breakpoint } = useMotionBreakPoint();

  const {
    mouse: { mouseY, mouseX },
  } = useContext(MotionValueContext);

  const svgController = useAnimation();
  const hoverIndex = useMotionValue(-1);

  useEffect(() => {
    feDisplacementMapEl.current =
      svgRef.current.querySelector('feDisplacementMap');
    svgRect.current = svgRef.current.getBoundingClientRect();
  }, []);

  useEffect(() => {

    // track();


    return () => {
      // cancelAnimationFrame(cancelId.current);
    }
  })

  const track = () => {
    if (!svgRef.current) return;

    x = lerp(x, mouseX.get(), 0.1);

    y = lerp(y, mouseY.get(), 0.1);

    svgRef.current.style.transform = `translateX(${x - window.innerWidth / 2.5}px)
       translateY(${y - window.innerHeight / 2}px)`;
    /*

    // Scale goes from 0 to 100 for mouseDistance values between 0 to 100
    dx = lerp(dx, mouseX.get(), 0.1);

    dy = lerp(dy, mouseY.get(), 0.1);
    // x1,x2,y1,y2

    const mouseDistance = distance(dx, dy, mouseX.get(), mouseY.get());

    dmScale.current = Math.min(mouseDistance, 100);
    feDisplacementMapEl.current.scale.baseVal = dmScale.current;*/

    // if ( intersection && intersection.isIntersecting )
    cancelId.current = requestAnimationFrame(() => track());
  };

  return (
    <motion.div className={s.container}
                ref={containerRef}
                variants={containerVariants}
    >
      <motion.div variants={titleVariants} transition={transition}
                  custom={{ breakpoint }}

      >
        <Typography className={s.title} variant='h2'>And Others</Typography>
      </motion.div>

      <motion.ul
        className={s.list}
        variants={{}}
        onHoverEnd={() => {
          svgController.start('hoverEnd');
        }}
      >
        <motion.svg
          ref={svgRef}
          className='distort'
          width='450'
          height='550'
          viewBox='50 111 250 250'
          initial='initial'
          animate={svgController}
          exit='exit'
          style={{
            borderRadius: '1rem',
            overflow: 'hidden',
            // position: 'absolute',
            // border: '2px solid blue'
          }}

          onViewportEnter={() => {
            track();
          }}

          onViewportLeave={() => {
            cancelAnimationFrame(cancelId.current);
          }}
        >
          <filter id='distortionFilter'>
            <feTurbulence
              type='fractalNoise'
              baseFrequency='0.01 0.003'
              numOctaves='5'
              seed='2'
              stitchTiles='noStitch'
              x='0%'
              y='0%'
              width='100%'
              height='100%'
              result='noise'
            />
            <feDisplacementMap
              in='SourceGraphic'
              in2='noise'
              scale='0'
              xChannelSelector='R'
              yChannelSelector='B'
              x='0%'
              y='0%'
              width='100%'
              height='100%'
              filterUnits='userSpaceOnUse'
            />
          </filter>
          <g>
            <motion.image
              custom={{ hovering: () => hoverIndex.get() === 0 }}
              variants={imgVariants}
              className={s.distort__img}
              x='50'
              y='50'
              xlinkHref={one}
            />

            <motion.image
              custom={{ hovering: () => hoverIndex.get() === 1 }}
              variants={imgVariants}
              className={s.distort__img}
              x='50'
              y='50'
              xlinkHref={two}

            />

            <motion.image
              custom={{ hovering: () => hoverIndex.get() === 2 }}
              variants={imgVariants}
              className={s.distort__img}
              x='50'
              y='50'
              xlinkHref={three}
              // filter='url(#distortionFilter)'

            />

            <motion.image
              custom={{ hovering: () => hoverIndex.get() === 3 }}
              variants={imgVariants}
              className={s.distort__img}
              x='50'svgController
              y='50'
              xlinkHref={four}
              // filter='url(#distortionFilter)'

            />
          </g>
        </motion.svg>


        {data.map(({ title, tags, desc, link }, idx) => {
          const onHoverStart = () => {
            hoverIndex.set(idx);
            svgController.start('hover');
          };

          const onHoverEnd = () => {
            svgController.start('hoverEnd');
          };

          return (
            <Item
              title={title}
              desc={desc}
              tags={tags}
              key={idx}
              idx={idx}
              link={link}
              onHoverStart={onHoverStart}
              onHoverEnd={onHoverEnd}
              // customData={{ hovering: () => hoverIndex.get() === idx }}
            />
          );
        })}
      </motion.ul>
    </motion.div>
  );
}

export default Others;
