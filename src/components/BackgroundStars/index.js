import React, { useContext, useEffect, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import useBackgroundsAssets from "../../hooks/queries/useBackgroundsAssets";
import { Galaxy, Layer, Wrapper } from "./components";
import { MotionValueContext } from "../../contexts/MotionStateWrapper";
import styled from "styled-components";
import { useLocomotiveScroll } from "@contexts/LocoMotive";

const Wrap = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

//todo -> use the composition pattern
const BackgroundStars = () => {
  const { starsBig, starsSmall, starsBigOld, starsSmallOld } =
    useBackgroundsAssets();

  // let scrollThreshold = Math.ceil((700 / document.body.scrollHeight) * -window.pageYOffset);
  const config = {
    mass: 1,
    stiffness: 50,
    damping: 20,
  };
  const target = useRef(null);
  // const mouse = useMouse(target)
  const yMouse = useSpring(0, config);
  const xMouse = useSpring(0, config);

  const { yProgress } = useLocomotiveScroll();

  const mappedY = useTransform(yProgress, [0, 1], [0, -300]);

  const yScrollBig = useSpring(mappedY, config);
  const yScrollSmall = useTransform(yScrollBig, (latest) => latest / 1.5);

  useEffect(() => {
    const calcNewMousePos = (ev) => {
      const xPos = (ev.clientX - window.innerWidth / 2) / 70;
      const yPos = (ev.clientY - window.innerHeight / 2) / 70;
      yMouse.set(yPos);
      xMouse.set(xPos);
    };

    window.addEventListener("mousemove", calcNewMousePos);

    return () => {
      window.removeEventListener("mousemove", calcNewMousePos);
    };
  }, []);

  return (
    <Galaxy ref={target}>
      <Wrap
        style={{
          y: yMouse,
          x: xMouse,
        }}
      >
        <Wrapper style={{ y: yScrollSmall }}>
          <Layer style={{ backgroundImage: `url(${starsBig.publicURL})` }} />
        </Wrapper>
      </Wrap>
    </Galaxy>
  );
};

export default React.memo(BackgroundStars);
