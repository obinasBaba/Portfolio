import React, { useContext, useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { gridColWidth, spacing, text } from '@/styles/mixins';
import { basicVariants, transition } from '@/helpers/variants';
import { largeUp, mediumUp, xxLargeUp } from '@/styles/mixins/breakpoints';
import { MotionValueContext } from '@/contexts/MotionStateWrapper';
import HeadlineTitle from '@components/Headline';

const BlogListContainer = styled(Container)`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  grid-row: 1 / 2;

  //border: thin solid yellow;

  ${gridColWidth()};

  ${spacing('mt', 20)};
  ${spacing('mb', 10)};

  ${largeUp(css`
    ${spacing('mt', 13)};
  `)}
`;

const Title = styled(Typography)`
  align-self: flex-start;
  //color: transparent;
  //-webkit-text-stroke: 2.5px #becdd5;
  //font-family: 'Elianto-Regular', serif;
  width: 100%;

  //border: thin solid red;

    // ${text(4)};

  ${mediumUp(css`
    ${text(7)};
  `)}

  ${largeUp(css`
    ${spacing('ml', -6)};
  `)}

  ${xxLargeUp(css`
    ${spacing('ml', -10)};
  `)}
`;

const BlogListWrapper = styled(motion.div)`
    //border: 2px dashed teal;
    display: flex;
    flex-flow: column;
    width: 100%;
    max-width: 1050px;
    margin: 0 auto;

    & .title-wrapper {
        align-self: flex-start;

        ${spacing('mb', 10)};
    }

    ${largeUp(css`
        ${spacing('ml', 7)};

        .title-wrapper {
            margin-left: -6rem;
        }
    `)};

    & > :not(:first-child) {
        margin-left: auto;
    }
`;

const CardContainer = styled.div`
  //border: thick solid red;
  margin: auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  ${largeUp(css`
    ${spacing('mr', 8)};
  `)};
`;

function BlogList ({ children }) {
  const { mainAnimationController, screenOverlayEvent } =
    useContext(MotionValueContext);

  // const progress = useMotionValue(0);
  // const rotate =  useTransform(rotateValue, [.2, .23], [0, 90]);
  // const opacity =  useTransform(rotateValue, [0, .2, .35], [1, 0, 1]);
  // const opacity = useTransform(progress, [0, .08], [1, 0]);

  useEffect(() => {
    /*  const pageTitle = document.querySelector('.page-titleTxt');
      const cardContainer = document.querySelector('.card-container');

      setTimeout(() => {
        gsap.to(pageTitle, {
          scrollTrigger: {
            trigger: pageTitle,
            pinSpacing: false,
            pin: true,
            scroller: '[data-scroll-container]',
            scrub: 2,
            start: 'top 8%',
            end: () => `+=${cardContainer.offsetHeight}`,
            onUpdate (self) {
              progress.set(self.progress);
            },
          },
        });
      });*/
  }, []);

  return (
    <BlogListContainer fixed={false} maxWidth={false}>
      <BlogListWrapper
        variants={basicVariants}
        transition={transition}
        initial='initial'
        animate={'animate'}
        exit='exit'
      >
        <div className='title-wrapper'>
          <HeadlineTitle title='My Articles' subtitle='tips & tricks' />
        </div>

        <CardContainer className='card-container'>{children}</CardContainer>
      </BlogListWrapper>
    </BlogListContainer>
  );
}

export default BlogList;
