import React from 'react'
import styled, { css } from 'styled-components'
import {
  heightWidth,
  largeUp,
  mediumDown,
  mediumUp,
  smallDown,
  smallUp,
  spacing,
  text,
  title,
  xxLargeUp,
} from '../../../../styles/mixins'
import { Container } from '@material-ui/core'
import BackArrow from './BackArrow'

const ArticleContainer = styled.div`
  position: relative;

  ${ spacing( "pt", 22 ) };
  ${ spacing( "pb", 10 ) };
  ${ spacing( "mt", -16 ) };

  color: var(--dark);
  

`;

const ArticleWrapper = styled ( Container ) `
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 20px;

  ${ xxLargeUp( css`
    max-width: 900px;
  ` ) };

  & > :not(figure) {
    width: auto;
    margin: auto;
    max-width: 100%;

    ${ largeUp( css`
      max-width: 720px;
    ` ) };

    ${ xxLargeUp( css`
      max-width: 900px;
    ` ) };

  }


  blockquote{
    max-width: 35rem;
    margin: 2.75rem auto;
    //border: thin solid red;

    ${ smallUp(css`
      margin: 4.2rem auto 1.18rem ;

    `) };

    ${ mediumDown(css`
      max-width: 100%;
    `) };

    p {
      ${ text(1.4) };
      color: blue;
      text-align: right;

    }

    em{
      ${ text(1.13) };

      //color: inherit;
      opacity: .8;
    }

    cite {
      display: flex;
      align-items: center;
      font-weight: 300;
      line-height: 160%;
      letter-spacing: 0.5px;
      ${ text(1.13) };
      font-style: normal;
      color: rgba(0 0 0 / 70%);

      > span {
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 1rem;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

  }

  h2{
    ${title(1.9)};
    line-height: 1.3; 
    font-weight: bold;
    letter-spacing: -0.2px;
    margin-top: calc(3rem * var(--size));
    margin-bottom: calc(.7rem * var(--size));
    
    ${ smallUp(css`
      margin-top: calc(3.7rem * var(--size));
      margin-bottom: calc(1rem * var(--size));
      line-height: 45px;
      letter-spacing: 0.5px;

    `) };
    
  }

  h3 {
    ${title(1.65)};
    font-weight: bold;
    margin-top: calc(2.5rem * var(--size));
    margin-bottom: calc(1rem * var(--indent));

    ${ smallUp( css`
      line-height: 160.6%;
      letter-spacing: 0.5px;
    ` ) };
  }

  h4 {
    ${title(1.65)};
    line-height: 35px;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 1rem;
    letter-spacing: 0.5px;
  }

  p {

    line-height: 1.582 !important;
    font-weight: 300;
    letter-spacing: 0.1px;
    margin-bottom: calc(1.5rem * var(--size));

    ${ text(1.015) };


    ${ mediumUp( css`
      letter-spacing: .5px;
      line-height: 149%;

    ` ) };

  }

  ul, ol {
    list-style: none;
    font-weight: 300;
    letter-spacing: 0.5px;
    padding-left: 10px;
    margin-bottom: calc(1.5rem * var(--size));

    ${ text(1.135) };


    & > li {
      position: relative;
      word-break: break-word;

      ${ spacing('mb', 2.5) };
      ${ heightWidth('padding-left', 2) };

      &:before {
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }

  ul {

    & > li {

      &:before {
        font-family: 'shapes', serif;
        ${text(.6)};
        line-height: 400%;
        content: 'h';
      }
    }
  }

  ol {
    counter-reset: list-number;

    & > li {
      counter-increment: list-number;

      &:before {
        content: counter(list-number) '.';
      }
    }
  }

  a {
    ${ text(1.07) };
    line-height: 1.5;
    font-weight: 300;
    letter-spacing: 0.3px;
    color: rgb(0, 0, 238);
    //white-space: pre-wrap;
    //overflow-wrap: break-word;
    word-break: break-all;

    &:hover {
      text-decoration: underline;
    }
  }

  strong {
    font-weight: 600;
  }

  img{
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }

  em{
    text-align: right;
    padding: 5px;
  }

  ${ smallDown( css`

    .gatsby-resp-image-wrapper{
      width: calc( 100% + 20px );
      transform: translateX(-10px);
    }

  ` ) };
`;


const Article = ({ html }) => {
  return (
    <ArticleContainer>

      <BackArrow/>


      <ArticleWrapper dangerouslySetInnerHTML={ { __html: html } }
                      fixed={true}
                      maxWidth={'md'}
                      disableGutters={false}
                      className='article-wrapper' />

    </ArticleContainer>
  );
};

export default Article;
