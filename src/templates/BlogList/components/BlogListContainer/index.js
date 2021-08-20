import React from 'react'
import { Container, Typography } from '@material-ui/core'
import styled, { css } from 'styled-components'
import { mediumUp, spacing, text } from '../../../../styles/mixins'
import {motion} from 'framer-motion'
import Moon from '../../../../layouts/Components/Moon'

const BlogListContainer = styled( Container )`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  //border: thin solid red;

  ${ spacing('mt', 10) };
`;

const MyArticles = styled( Typography )`
  align-self: flex-start;
  color: transparent;
  -webkit-text-stroke: 1.5px white;
  font-family: Bodoni, sans-serif;



  ${ text(4) };
  
  ${ mediumUp( css`
    ${ text(6) };
  ` ) }
`;

const BlogListWrapper = styled( motion.div )`
  //border: thin solid rebeccapurple;
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-flow: column;
  
  & > :not(:first-child){
    margin-left: auto;
  }
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

      <BlogListContainer fixed={ false } maxWidth={ false}>

        <Moon showMoon={false} pos='fixed' />

        <BlogListWrapper variants={wrapperVariant}
                    transition={transition}
                    initial='initial'
                    animate='animate'
                    exit='exit'
        >

          <MyArticles variant="h1">
            My Articles
          </MyArticles>

          { children }

        </BlogListWrapper>

      </BlogListContainer>

  );
};

export default BlogList;
