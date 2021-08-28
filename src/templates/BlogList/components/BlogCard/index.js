import React from 'react'
import CardContents from './components/CardContents'
import Thumbnail from './components/Thumbnail'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import {
  heightWidth,
  mediumUp,
  shadow,
  smallUp,
  spacing,
} from '../../../../styles/mixins'

const StyledBlogCard = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  background-clip: padding-box;
  background-image: url(${({ media }) => media});
  background-position: 80% 30%;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
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
    z-index: -1;
    
    display: block;
    overflow: hidden;
    backdrop-filter: blur(5px);
    background-image: linear-gradient(
      137.81deg,
      rgba(231, 162, 143, 0.92) 3.52%,
      rgba(249, 214, 172, 0.88) 41.89%,
      rgba(251, 254, 252, 0.88) 96.77%
    );

    ${spacing('br', 3)};
  }

  &:first-child {
    ${spacing('mt', 7)};
  }

  ${mediumUp(css`
    flex-direction: row;
    align-items: center;

    width: clamp(500px, 78vw, 800px);
    height: max-content;
    transform: translateX(0);

    ${shadow()};
    ${spacing('pv', 2.2)};
    ${spacing('ml', 1)};
  `)};
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
  )
}

export default BlogCard
