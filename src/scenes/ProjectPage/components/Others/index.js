// noinspection JSIgnoredPromiseFromCall

import React, { useContext, useEffect, useRef } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { List, OthersContainer, Title } from "./components";

import one from "./img/img.png";
import two from "./img/img_4.png";
import three from "./img/img_5.png";
import four from "./img/img_6.png";
import Item from "./components/Item";
import { lerp } from "../../../../helpers/utils";
import { MotionValueContext } from "../../../../contexts/MotionStateWrapper";
import data from "./data";

const imgVariants = {
  initial: {
    opacity: 0,
  },
  animate: {},
  exit: {},

  hover(c) {
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
      ease: "easeOut",
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
  initial: {
    opacity: 0,
    x: "-30%",
  },

  animateFp: {
    opacity: 1,
    x: "30%",
    transition: {
      opacity: {
        ...transition,
        duration: 2,
      },
      x: {
        ...transition,
        ease: [0.6, 0.01, 0, 0.9],
        duration: 1.5,
      },
    },
  },

  exitFp: {
    opacity: 0,
    x: "-30%",
  },
};

let x = 0;
let y = 0;
const dx = 0;
const dy = 0;

function Others({ auth, kklLuzern, udemy, active }) {
  const cancelId = useRef(null);
  const dmScale = useRef(0);
  const current = useRef(-1);
  const containerRef = useRef(null);
  const feDisplacementMapEl = useRef(null);
  const svgRef = useRef(null);
  const svgRect = useRef({ width: 0, height: 0 });

  const {
    mouse: { mouseY, mouseX },
  } = useContext(MotionValueContext);

  const svgController = useAnimation();
  const hoverIndex = useMotionValue(-1);

  useEffect(() => {
    feDisplacementMapEl.current =
      svgRef.current.querySelector("feDisplacementMap");
    svgRect.current = svgRef.current.getBoundingClientRect();
  }, []);

  const track = () => {
    if (!svgRef.current) return;

    x = lerp(x, mouseX.get(), 0.1);

    y = lerp(y, mouseY.get(), 0.1);

    svgRef.current.style.transform = `translateX(${x - window.innerWidth / 2}px)
       translateY(${y - window.innerHeight / 2}px)`;

    /* // Scale goes from 0 to 100 for mouseDistance values between 0 to 100
    dx = lerp( dx, mouseX.get(), 0.1 );

    dy = lerp( dy, mouseY.get(), 0.1 );
    // x1,x2,y1,y2

    const mouseDistance = distance( dx, dy, mouseX.get(), mouseY.get() );

    dmScale.current = Math.min( mouseDistance, 100 );
    feDisplacementMapEl.current.scale.baseVal = dmScale.current; */

    // if ( intersection && intersection.isIntersecting )
    cancelId.current = requestAnimationFrame(() => track());
  };

  return (
    <OthersContainer ref={containerRef} variants={containerVariants}>
      <motion.svg
        ref={svgRef}
        className="distort"
        width="350"
        height="450"
        viewBox="0 0 350 450"
        initial="initial"
        animate={svgController}
        exit="exit"
        onViewportEnter={() => {
          track();
        }}
        onViewportLeave={() => {
          cancelAnimationFrame(cancelId.current);
        }}
      >
        <filter id="distortionFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.003"
            numOctaves="5"
            seed="2"
            stitchTiles="noStitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="B"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            filterUnits="userSpaceOnUse"
          />
        </filter>
        <g>
          <motion.image
            custom={{ hovering: () => hoverIndex.get() === 0 }}
            variants={imgVariants}
            className="distort__img"
            x="50"
            y="50"
            xlinkHref={one}

            // height="350"
            // width="250"
          />

          <motion.image
            custom={{ hovering: () => hoverIndex.get() === 1 }}
            variants={imgVariants}
            className="distort__img"
            x="50"
            y="50"
            xlinkHref={two}
            // height="350"
            // width="250"
          />

          <motion.image
            custom={{ hovering: () => hoverIndex.get() === 2 }}
            variants={imgVariants}
            className="distort__img"
            x="50"
            y="50"
            xlinkHref={three}
            // height="350"
            // width="250"
          />

          <motion.image
            custom={{ hovering: () => hoverIndex.get() === 3 }}
            variants={imgVariants}
            className="distort__img"
            x="50"
            y="50"
            xlinkHref={four}
            // height="350"
            // width="250"
          />
        </g>
      </motion.svg>

      <motion.div variants={titleVariants} transition={transition}>
        <Title variant="h2">And Others</Title>
      </motion.div>

      <List
        variants={{}}
        onHoverEnd={() => {
          svgController.start("hoverEnd");
        }}
      >
        {data.map(({ title, tags, desc }, idx) => {
          const onHoverStart = () => {
            hoverIndex.set(idx);
            svgController.start("hover");
          };

          return (
            <Item
              title={title}
              desc={desc}
              tags={tags}
              key={desc}
              idx={idx}
              onHoverStart={onHoverStart}
              // customData={{ hovering: () => hoverIndex.get() === idx }}
            />
          );
        })}
      </List>
    </OthersContainer>
  );
}

export default Others;
