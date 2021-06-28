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
  margin: auto;
  box-shadow: 0 5px 20px rgba(34, 45, 58, 0.2);
  position: relative;
  //width: 30%;
  flex-basis: 40%;

  display: flex;
  flex-direction: column;
  align-items: center;
  //backdrop-filter: blur(10px);
  //background-color: rgba( 255, 255, 255 , .2);
  //border: solid 2px transparent;
  background-clip: padding-box;
  background-image: url(${({ media }) => media});
  background-position: 80% 1%;
  background-repeat: no-repeat;
  background-size: cover;

  ${spacing('br', 3)};
  ${spacing('mv', 10)};
  ${spacing('mb', 15)};

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    ${spacing('br', 3)};
    backdrop-filter: blur(10px);
    background-image: linear-gradient(
      137.81deg,
      rgba(231, 162, 143, 0.92) 3.52%,
      rgba(249, 214, 172, 0.88) 41.89%,
      rgba(251, 254, 252, 0.88) 96.77%
    );
    overflow: hidden;
    //z-index: -1;
  }

  &::after {
    //content: '';
    display: none;
    position: absolute;
    width: 100%;
    transform: translateX(-50%);
    background-color: rgba(191, 191, 191, 0.9);
    height: 1px;
    left: 50%;

    ${spacing('bottom', -7.5)};

    ${smallUp(css`
      display: initial;
    `)};
  }

  &:first-child {
    ${spacing('mt', 7)};
  }

  ${mediumUp(css`
    flex-direction: row;
    width: clamp(500px, 78vw, 800px);
    //height: 450px;
    ${heightWidth('height', 45)}
    transform: translateX(0);

    ${shadow()};
    ${spacing('pv', 3)};
    ${spacing('ml', 1)};
  `)};
`

const topVariant = {
  initial: {},
  hover: {},
}

const innerVariant = {
  initial: {
    scale: 1,
    x: 0,
  },
  hover: {
    /*x: 1,
    y: 1,
    scale: 0.99,
    ['box-shadow']: '0 4px 20px 0 rgba(0, 0, 0, 0.12)',
    transition: {
      ease: 'easeOut',
      type: 'tween',

      ['box-shadow']: {
        type: 'tween',
        duration: 0.05,
      },
    },*/
  },
}

const BlogCard = ({ date, title, body, slug, featuredMedia: {publicURL, childImageSharp} }) => {
  return (
    <motion.div variants={topVariant} initial="initial" whileHover="hover">

      <StyledBlogCard variants={innerVariant} media={publicURL}>
        <Thumbnail media={childImageSharp} link={slug} />
        <CardContents overline={date} title={title} body={body} link={slug} />
      </StyledBlogCard>

    </motion.div>
  )
}

export default BlogCard
