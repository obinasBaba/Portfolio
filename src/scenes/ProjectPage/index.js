import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import styled from 'styled-components';
import { gridColWidth, gridify } from '@/styles/mixins';
import Moon from '../../components/MoonLight';

import NavDots from './components/NavDots';
import { useProjectData } from './util/projectData';
import { moonVariants, parentVariant, topVariant } from './util/variants';
import ProjectScrollDown from './components/SideBarTools/ProjectScrollDown';
import { MotionValueContext } from '@contexts/MotionStateWrapper';
import FullPage from 'fullpage.js';
import Others from '@scenes/ProjectPage/components/Others';
import ProjectImage from '@scenes/ProjectPage/components/ProjectImage';
import ProjectDescription
  from '@scenes/ProjectPage/components/ProjectDescription';

const ProjectPageContainer = styled(motion.main)`
  position: relative;
  max-width: 100%;
  min-height: 100vh;
  overflow: hidden;
  //border: 11px solid red;

  .fp-watermark {
    display: none !important;
  }


  ${gridify()};

  & #rf-wrapper {
    ${gridColWidth(1, 65)};

    max-height: 100vh;
    //overflow: hidden;
    grid-row: 1 / 2;
  }

  .fp-overflow {
    //border: 11px solid #000;
    height: 100%;
    overflow: hidden;
  }
`;

const ProjectContainerGrid = styled(motion.div)`

  &.main {
    display: grid;
    grid-template-columns: repeat(64, calc(100% / 64));
    align-content: center;
    align-items: center;
    position: relative;
    height: 100%;
    margin: 0 auto;
  }
  
  &.others {
    //border: 4px solid red;
  }


  //height: 100vh;
  //max-width: 1750px;
  //background-color: rgba(0, 0, 0, 0.3);

  //border: 11px solid #000;

`;

function ProjectPage () {
  const { othersAssets, items } = useProjectData();

  const controllers = items.map(({ controller }) => controller);

  const {
    variantsUtil: { fromCaseStudy },
  } = useContext(MotionValueContext);

  const moVariants = useMotionValue(
    fromCaseStudy.get() ? ['initial', 'animate'] : ['initial'],
  );
  const setActiveIndex = useMotionValue(0);

  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return null;
      // window is available, you can use it here
    }
    const fullPage = new FullPage('#rf-wrapper', {
      easingcss3: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      scrollingSpeed: '1e3',
      anchors: ['one', 'two', 'three', 'four'],
      animateAnchor: false,
      setLockAnchors: false,
      setRecordHistory: false,
      scrollBar: false,
      autoScrolling: true,
      fitToSection: true,
      recordHistory: true,
      scrollOverflow: true,
      className: 'fp-overflow',
      lazyLoading: true,
      licenseKey: 'gplv3-license',
      menu: '#navDots', // for dotted navigation
      onLeave: (origin, dist) => {
        console.log('onLeave ...', origin.index, dist.index, isMounted);

        setActiveIndex.set(dist.index);
        controllers[origin.index].start('exitFp');
        controllers[dist.index].start('animateFp');
      },
      afterLoad: (origin, dist, dir) => {
        console.log('afterLoad ----', dist.index, dir, isMounted,
          fromCaseStudy.get());

        // load the initial anim for all if it's the first time and not from caseStudy page
        // if (dir === null && !fromCaseStudy.get())
        //   controllers.forEach((controller) => controller.start('initial'));

      },
      afterRender: ({ index }) => {
        console.log('afterRender .------', index, fromCaseStudy.get());
        // setAnchors.current.setAnchors(index)
        setActiveIndex.set(index);

        // if (!isMounted) return;

        if (fromCaseStudy.get()) {
          items.forEach(
            ({ controller }, i) => {
              if (i !== index) {

                controller.start('initial');

                /*try {
                  setTimeout(() => {
                    controller.start('initial');
                  }, [1000]);
                } catch (err) {
                  console.log('err', err);
                }*/
              }
            },
          );

          fromCaseStudy.set(false);
        }

        if (items[index]) {
          // items[index].controller.mount();

          items[index].controller.start('animateFp');

          /*  try {
              setTimeout(() => {
              }, [1000]);
            } catch (err) {
              console.log('err', err);
            }*/

        }
      },
    });

    return () => {
      if (typeof window === 'undefined') {
        return ;
        // window is available, you can use it here
      }
      fullPage.destroy('all');
    };

  }, []);

  return (
    <ProjectPageContainer
      data-scroll-section={true}
      className='project-work-container'
      variants={parentVariant}
      initial={moVariants.get()}
      animate='animate'
    >
      <Moon showMoon={false} variants={moonVariants} />
      <NavDots activeIndex={setActiveIndex} />
      <ProjectScrollDown activeIndex={setActiveIndex} />

      <div id='rf-wrapper'>

        {items.map((item, index) => {
          const isOthers = index === items.length - 1;

          return (
            // if (!item.partners) return
            <div className='section' key={index}>
              <ProjectContainerGrid
                variants={topVariant}
                initial={moVariants.get()}
                animate={controllers[index]}
                exit='exit'
                className={isOthers ? 'others' : 'main'}
              >
                {
                  isOthers ? (
                    <Others {...othersAssets} />
                  ) : (
                    <>
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
                    </>
                  )
                }
              </ProjectContainerGrid>
            </div>
          );
        })}
      </div>
    </ProjectPageContainer>
  );
}

export default ProjectPage;
