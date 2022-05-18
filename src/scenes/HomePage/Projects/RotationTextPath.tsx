import React, { useRef } from "react";
import styled, { css } from "styled-components";
import { motion, useAnimation, useMotionTemplate, Variants } from "framer-motion";
import { Link } from "gatsby";
import useRotation from "./useRotation";

const vars = css`
  margin: 0;
  --color-text: #a5a5a5;
  --color-bg: #191613;
  --color-link: #d6af7c;
  --color-link-hover: #fff;
  --color-text-circle-1: #687685;
  --color-text-circle-2: #566373;
  --color-text-circle-3: #a4b5c0;
  --color-text-circle-4: #434e5e;

  --font-circle-1: var(--eli), sans-serif;
  --font-weight-circle-1: 300;
  --font-circle-2: modesto-condensed, serif;
  --font-weight-circle-2: 400;
  --font-circle-3: minerva-modern, sans-serif;
  --font-weight-circle-3: 400;
  --font-circle-4: niagara, serif;
  --font-weight-circle-4: 300;

  --color-button: var(--medium-blue-color);
  --color-text-button: #1d1812;
  --dim-button: 90px;
  color: var(--color-text);

  //background-color: var(--color-bg);
  //font-family: tenon, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Container = styled(motion.section)`
  position: relative;
  display: grid;
  place-items: center;
  //grid-row: 2 / 3;
  //grid-column: 1/ 1;

  ${vars};

  svg.circles {
    //position: fixed;
    //pointer-events: none;
    --dim: 136vmin;
    width: var(--dim);
    height: var(--dim);

    //top: calc(50% - var(--dim) / 2);
    //left: calc(50% - var(--dim) / 2);
  }

  svg {
    g.circle-g {
      will-change: transform;
      transition: transform .200ms ease-in-out !important;

      text.circles__text {
        //transition: all 1.14s cubic-bezier(0.16, 1, 0.3, 1) .2s;
        will-change: transform, opacity;

      }
    }
  }

  .enter {
    position: absolute;
    left: calc(50% - var(--dim-button) / 2);
    top: calc(50% - var(--dim-button) / 2);
    display: block;
    border: 0;
    width: var(--dim-button);
    height: var(--dim-button);
    font: inherit;
    font-weight: 500;
    //cursor: none;
    background: none;
    padding: 0;
    //transition: transform .8s cubic-bezier(0.87, 0, 0.13, 1);


    &:hover {
      //transform: scale(1.35);
      //transition: all .9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;

      & + svg {

        g.circle-g {
          text.circles__text {
            transition: all 1.14s cubic-bezier(0.16, 1, 0.3, 1) !important;
            opacity: .4;

            &[data-idx='true'] {
              transform: rotate(-90deg) scale(1.15);
            }

            &[data-idx='false'] {
              transform: rotate(90deg) scale(1.15);
            }

          }
        }

      }
    }
  }


  .enter__bg {


    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: var(--color-button);
    display: grid;
    place-items: center;
    transition: all .5s cubic-bezier(0.77, 0, 0.175, 1);
    color: var(--theme);


    &:hover {
      transform: scale(1.35);
      transition: all .9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;
      box-shadow: 0 0 2rem var(--medium-blue-color);
      //transition: all .3s ease-in;
      color: white;

    }
  }

  .enter__text {
    position: relative;
    font-weight: bolder;
    letter-spacing: 1px;
  }

  .circles__text {
    transform-origin: 50% 50%;
    will-change: transform, opacity;
  }

  .circles__text--1 {
    font-size: clamp(170px, 25vmin, 180px);
    font-family: var(--font-circle-1);
    font-weight: var(--font-weight-circle-1);
    fill: var(--color-text-circle-1);

    text-transform: uppercase;
  }

  .circles__text--2 {
    font-size: clamp(136px, 17vmin, 153px);
    font-family: var(--font-circle-2);
    font-weight: var(--font-weight-circle-2);
    fill: var(--color-text-circle-2);
  }

  .circles__text--3 {
    font-size: clamp(110px, 13.5vmin, 120px);
    font-family: var(--font-circle-3);
    font-weight: var(--font-weight-circle-3);
    fill: var(--color-text-circle-3);
    text-transform: uppercase;
  }

  .circles__text--4 {
    font-size: clamp(85px, 9.5vmin, 94px);
    font-family: var(--font-circle-4);
    font-weight: var(--font-weight-circle-4);
    fill: var(--color-text-circle-4);

    letter-spacing: 50px;
  }
