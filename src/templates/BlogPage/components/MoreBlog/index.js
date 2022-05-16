import React from "react";
import styled, { css } from 'styled-components'
import { Typography } from "@material-ui/core";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { gridColWidth, gridify, spacing } from '../../../../styles/mixins'
import ReadButton from '../../../BlogList/components/BlogCard/components/ReadButton'

const MoreBlogContainer = styled.section`
  margin: 0 auto;
  max-width: 90rem;
  height: 380px;


  ${gridify()};


  & > * {
    grid-row: 1;
  }

  @media screen and (min-width: 768px) {
    //padding-right: 4.28rem;
    //padding-left: 4.28rem;
  }


  .img-box {
    width: 100%;
    height: 100%;

    ${gridColWidth()};

    img {
      max-width: 100%;
    }
  }

  .next-titleTxt {

  }
`

const NextBlogTitle = styled.div`
  z-index: 1;
  text-align: left;
  justify-self: start;
  align-self: start;
  //border: thin solid red;
  display: flex;
  flex-flow: column;
  color: var(--theme);

  & > :first-child {
    ${spacing( 'ml', -4 )};
    ${spacing( 'mb', 2 )};
  }

  & .titleTxt {
    max-width: 20ch;
    text-align: left;
    font-weight: 900;
    color: var(--theme);
  }

  ${spacing( 'ml', 12 )};
  ${spacing( 'mt', 2 )};
  ${gridColWidth()};
`

const MetaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--theme);
  
  ${spacing( "pv", 2 )};
  ${spacing( "pr", 4 )};
`;

const MetaTxt = styled( Typography )`
  font-size: .75rem;
  letter-spacing: .5px;
  opacity: .6;
  //text-transform: uppercase;
`;

function MoreBlog({ data, slug }) {
    const { titleTxt, date, tags, thumbnail } = data
    console.log( slug )


    return (
        <MoreBlogContainer>

            <GatsbyImage className='img-box' objectFit='cover' alt="next blog" image={getImage( thumbnail )}/>

            <NextBlogTitle className='next-titleTxt'>
                <Typography>Next Up</Typography>

                <Typography variant='h2' className='titleTxt'>
                    {titleTxt}
                </Typography>

                <MetaWrapper>
                    <MetaTxt>{date}</MetaTxt>
                    <MetaTxt> #React, #Js </MetaTxt>
                </MetaWrapper>

                <ReadButton txt='Read' to={slug}
                            style={css`
                      margin-right: auto;
                      ${spacing( 'ml', 2 )};
                      ${spacing( 'mt', 1 )};
                    `}
                />

            </NextBlogTitle>

        </MoreBlogContainer>
    );
}

export default MoreBlog;
