import React from 'react'
import { Container, Typography } from '@material-ui/core'
import styled, { css } from 'styled-components'
import { mediumUp, spacing, text } from '../../../../styles/mixins'

const ArticleCardWrapper = styled( Container )`
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


const BlogListContainer = ({ children}) => {
  return (

      <ArticleCardWrapper fixed={ false } maxWidth={ "lg" }>

        <MyArticles variant="h1">
          My Articles
        </MyArticles>

        { children }

      </ArticleCardWrapper>

  );
};

export default BlogListContainer;
