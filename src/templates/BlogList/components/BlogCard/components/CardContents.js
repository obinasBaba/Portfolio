import React from 'react'
import Typography from '@material-ui/core/Typography'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import {spacing, text} from '../../../../../styles/mixins'
import { Button } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent'
import MotionBtn from '../../../../../components/MotionBtn'
import ReadButton from './ReadButton'
import {largeUp, smallDown, smallUp} from "../../../../../styles/mixins/breakpoints";

const MetaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // ${ spacing( "ph", 2 ) };
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

  ${ spacing( "mt", 2.5 ) };
  
  ${largeUp( css`
    ${ spacing( "mt", 1.5 ) };
  ` )};

`;

const Excerpt = styled( Typography )`
  //flex: 1;
  color: rgba(0, 0, 0, .7);
  line-height: 1.4;


  ${ text( 1 ) };
  ${ spacing( "mt", 2.5 ) };

`;




const ContentWrapper = styled.div `
  position: relative;
  z-index: 11;
  
  flex: 1.5;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-self: stretch;
  
  color: #02021e;

  ${ spacing( "pv", 2 ) };
  ${ spacing( "ph", 3 ) };
  
  ${largeUp( css`
    padding-bottom: 0;
  ` )};
 
`;


const CardContents = ({ index, overline, title, body, link, tags }) => {

  return (
    <ContentWrapper>


      <MetaWrapper variant="subtitle2" color="textSecondary">
        <MetaTxt>{ overline }</MetaTxt>
        <MetaTxt> #React, #Js </MetaTxt>
      </MetaWrapper>

      <Heading variant="h3"
      > <Link to={ link }>{ title }</Link> </Heading>

      <Excerpt gutterBottom={ true }>{ body }</Excerpt>

      <ReadButton index={index} txt='read' to={link}

      />

    </ContentWrapper>
  );
};

export default CardContents;