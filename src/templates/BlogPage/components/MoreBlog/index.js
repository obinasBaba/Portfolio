import React from "react";
import styled from "styled-components";
import {gridColWidth, gridify, spacing} from '../../../../styles/mixins'
import { Typography } from "@material-ui/core";
import {GatsbyImage, getImage} from 'gatsby-plugin-image'

const MoreBlogContainer = styled.section`
  margin: 0 auto;
  max-width: 90rem;
  height: 380px;
  border: thin solid red;


  ${gridify()};
  place-items: center;
  
  & > *{
     grid-row: 1;
  }
  
  @media screen and (min-width: 768px) {
    //padding-right: 4.28rem;
    //padding-left: 4.28rem;
  }
  
  
  .img-box{
    width: 100%;
    height: 100%;
    
    ${gridColWidth()};
    
    img{
      max-width: 100%;
    }
  }
  
  .next-title{
    
  }
`

const NextBlogTitle = styled.div`
  z-index: 1;
  text-align: left;
  justify-self: start;
  align-self: start;
  
  & > :first-child{
    max-width: 20ch;
    text-align: left;
    font-weight: 900;
    color: var(--theme);
  }
  
  ${spacing('ml', 10)};
  ${spacing('mt', 7)};
  ${gridColWidth()};
`

const MoreBlog = ( {data} ) => {
  const { title, date, tags, thumbnail } = data
  console.log(title)


  return (
    <MoreBlogContainer data-scroll-section>

      <GatsbyImage className='img-box' objectFit='cover' alt={'next blog'} image={getImage(thumbnail)}/>
      <NextBlogTitle className='next-title' >
        <Typography variant='h2'>
          {title}
        </Typography>
      </NextBlogTitle>

    </MoreBlogContainer>
  );
};

export default MoreBlog;
