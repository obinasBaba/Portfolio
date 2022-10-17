import React from 'react';

import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import CardContents from './components/CardContents';
import Thumbnail from './components/Thumbnail';
import { shadow, spacing } from '@/styles/mixins';
import { largeUp, mediumUp, xxLargeUp } from '@/styles/mixins/breakpoints';

const StyledBlogCard = styled(motion.div)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(34, 45, 58, 0.2);

  ${spacing('br', 3)};
  ${spacing('mv', 10)};
  ${spacing('mb', 15)};

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: block;
    //overflow: hidden;
    backdrop-filter: blur(5px);
    background-image: var(--gray_gradient);

    ${spacing('br', 3)};
  }

  &:first-child {
    ${spacing('mt', 16)};
  }

  ${mediumUp(css`
    flex-direction: row;
    align-items: center;

    width: clamp(500px, 74vw, 750px);
    height: max-content;
    transform: translateX(0);

    ${shadow()};
    ${spacing('pv', 2.2)};
    ${spacing('ml', 1)};
  `)};

  ${largeUp(css`
    & :first-child {
      ${spacing('mt', 0)};
    }
  `)}

  ${xxLargeUp(css`
    width: clamp(500px, 78vw, 910px);
  `)};
`;

const BlogCard = ({
  index,
  date,
  title,
  body,
  slug,
  featuredMedia: { publicURL, childImageSharp },
}) => (
  <motion.div>
    <StyledBlogCard media={publicURL}>
      <Thumbnail media={childImageSharp} link={slug} />
      <CardContents
        index={index}
        overline={date}
        title={title}
        body={body}
        link={slug}
      />
    </StyledBlogCard>
  </motion.div>
);
export default BlogCard;
