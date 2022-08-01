import React from "react";
import Typography from "@material-ui/core/Typography";
import styled, { css } from "styled-components";
import { spacing, text, title } from "@/styles/mixins";
import ReadButton from "./ReadButton";
import { largeUp } from "@/styles/mixins/breakpoints";

const MetaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
    // ${spacing( "ph", 2 )};
`;

const MetaTxt = styled( Typography )`
  font-size: .75rem;
  letter-spacing: .5px;
  opacity: .6;
  //text-transform: uppercase;
`;

const Heading = styled( Typography )`
  font-weight: 900;
  line-height: 1;
  letter-spacing: 0;

  a {
    text-decoration: none;
    color: inherit;
  }

  ${spacing( "mt", 2.5 )};

  ${largeUp( css`
    ${spacing( "mt", 1.5 )};

    ${title( 2 )};

  ` )};

`;

const Excerpt = styled( Typography )`
  //flex: 1;
  color: rgba(0, 0, 0, .7);
  line-height: 1.4;


    // ${text( 1 )};
  ${spacing( "mt", 2.5 )};

`;


const ContentWrapper = styled.div`
  position: relative;
  z-index: 11;

  flex: 1.5;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-self: stretch;

  color: #02021e;

  ${spacing( "pv", 2 )};
  ${spacing( "ph", 3 )};

  ${largeUp( css`
    padding-bottom: 0;
  ` )};

`;


const CardContents = ( { index, overline, title, body, link, tags } ) => {

  return (
    <ContentWrapper>


      <MetaWrapper variant="subtitle2" color="textSecondary">
        <MetaTxt>{overline}</MetaTxt>
        <MetaTxt> #React, #Js </MetaTxt>
      </MetaWrapper>

      <Heading variant="h3"> <a rel="noreferrer" target="_blank" href={link}>{title}</a> </Heading>

      <Excerpt variant="body1" gutterBottom>{body}</Excerpt>

      <ReadButton index={index} txt="read" to={link}

      />

    </ContentWrapper>
  );
};

export default CardContents;
