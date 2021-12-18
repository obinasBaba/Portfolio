import React, {useContext, useEffect, useState} from 'react'
import styled, { css } from 'styled-components'
import { Container, useMediaQuery, useTheme } from "@material-ui/core";
import {
  length,
  largeUp,
  spacing,
  smallUp,
  xLargeUp, xxLargeUp
} from "../../../../styles/mixins";
import HeadlineTitle from '../../../../components/Headline'
import {
  AppStateContext
} from "../../../../contexts/AppStateContext";
import {useTransform} from 'framer-motion'
import {motion} from 'framer-motion'
import { MotionValueContext } from "../../../../contexts/MotionStateWrapper";
import LoadStateContext from "../../../../contexts/LoadStateContext";

const TitleContainer = styled(Container)`
  display: flex;
  flex-flow: column;
  align-items: center;
/*@include hl-margin(bottom, 100px);
@include hl-padding(top, 75px);*/
  
  ${ spacing( 'mb', 11 )};
  ${ spacing( 'pt', 7.5 ) };
`

const LogoLink = styled.a`
  position: relative;
  margin-left: auto;
  display: none;
  justify-content: center;
  align-items: center;
  
  ${ length('width', 12) };
  
  ${ smallUp( css`
    display: flex;
    margin-right: -30px;
  ` ) };
  
  ${xxLargeUp( css`
    margin-right: -100px;
  ` )};
  
  img{
    object-fit: cover;

  }
  
  .circledText{
    //width: 100%;
    ${ length('width', 12) };
  }
  
  .dribbleRed{
    width: 100%;
    //display: none;

    position: absolute;
    transition: transform 1s ease;
    will-change: transform;
    max-width: 3.18rem;
  }
  
  &:hover{
    & .dribbleRed{
      transform: rotate(360deg);
      filter: invert(52%) sepia(26%) saturate(5887%) hue-rotate(303deg) brightness(81%);
    }
  }
  
  
  
`

const Title = ({ dribbleRed, circledText }) => {

  const { moScroll } = useContext(MotionValueContext)

  const rotate = useTransform(moScroll.y, [200, 2000], [0, 360])
  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.up('xxl'))

  // const {recentDesign, setRecentDesign} = useContext( LoadStateContext )

  return (
    <TitleContainer maxWidth={ match ? 'xl' : 'lg'}  >
      <LogoLink
        href='href="https://dribbble.com/henok500'
        rel="noopener noreferrer"
        target="_blank"
      >
        <motion.img
          alt="Web App, Mobile"
          loading="lazy"
          src={circledText}
          className="circledText"
          style={{rotate}}
          // onViewportEnter={entry => {
          //   if ( !recentDesign )
          //     setRecentDesign(true)
          // }}
        />

        <img
          loading="lazy"
          alt="Web App, Mobile"
          src={dribbleRed}
          className="dribbleRed"
        />
      </LogoLink>


      <HeadlineTitle title='Designs' subtitle='Recent Designs' />

    </TitleContainer>
  )
}

export default Title
