import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import {
  motion,
  useMotionTemplate,
  useSpring,
  useTransform,
} from "framer-motion";
import { spacing } from "../../../../styles/mixins";
import { largeUp } from "../../../../styles/mixins/breakpoints";
import { useLocomotiveScroll } from "@contexts/LocoMotive";

const ScrollText = styled.section`
  padding: 3rem;
  min-height: 40vh;
  display: flex;
  position: relative;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  //opacity: .3;
  filter: blur(0.3px);
  font-family: "Elianto-Regular", serif;

  ${spacing("p", 5)};

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
    font-size: 8vw;
    font-weight: 200;
  }

  .content__breakout--medium {
    font-size: 3vw;
    color: #5d6c7b;
  }

  .right {
    transform: translateX(-195%);
  }
`;

function HorizontalScrollText() {
  // const x = useMo();

  const { yProgress } = useLocomotiveScroll();
  const transform = useTransform(yProgress, [0, 1], [0, -100]);
  const x = useSpring(transform, {
    mass: 0.5,
    damping: 15,
    stiffness: 50,
  });

  useEffect(() => {
    // yProgressSmooth.onChange( v => console.log( "smoothY: ", v ) );
  }, []);

  return (
    <ScrollText className="content content--feature">
      <motion.p
        className="content__breakout content__breakout--big"
        style={{ x: useMotionTemplate`${x}%` }}
      >
        endless acceleration toward infinity endless acceleration toward
        infinity endless acceleration toward infinity
      </motion.p>

      <div className="right">
        <motion.p
          className="content__breakout content__breakout--medium"
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
    </ScrollText>
  );
}

export default HorizontalScrollText;
