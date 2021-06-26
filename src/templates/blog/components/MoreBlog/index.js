import React from "react";
import styled from "styled-components";
import { spacing } from "../../../../styles/mixins";
import { Typography } from "@material-ui/core";

const MoreBlogContainer = styled.div`
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 90rem;
  font-family: var(--sofia-pro);
  @media screen and (min-width: 768px) {
    padding-right: 4.28rem;
    padding-left: 4.28rem;
  }
  
  border: thin solid red;
  
  ${ spacing('mb', 14) };
  
`

const MoreTitle = styled( Typography )`
  
`

const MoreBlog = ( {} ) => {
  return (
    <MoreBlogContainer>

      <MoreTitle> Other recent posts :  </MoreTitle>

      

    </MoreBlogContainer>
  );
};

export default MoreBlog;
