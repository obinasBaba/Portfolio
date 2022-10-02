import React, { useContext, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { motion, useSpring, useTransform } from "framer-motion";
import { gridMultiplayer, length, spacing } from "../../../styles/mixins";
import HeadlineTitle from "../../../components/Headline";
import RotationTextPath from "./RotationTextPath";
import { MotionValueContext } from "../../../contexts/MotionStateWrapper";
import { largeUp } from "../../../styles/mixins/breakpoints";

const ProjectContainer = styled(motion.section)`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  flex-flow: column;
  place-items: center;
  place-content: center;

  align-items: center;
  justify-content: center;
  max-width: 100%;
  min-height: 100vh;
  //border: thick solid red;
  //padding: 2rem 0;

  ${spacing("pt", 16)};
  ${spacing("pb", 11)};

  .inview-detector {
    position: absolute;
    width: 100%;
    height: 50%;
    //background: navajowhite;
    z-index: 999;
    pointer-events: none;
  }
`;

const Planet = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  z-index: 1;
  background: linear-gradient(
    36.99deg,
    rgba(1, 1, 18, 0) 27.49%,
    #262147 78.93%
  );

  ${length("width", 20)};
  ${length("height", 20)};

  &.planet-right {
    background: linear-gradient(
      37.98deg,
      rgba(16, 8, 74, 0) 16.94%,
      #83a4ff 87.08%
    );

    ${length("width", 8)};
    ${length("height", 8)};
    ${gridMultiplayer("right", 10)};
  }
`;

const ScrollPlanet = styled.div`
  position: absolute;
  left: -12%;
  bottom: 30%;
  display: none;

  ${largeUp(css`
    left: 6%;
    bottom: 25%;
    display: initial;
  `)};
`;

const ScrollPlanet2 = styled.div`
  position: absolute;
  top: 50%;
  right: 30%;
  display: none;

  ${largeUp(css`
    display: block;
    top: 40%;
    right: 10%;
  `)};
`;

const parentVariant = {};

const config = {
  mass: 1,
  stiffness: 50,
  damping: 20,
};

const planetVariants = {
  initial: {
    scale: 1,
  },

  exit: {
    scale: 0,
  },
};

function Projects() {
  const containerRef = useRef(null);
  const {
    mouse: { mouseY, mouseX },
    inView,
  } = useContext(MotionValueContext);

  const yBig = useSpring(0, config);
  const xBig = useSpring(0, config);

  const ySmall = useTransform(yBig, (y) => y / 8);
  const xSmall = useTransform(xBig, (x) => x / 6);

  // transform
  useEffect(() => {
    import("../../../styles/projectFonts.css").then((v) => {});

    const yChangeHandler = (y) => {
      const yPos = (y - window.innerHeight) / 15;
      yBig.set(yPos);
    };
    const xChangeHandler = (x) => {
      const xPos = (x - window.innerWidth) / 15;
      xBig.set(xPos);
    };

    mouseY.onChange(yChangeHandler);

    mouseX.onChange(xChangeHandler);
  }, []);

  return (
    <ProjectContainer
      id="projects"
      data-scroll
      data-scroll-class="experiment"
      variants={parentVariant}
      ref={containerRef}
    >
      <motion.div
        className="inview-detector"
        onViewportEnter={() => {
          inView.set("project-section");
        }}
        onViewportLeave={() => {
          inView.set(false);
        }}
        viewport={{
          amount: "some",
          // once: true,
        }}
      />

      <HeadlineTitle title="Projects" mb={3} subtitle="Case Studies" />

      {/* <ScrollPlanet data-scroll data-scroll-speed="-3">
                <Planet className="planet-left" style={{ y: yBig, x: xBig }} variants={planetVariants}/>
            </ScrollPlanet>

            <ScrollPlanet2 data-scroll data-scroll-speed="-6">
                <Planet className="planet-right" style={{ y: ySmall, x: xSmall }} variants={planetVariants}/>
            </ScrollPlanet2> */}

      <RotationTextPath />
    </ProjectContainer>
  );
}

export default Projects;
