import React, { useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { CircleTextController } from './CircleTextController'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'

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

const Container = styled(motion.div)`
  position: relative;
  grid-row: 2 / 3;
  grid-column: 1/ 1;


  ${vars};

  .enter {
    display: block;
    border: 0;
    width: var(--dim-button);
    height: var(--dim-button);
    position: absolute;
    left: calc(50% - var(--dim-button) / 2);
    top: calc(50% - var(--dim-button) / 2);
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
  }

  .enter__text {
    position: relative;
  }

  .js .enter {
    opacity: 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 100vw;
    padding: 2rem;
    height: calc(100vh - 13rem);
    position: relative;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
  }

  .circles {
    //position: fixed;
    //pointer-events: none;
    --dim: 136vmin;
    width: var(--dim);
    height: var(--dim);
    //top: calc(50% - var(--dim) / 2);
    //left: calc(50% - var(--dim) / 2);
  }


  .circles__text {
    transform-origin: 700px 700px;
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

const RotationCircleText = () => {
  const circleRef = useRef();
  const started = useRef();
  const scrollTriggerRef = useRef(null)

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
      circleRef.current = CircleTextController.getInstance();

      return () => CircleTextController.instance = null

    },
    [])

  useEffect(() => {


      const track = document.querySelector('#projects')

      scrollTriggerRef.current = gsap
        .timeline()
        .to([...document.querySelectorAll('.rotation-circle .circles__text')],
          {
            rotation: i => (i % 2 ? '-=60' : '+=60'),
            scrollTrigger: {
              trigger: '#projects',
              scroller: '[data-scroll-container]',
              scrub: 1,
              start: () => 'top 10',
              end: () => '+=' + track.offsetHeight,
            },
          })
        .pause()

      // STrigger.refresh()

    },
    [])

  return (
    <Container className='rotation-circle'

    >
      <motion.div viewport={{
        once: true,
        amount: 'some',
      }}
                  onViewportEnter={entry => {
                    if ( CircleTextController.getInstance().started )
                      return

                    // CircleTextController.getInstance().start()
                  }}
      />

      <svg className="circles" width="100%" height="100%"
           viewBox="0 0 1400 1400">
        <def>
          <path id="circle-1"
                d="M250,700.5A450.5,450.5 0 1 11151,700.5A450.5,450.5 0 1 1250,700.5" />
          <path id="circle-2"
                d="M382,700.5A318.5,318.5 0 1 11019,700.5A318.5,318.5 0 1 1382,700.5" />
          <path id="circle-3"
                d="M487,700.5A213.5,213.5 0 1 1914,700.5A213.5,213.5 0 1 1487,700.5" />
          <path id="circle-4"
                d="M567.5,700.5A133,133 0 1 1833.5,700.5A133,133 0 1 1567.5,700.5" />
        </def>
        {
          texts.map(({ text, link, length }, index) => (
            <motion.g style={{opacity: .1}} >
              <motion.text
                className={`circles__text circles__text--${index + 1}`}>

                <textPath className="circles__text-path" xlinkHref={link}
                          aria-label=""
                          textLength={length}>{text}&nbsp;</textPath>
              </motion.text>
            </motion.g>
          ))
        }
      </svg>

      <button className="enter"
              data-pointer='focus'
              data-pointer-color='#02021e'
      >
        <div className="enter__bg" />
        <span className="enter__text">Explore</span>
      </button>

    </Container>
  );
};

export default RotationCircleText;
