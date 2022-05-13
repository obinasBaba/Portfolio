import React, {useContext, useRef} from 'react'
import styled, {css} from 'styled-components'
import {motion, useAnimation, useMotionTemplate, Variants,} from 'framer-motion'
import {Link} from 'gatsby'
import {MotionValueContext} from '../../../contexts/MotionStateWrapper'
import useRotation from './useRotation'

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

  svg {
    g.circle-g {
      transition: transform .200ms ease-in-out !important;
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
    transition: all .5s cubic-bezier(0.77, 0, 0.175, 1);
    color: var(--theme);


    &:hover {
      box-shadow: 0 0 2rem var(--medium-blue-color);
      transition: all .3s ease-in;
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
`

const containerVariants = {
    initial: {},

    inView: {
        transition: {
            staggerChildren: 0.04,
        },
    },

    startHover: {},

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

    exit: {
        transition: {
            staggerChildren: .04,
            staggerDirection: -1
        }
    }
}

const circleTxtVariants: Variants = {
    initial: {
        opacity: 1,
        scale: 1,
    },

    inView(custom) { // not using this
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
                duration: 1.14,
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

    exit(arg) {
        // console.log('exitArg: --- --', arg)
        // if (arg.inView !== 'projects')
        //   return {};

        if (arg && arg.inView && arg.inView.get() === 'project-section') {
            return {
                scale: .2,
                opacity: 0,
                transition: {
                    duration: .9,
                    ease: [0.36, 0, 0.66, -0.56],
                }

            }
        }

        return {}


    }
}

const btnVariants = {
    initial: {
        opacity: 1,
        scale: 1,
    },

    inView: {  // not using this
        scale: 1,
        opacity: 1,
    },

    startHover: {
        scale: 1.35,
        transition: {
            delay: 0.1,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
        },
    },

    btnHoverEnd: {
        scale: 1,
        transition: {
            duration: 0.9,

        },
    },

    exit: {
        scale: 0.2,
        opacity: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        }
    }
}

const transition = {
    duration: 2.5,
    ease: [0.87, 0, 0.13, 1],
}


const RotationCircleText = () => {
    const enterBtn = useRef(null)
    const clicked = useRef(false)
    const controller = useAnimation()
    const texts = [
        {text: 'coding^can*be^fun*and^joy*', link: '#circle-1', length: 2830},
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
    const {
        moScroll: {y, limit},
    } = useContext(MotionValueContext)


    /* const rotate = useTransform(y, latest => {
       return map(latest, 0, limit.get(), 0, 360)
     })*/

    const rotate = useRotation()


    return (
        <Container
            className="rotation-circle"
            variants={containerVariants}
            animate={controller}
            initial="initial"
            exit='exit'
            // whileInView="inView"
            /*viewport={{
              amount: 'some',
              once: true,
            }}*/
        >
            <motion.svg
                className="circles"
                width="100%"
                height="100%"
                viewBox="0 0 1400 1400"
                variants={circleSvgVariants}

            >
                <defs>
                    <path id="circle-1" d="M250,700.5A450.5,450.5 0 1 11151,700.5A450.5,450.5 0 1 1250,700.5"/>
                    <path id="circle-2" d="M382,700.5A318.5,318.5 0 1 11019,700.5A318.5,318.5 0 1 1382,700.5"/>
                    <path id="circle-3" d="M487,700.5A213.5,213.5 0 1 1914,700.5A213.5,213.5 0 1 1487,700.5"/>
                    <path id="circle-4" d="M567.5,700.5A133,133 0 1 1833.5,700.5A133,133 0 1 1567.5,700.5"/>
                </defs>

                {texts.map(({text, link, length}, index) => {

                    let dir = index % 2 === 0 ? useMotionTemplate`-${rotate}deg` : useMotionTemplate`${rotate}deg`;

                    return <motion.g className="circle-g" style={{rotate: dir}} key={index}>
                        <motion.text
                            className={`circles__text circles__text--${index + 1}`}
                            variants={circleTxtVariants}
                            transition={transition}
                            custom={{idx: index}}
                        >
                            <textPath className="circles__text-path" xlinkHref={link} aria-label="" textLength={length}>
                                {text}
                            </textPath>
                        </motion.text>
                    </motion.g>
                })}
            </motion.svg>

            <motion.button
                className="enter"
                data-pointer="focus"
                // data-pointer-color="#02021e"
                data-tooltip
                data-tooltip-text='explore my works'
                variants={btnVariants}
                transition={transition}
                ref={enterBtn}
                onHoverStart={() => {
                    controller.start('startHover')
                }}
                onHoverEnd={event => {
                    if (clicked.current) return;

                    controller.start('endHover')
                    controller.start('btnHoverEnd')
                }}
            >
                <Link to='/projects'
                      className="enter__bg"
                      onClick={() => {
                          clicked.current = true
                      }}
                >
                    <span className="enter__text">Explore</span>
                </Link>
            </motion.button>
        </Container>
    )
}

export default React.memo(RotationCircleText)
