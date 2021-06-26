import React from "react";
import { Container, Typography } from "@material-ui/core";
import styled, { css } from "styled-components";
import {largeUp, mediumUp, smallUp, spacing, text} from '../../../../styles/mixins'

const ArticleCardWrapper = styled( Container )`
  display: flex;
  //flex-flow: column;
  gap: 1rem;
  flex-flow: wrap;
  border: 2px dashed red;

  ${ spacing('mt', 16) };
`;

const MyArticles = styled( Typography )`
  flex: 1 1;
  ${ text(4) };
  
  ${ mediumUp( css`
    ${ text(5) };
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
