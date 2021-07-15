import React from 'react'
import { Container, Typography } from '@material-ui/core'
import styled, { css } from 'styled-components'
import { mediumUp, spacing, text } from '../../../../styles/mixins'
import {motion} from 'framer-motion'

const BlogListContainer = styled( Container )`
  display: flex;
  flex-flow: column;
  align-items: center;

  ${ spacing('mt', 12) };
`;

const MyArticles = styled( Typography )`
  align-self: flex-start;
  color: transparent;
  -webkit-text-stroke: 1.5px white;
  
  ${ text(4) };
  
  ${ mediumUp( css`
    ${ text(6) };
  ` ) }
`;

const BlogListWrapper = styled( motion.div )`

`

const wrapperVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1
  },
  exit: {
    opacity: 0,
  }
}

const transition = {
  duration: 1,
  ease: [0.6, 0.01, 0, 0.9],

}

const BlogList = ({ children}) => {
  return (

      <BlogListContainer fixed={ false } maxWidth={ "lg" }>

        <motion.div variants={wrapperVariant}
                    transition={transition}
                    initial='initial'
                    animate='animate'
                    exit='exit'
        >

          <MyArticles variant="h1">
            My Articles
          </MyArticles>

          { children }

        </motion.div>

      </BlogListContainer>

  );
};

export default BlogList;