`;

const containerVariants = {
  initial: {},

  exit: {
    transition: {
      delayChildren: .8,
      staggerChildren: .75,
      staggerDirection: -1
    }
  }
};

const circleSvgVariants = {
  endHover: {
    transition: {
      staggerChildren: 0.02
    }
  },

  exit: {
    transition: {
      staggerChildren: .04,
      staggerDirection: -1
    }
  }
};

const circleTxtVariants: Variants = {
  initial: {
    opacity: 1,
    scale: 1
  },

  exit(arg) {
    // console.log('exitArg: --- --', arg)
    // if (arg.inView !== 'projects')
    //   return {};

    if (arg && arg.inView && arg?.inView.get() === "project-section") {
      return {
        scale: .2,
        opacity: 0,
        transition: {
          duration: .9,
          ease: [0.36, 0, 0.66, -0.56]
        }

      };
    }

    return {};


  }
};

const btnVariants = {
  initial: {
    opacity: 1,
    scale: 1
  },

  exit: {
    scale: 0.2,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const transition = {
  duration: 2.5,
  ease: [0.87, 0, 0.13, 1]
};


const RotationCircleText = () => {
  const enterBtn = useRef(null);
  const clicked = useRef(false);
  const controller = useAnimation();
  const rotation = useRotation();

  const texts = [
    {
      text: "coding^can*be^fun*and^joy*",
      link: "#circle-1",
      length: 2830,
      rotate: useMotionTemplate`-${rotation}deg`
    },
    {
      text: "X Algørithm X Infinitæ X Dæbugging ",
      link: "#circle-2",
      length: 2001,
      rotate: useMotionTemplate`${rotation}deg`
    },
    {
      text: ". It . works . on . my . machinæ ",
      link: "#circle-3",
      length: 1341,
      rotate: useMotionTemplate`-${rotation}deg`

    },
    {
      text: "Køge For Kærlighed Building uI ",
      link: "#circle-4",
      length: 836,
      rotate: useMotionTemplate`${rotation}deg`

    }
  ];

  return (
    <Container
      className="rotation-circle"
      variants={containerVariants}
      initial="initial"
      exit="exit"

    >


      <motion.button
        className="enter"
        data-pointer="focus"
        // data-pointer-color="#02021e"
        data-tooltip
        data-tooltip-text="explore my works"
        variants={btnVariants}
        transition={transition}
        ref={enterBtn}

      >
        <Link to="/projects"
              className="enter__bg"
              onClick={() => {
                window?.locoInstance?.scrollTo("#projects .rotation-circle svg.circles");
              }}
        >
          <span className="enter__text">Explore</span>
        </Link>
      </motion.button>

      <motion.svg
        className="circles"
        width="100%"
        height="100%"
        viewBox="0 0 1400 1400"
        variants={circleSvgVariants}

      >
        <defs>
          <path id="circle-1" d="M250,700.5A450.5,450.5 0 1 11151,700.5A450.5,450.5 0 1 1250,700.5" />
          <path id="circle-2" d="M382,700.5A318.5,318.5 0 1 11019,700.5A318.5,318.5 0 1 1382,700.5" />
          <path id="circle-3" d="M487,700.5A213.5,213.5 0 1 1914,700.5A213.5,213.5 0 1 1487,700.5" />
          <path id="circle-4" d="M567.5,700.5A133,133 0 1 1833.5,700.5A133,133 0 1 1567.5,700.5" />
        </defs>

        {texts.map(({ text, link, length, rotate }, index) => {

          return (

            <motion.g variants={circleTxtVariants}
                      transition={transition}
                      custom={{ idx: index }}>

              <motion.g className="circle-g" style={{ rotate }} key={index}>
                <text
                  className={`circles__text circles__text--${index + 1}`}
                  style={{ transition: `all 1.14s cubic-bezier(0.16, 1, 0.3, 1) ${index * .06}s` }}
                  data-idx={index % 2 === 0}
                >
                  <textPath className="circles__text-path" xlinkHref={link} aria-label="" textLength={length}>
                    {text}
                  </textPath>
                </text>
              </motion.g>
            </motion.g>

          );
        })}
      </motion.svg>


    </Container>
  );
};

export default React.memo(RotationCircleText);
