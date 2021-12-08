import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { gsap } from "gsap";
import { motion, useAnimation, Variants } from "framer-motion";
import { Link } from "gatsby";

const vars = css`
  margin: 0;
  --color-text: #a5a5a5;
  --color-bg: #191613;
  --color-link: #d6af7c;
  --color-link-hover: #fff;
  --color-text-circle-1: #5d6c7b;
  --color-text-circle-2: #566373;
  --color-text-circle-3: #a4b5c0;
  --color-text-circle-4: #434e5e;

  --font-circle-1: ivymode, sans-serif;
  --font-weight-circle-1: 300;
  --font-circle-2: modesto-condensed, serif;
  --font-weight-circle-2: 400;
  --font-circle-3: minerva-modern, sans-serif;
  --font-weight-circle-3: 400;
  --font-circle-4: niagara, serif;
  --font-weight-circle-4: 300;

  --color-button: #d6ae7c;
  --color-text-button: #1d1812;
  --dim-button: 90px;
  color: var(--color-text);

  //background-color: var(--color-bg);
  //font-family: tenon, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

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

    .circles__text-path {
      border: thin solid red;
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
    cursor: pointer;
    background: none;
    color: var(--color-text-button);
    padding: 0;
  }

  .enter:focus,
  .enter:hover,
  .enter:active {
    outline: none;
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
  }

  .enter__text {
    position: relative;
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
`

const containerVariants = {
  initial: {},

  inView: {
    transition: {
      staggerChildren: 0.04,
    },
  },

  endHover: {
    /*transition:{
      staggerChildren: .2,
    }*/
  },
}

const circleSvgVariants = {
  endHover: {
    transition: {
      staggerChildren: 0.02,
    },
  },
}

const circleTxtVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.75,
  },

  inView(custom) {
    console.log('inView Animation start----', custom);
    return {
      scale: 1,
      opacity: 1,
      rotate: custom.idx % 2 ? 90 : -90,
      transition: {
        duration: 3,
        ease: [0.87, 0, 0.13, 1],
      },
    }
  },

  startHover(custom) {
    return {
      scale: 1.15,
      rotate: custom.idx % 2 ? -90 : 90,
      opacity: 0.4,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    }
  },

  endHover(custom) {
    return {
      scale: 1,
      rotate: custom.idx % 2 ? 90 : -90,
      opacity: 1,

      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    }
  },
}

const btnVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },

  inView: {
    scale: 1,
    opacity: 1,
  },
  startHover: {
    scale: 1.35,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },

  btnHoverEnd: {
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const transition = {
  duration: 2.5,
  ease: [0.87, 0, 0.13, 1],
}

const RotationCircleText = () => {
  const enterBtn = useRef(null)
  const scrollTween = useRef(gsap.timeline())
  const controller = useAnimation()
  const texts = [
    { text: 'Programming is fun&joy .', link: '#circle-1', length: 2830 },
    {
      text: 'X Algørithm X Infinitæ X Dæbugging ',
      link: '#circle-2',
      length: 2001,
    },
    {
      text: '. It . works . on . my . machinæ ',
      link: '#circle-3',
      length: 1341,
    },
    {
      text: 'Køge For Kærlighed Building uI ',
      link: '#circle-4',
      length: 836,
    },
  ]


  useEffect(() => {

    gsap.set('svg.circles .circle-g', { transformOrigin: '50% 50%' })

    const track = document.querySelector<HTMLElement>('#projects')

    queueMicrotask(() => {
      scrollTween.current =
        gsap.timeline().to(
          [
            ...Array.from(
              document.querySelectorAll('.rotation-circle g.circle-g')
            ),
          ],
          {
            rotation: i => (i % 2 ? '-=60' : '+=60'),
            scrollTrigger: {
              trigger: '#projects',
              scroller: '[data-scroll-container]',
              scrub: 1,
              start: () => 'top 10',
              end: () => '+=' + track?.offsetHeight,
            },
          }
        )
    })

    // STrigger.refresh()


  }, [])

  return (
    <Container
      className="rotation-circle"
      variants={containerVariants}
      animate={controller}
      initial="initial"
      exit='exit'
      whileInView="inView"
      viewport={{
        amount: 'some',
        once: true,
      }}
    >
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

        {texts.map(({ text, link, length }, index) => (
          <motion.g className="circle-g">
            <motion.text
              className={`circles__text circles__text--${index + 1}`}
              variants={circleTxtVariants}
              transition={transition}
              custom={{ idx: index }}
            >
              <textPath className="circles__text-path" xlinkHref={link} aria-label="" textLength={length}>
                {text}&nbsp;
              </textPath>
            </motion.text>
          </motion.g>
        ))}
      </motion.svg>

      <motion.button
        className="enter"
        data-pointer="focus"
        data-pointer-color="#02021e"
        variants={btnVariants}
        transition={transition}
        ref={enterBtn}
        onHoverStart={event => {
          // enterMouseEnterEv()
          controller.start('startHover')
        }}
        onHoverEnd={event => {
          // enterMouseLeaveEv()
          controller.start('endHover')
          controller.start('btnHoverEnd')
        }}
      >
        <Link to='/projects' className="enter__bg">
          <span className="enter__text">Explore</span>
        </Link>
      </motion.button>
    </Container>
  )
}

export default React.memo(RotationCircleText)