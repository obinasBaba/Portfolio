import React from "react";
import styled, { css } from "styled-components";
import { mediumUp, smallDown, smallUp, spacing, text } from "../../../../styles/mixins";
import { Container, Typography } from "@material-ui/core";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const HeadLineContainer = styled( Container )`
  //border: thick solid red;
  max-width: 1600px;
  font-family: var(--sofia-pro);
  ${ spacing( "mt", 15 ) };

  display: flex;
  flex-flow: column;


  & > .tags{
    display: flex;
    max-width: min-content;
    margin-left: auto;
    margin-right: -18px;
    
    ${ mediumUp( css`
      display: none;
    ` ) };
  }
`;

const TextAlign = styled( Container )`
  display: flex;
  flex-flow: column;
  //outline: thin solid blue;


  ${ mediumUp( css`
    ${ spacing( "ph", 8 ) };
  ` ) };

`;

const ImageBox = styled.div`
  max-width: 1060px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-height: 530px;
  width: calc( 100% + 48px );
  transform: translateX(-24px);



  ${ mediumUp( css`
    width: calc( 100% );
    transform: translateX(0);
  ` ) };


  & .img-container {
    width: 100%;
  }

  img {
    display: block;
    max-width: 100%;
    width: 100%;
    object-fit: cover;
  }
  
`;


const Title = styled( Typography )`
  ${ spacing( "mt", 1.6 ) };
  ${ spacing( "mb", 4 ) };
  font-size: calc( 4rem * var(--indent) );

  font-weight: 900;
  line-height: 1.25em;
  text-transform: capitalize;
  text-align: center;
  letter-spacing: -.4px;
  
  ${ smallUp( css`
    font-size: calc( 4.3rem * var(--indent) );
    letter-spacing: 1px;

  ` ) };
`;


const DateAndTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${ spacing( "mb", 4 ) };
 
  font-family: var(--gramatika);
  letter-spacing: .2px;


  ${ mediumUp( css`
    ${ spacing( "ph", 3 ) };
    letter-spacing: 1px;
    justify-content: space-between;

  ` ) };

  .published-date{
    
  }
  
  .tags{
    width: min-content;
    display: none;
    
    ${ mediumUp( css`
      display: flex;
    ` ) };
  }
  
`;

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-family: var(--sofia-soft);
  font-weight: 900;
  letter-spacing: 1px;
  line-height: 1.55em;
  ${ spacing( "mb", 3 ) };

  
  
  .link {
    text-decoration: none;

    &:hover {
      color: greenyellow;
      transition: 0.4s;
    }
  }
  
  a{
    color: blueviolet;
  }

  
`;


const HeadLine = ({ categories, title, imgData, date, tags, thumbnail }) => {


  return (
    <HeadLineContainer>


      <TextAlign maxWidth="lg" fixed={ true } disableGutters={ true }>
        <Title variant="h1"> { title } </Title>
        <DateAndTags>
          <Typography variant='subtitle2' noWrap={true}
                      className='published-date' > { date }  &#183; &#128339;30 min read    </Typography>

          <div className='tags'>
            {
              tags
                .map(( {tag}, i ) => <Typography variant='subtitle2' noWrap={true}
                                                 key={i}>{`${tag},`}&nbsp;</Typography>)
            }
          </div>
        </DateAndTags>

        <Category>
          <Typography variant={"subtitle2"} className="all-posts">
            <Link to="/">
              Home
            </Link>
          </Typography>
          <span>&nbsp;/&nbsp;</span>
          <Typography variant={"subtitle2"}   className="all-posts">
            <Link to="/blog">
              Articles
            </Link>
          </Typography>
          <span>&nbsp;/&nbsp;</span>
          <Typography variant={"subtitle1"}  className="item">
            <Link to="/blog">
              2021-06 ...
            </Link>
          </Typography>
        </Category>
      </TextAlign>

      <ImageBox>
        <GatsbyImage alt={ "thisis sk si s" } image={ getImage( thumbnail ) } className="img-container" />
      </ImageBox>


    </HeadLineContainer>
  );
};

export default HeadLine;
