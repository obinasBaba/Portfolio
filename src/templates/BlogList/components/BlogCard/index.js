import React from 'react'
import CardContents from './components/CardContents'
import Thumbnail from './components/Thumbnail'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import {
  length,
  shadow,
  spacing
} from "@/styles/mixins";
import {largeUp, mediumUp, smallUp, xLargeUp, xxLargeUp} from "@/styles/mixins/breakpoints";

const StyledBlogCard = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(34, 45, 58, 0.2);
  
  ${spacing('br', 3)};
  ${spacing('mv', 10)};
  ${spacing('mb', 15)};

  &:before {

    content: '';
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

  ${largeUp(css`
    &:first-child {
      ${spacing('mt', 8)};
    }
  `)}

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
  
  ${xxLargeUp( css`
    width: clamp(500px, 78vw, 910px);
  ` )};
`


const BlogCard = ({
  index,
  date,
  title,
  body,
  slug,
  featuredMedia: { publicURL, childImageSharp },
}) => {
  return (
    <motion.div >
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
  )
}

export default BlogCard
