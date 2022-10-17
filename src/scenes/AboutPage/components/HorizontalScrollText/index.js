import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import {
  motion,
  useMotionTemplate,
  useSpring,
  useTransform,
} from 'framer-motion';
import { spacing } from '@/styles/mixins';
import { largeUp, mediumUp } from '@/styles/mixins/breakpoints';
import { useLocomotiveScroll } from '@contexts/LocoMotive';

const ScrollText = styled.section`
  min-height: 40vh;
  display: flex;
  position: relative;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  //opacity: .3;
  filter: blur(0.3px);
  font-family: "Elianto-Regular", serif;

  //border: 1px solid red;

  ${spacing('p', 5)};
  padding-top: 0;

  ${mediumUp(css`
    margin-top: 8rem;
  `)};

  ${largeUp(css`
    min-height: 80vh;
  `)};

  .content__breakout {
    margin: 0 -3rem;
    white-space: nowrap;
    text-transform: uppercase;
    font-weight: 200;
    font-style: italic;
    //opacity: .3;
    font-family: "Elianto-Regular", serif;
    color: #434e5e;
  }

  .content__breakout--big {
    font-size: 4rem;
    font-weight: 200;


    ${mediumUp(css`
      font-size: 8vw;
    `)};

  }

  .content__breakout--medium {
    font-size: 6vw;
    color: #5d6c7b;

    ${mediumUp(css`
      font-size: 3vw;

    `)};
  }

  .right {
    transform: translateX(-195%);
  }
`;

function HorizontalScrollText () {
  // const x = useMo();

  const { yProgress } = useLocomotiveScroll();

  const transform = useTransform(yProgress, [0, 1],
    [0, -100], { clamp: false });
  const x = useSpring(transform, {
    mass: 0.5, damping: 15, stiffness: 50,
  });

  useEffect(() => {
    // yProgressSmooth.onChange( v => console.log( "smoothY: ", v ) );
  }, []);

  return (<ScrollText className='content content--feature'>
    <motion.p
      className='content__breakout content__breakout--big'
      style={{ x: useMotionTemplate`calc(${x}%)` }}
    >
      endless acceleration toward infinity endless acceleration toward
      infinity endless acceleration toward infinity
    </motion.p>

    <div className='right'>
      <motion.p
        className='content__breakout content__breakout--medium'
        style={{ x: useMotionTemplate`calc(-1 * ${x}%)` }}
      >
        the greatest barrier to your enlightenment the greatest barrier to
        your enlightenment the greatest barrier to your enlightenment the
        greatest barrier to your enlightenment the greatest barrier to your
        enlightenment the greatest barrier to your enlightenment the greatest
        barrier to your enlightenment the greatest barrier to your
        enlightenment the greatest barrier to your enlightenment
      </motion.p>
    </div>
  </ScrollText>);
}

export default HorizontalScrollText;
