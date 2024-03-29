import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Typography, useMediaQuery, useTheme } from '@material-ui/core';
import gsap from 'gsap';
import { useLottiAssets } from '@hooks/queries/useLottiAssets';
import { processData } from './data';
import Card from './components/Card';
import { spacing, text } from '@/styles/mixins';
import {
  largeUp,
  mediumUp,
  smallDown,
  xLargeUp,
} from '@/styles/mixins/breakpoints';

const ProcessContainer = styled(motion.section)`
  position: relative;
  min-height: 100vh;
  //max-width: 1300px;
  //margin: 0 auto;
  width: 100%;
  //border: thin solid red;
  ${spacing('mt', 25.4)};
  ${spacing('mb', 20)};
`;

const ProcessTitle = styled(Typography)`
  position: relative;
  display: block;

  font-weight: 900;
  font-family: "Elianto-Regular", serif;
  //line-height: 100%;
  letter-spacing: -2px;
  margin: 0 auto;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  // this one fixes gradient text line breaks safari bug: https://zellwk.com/blog/multi-line-gradient-links/
  -webkit-box-decoration-break: clone;

  background-image: linear-gradient(137.81deg,
  #5d6c7b 3.52%,
  #a4b5c0 41.89%,
  #bfd0d9 96.77%);
  //border: thin dashed burlywood;

  ${spacing('pl', 3)};
  ${spacing('pb', 1.7)};

  ${smallDown(css`
      // ${text(3.5)};
  `)};

  ${mediumUp(css`
    ${spacing('pl', 7)};
  `)};

  ${xLargeUp(css`
    ${spacing('pl', 17)};
  `)};

  &:first-child {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  &:last-child {
    margin-top: -1.7%;
    //line-height: 100%;
  }
`;

const ProcessMask = styled(motion.div)`
  z-index: 5;
  //border: thin dashed #89dc14;

  ${mediumUp(css`
    ${spacing('pl', 50)};
  `)};
`;

const ProcessTrack = styled(motion.div)`
  //border: 2px dashed #00ccff;
  display: flex;
  width: 100%;
  flex-flow: column;
  align-items: center;
  ${spacing('p', 4)};
  ${spacing('gap', 3.5)};

  ${mediumUp(css`
    flex-flow: row;
    flex-wrap: nowrap;
    align-items: stretch;
    width: max-content;
    ${spacing('p', 0)};
    ${spacing('gap', 0)};

    & > :not(:last-child) {
      ${spacing('mr', 17.5)};
    }
  `)};
`;

function MyProcess ({ triggerRegister }) {
  const { build, design, ufo, align, rocket } = useLottiAssets();
  const icons = [ufo, align, design, build, rocket];

  const maskRef = useRef(null);
  const titleRef = useRef(null);
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const mediaMatch = useMediaQuery(useTheme().breakpoints.up('md'));

  const progress = useMotionValue(0);
  const opacity = useTransform(progress, [0.69, 0.98], [1, 0]);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!mediaMatch) return;

    const mask = document.querySelector('.mask');
    const track = document.querySelector('.track');

    const timeline = gsap.timeline();

    // console.log( "myProcess----" );

    setTimeout(() => {
      timeline.to(track, {
        ease: 'none',
        scrollTrigger: {
          trigger: mask,
          pin: true,
          scroller: '[data-scroll-container]',
          start: () => 'top 25%',
          end: () => `+=${track.offsetWidth - 400}`,
        },
      });

      timeline.to('.titleTxt-wrapper', {
        scrollTrigger: {
          pin: true,
          pinSpacing: false,
          trigger: '.titleTxt-wrapper',
          scroller: '[data-scroll-container]',
          start: () => 'top 7%',
          end: () => `+=${track.offsetWidth}`,
        },
      });

      timeline.to(track, {
        x: -(track.offsetWidth - 200),
        ease: 'none',
        scrollTrigger: {
          trigger: '.mask',
          scrub: 1,
          scroller: '[data-scroll-container]',
          start: () => 'top 70%',
          end: () => `+=${track.offsetWidth}`,
          onUpdate (self) {
            progress.set(self.progress);
          },
        },
      });
    }, 3000);

    return () => {
      timeline.kill();
    };

  }, [mediaMatch]);

  return (
    <ProcessContainer
      ref={containerRef}
      id='process-container'
      onViewportEnter={() => {
        setInView(true);
      }}
    >


      <div className='titleTxt-wrapper'>
        <motion.div style={{ opacity }}>
          <ProcessTitle ref={titleRef} variant='h1' className='titleTxt' noWrap>
            Approach
          </ProcessTitle>

          <ProcessTitle ref={titleRef} variant='h1' className='titleTxt' noWrap>
            & vision
          </ProcessTitle>
        </motion.div>
      </div>

      <ProcessMask ref={maskRef} className='mask'>
        <ProcessTrack ref={trackRef} className='track'>


          {processData.map(({ no, title, txt, keys }, index) => (
            <Card
              key={index}
              no={no}
              titleTxt={title}
              txt={txt}
              index={index}
              path={inView && icons[index].publicURL}
              methodologies={keys}
            />
          ))}
        </ProcessTrack>
      </ProcessMask>
    </ProcessContainer>
  );
}

export default MyProcess;
