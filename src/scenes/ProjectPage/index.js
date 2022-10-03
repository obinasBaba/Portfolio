// noinspection JSIgnoredPromiseFromCall

import React, { useContext } from "react";
import { motion, useMotionValue } from "framer-motion";
import styled from "styled-components";
import ReactFullpage from "@fullpage/react-fullpage";
import { gridColWidth, gridify } from '@/styles/mixins';
import Moon from "../../components/MoonLight";

import NavDots from "./components/NavDots";
import ProjectImage from "./components/ProjectImage";
import ProjectDescription from "./components/ProjectDescription";
import Others from "./components/Others";
import { useProjectData } from "./util/projectData";
import { moonVariants, parentVariant, topVariant } from "./util/variants";
import ProjectScrollDown from "./components/SideBarTools/ProjectScrollDown";
import { MotionValueContext } from '@contexts/MotionStateWrapper';

const ProjectContainerGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(64, calc(100% / 64));

  align-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  //height: 100vh;
  //max-width: 1750px;
  margin: 0 auto;
`;

const ProjectPageContainer = styled(motion.main)`
  position: relative;
  max-width: 100%;
  min-height: 100vh;
  overflow: hidden;

  ${gridify()};

  & .rf-wrapper {
    ${gridColWidth(1, 65)};

    height: 100vh;
    grid-row: 1 / 2;
  }
`;

function ProjectPage() {
  const { othersAssets, items } = useProjectData();

  const controllers = items.map(({ controller }) => controller);

  const {
    variantsUtil: { fromCaseStudy },
  } = useContext(MotionValueContext);

  const moVariants = useMotionValue(
    fromCaseStudy.get() ? ["initial", "animate"] : ["initial"]
  );
  const setActiveIndex = useMotionValue(0);

  return (
    <ProjectPageContainer
      className="project-work-container"
      variants={parentVariant}
      initial={moVariants.get()}
      animate="animate"
    >
      <Moon showMoon={false} variants={moonVariants} />
      <NavDots activeIndex={setActiveIndex} />
      <ProjectScrollDown activeIndex={setActiveIndex} />

      <div className="rf-wrapper">
        <ReactFullpage
          easingcss3="cubic-bezier(0.645, 0.045, 0.355, 1)"
          scrollingSpeed="1e3"
          anchors={["one", "two", "three", "four"]}
          animateAnchor={false}
          setLockAnchors={false}
          setRecordHistory={false}
          scrollBar={false}
          autoScrolling
          fitToSection
          recordHistory
          scrollOverflow
          lazyLoading
          menu="#navDots" // for dotted navigation
          onLeave={(origin, dist) => {
            // console.log('onLeave ...')

            setActiveIndex.set(dist.index);

            controllers[origin.index].start("exitFp");
            controllers[dist.index].start("animateFp");
          }}
          afterLoad={(origin, dist, dir) => {
            // console.log('afterLoad ----', dist.index, dir)

            // load the initial anim for all if it's the first time and not from caseStudy page
            if (dir === null && !fromCaseStudy.get())
              controllers.forEach((controller) => controller.start("initial"));
          }}
          afterRender={({ index }) => {
            // console.log('afterRender .------', index, isLast,fromCaseStudy.get())
            // setAnchors.current.setAnchors(index)
            setActiveIndex.set(index);

            if (fromCaseStudy.get()) {
              items.forEach(
                ({ controller }, i) =>
                  i !== index && controller.start("initial")
              );

              fromCaseStudy.set(false);
            }

            setTimeout(() => {
              if (items[index]) items[index].controller.start("animateFp");
            });
          }}
          render={() => (
            // console.log('render -------- ', state)

            <>
              {items.map((item, index) => (
                // if (!item.partners) return

                <div className="section" key={index}>
                  {index === items.length - 1 ? (
                    <motion.div
                      variants={topVariant}
                      initial={moVariants.get()}
                      animate={controllers[index]}
                      exit="exit"
                      key="one"
                    >
                      <Others {...othersAssets} />
                    </motion.div>
                  ) : (
                    <ProjectContainerGrid
                      variants={topVariant}
                      initial={moVariants.get()}
                      animate={controllers[index]}
                      exit="exit"
                    >
                      <ProjectImage
                        items={item}
                        index={index}
                        exit={fromCaseStudy.get()}
                      />

                      <ProjectDescription
                        items={item}
                        index={index}
                        exit={fromCaseStudy.get()}
                      />
                    </ProjectContainerGrid>
                  )}
                </div>
              ))}
            </>
          )}
        />
      </div>
    </ProjectPageContainer>
  );
}

export default ProjectPage;
