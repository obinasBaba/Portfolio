import styled, { createGlobalStyle } from 'styled-components'
import { fpNav, responsiveVar } from '../../styles/commons'
import { motion } from 'framer-motion'

export const GlobalStyle = createGlobalStyle`

  ${responsiveVar}

  ;
  ${fpNav}

  ;

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    //height: 100%;
  }

  .c-scrollbar {
    //display: none;
  }


  html {
    -webkit-font-smoothing: antialiased;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    //overflow: hidden;

    cursor: none;
  }

  body {
    --bg-gradient: linear-gradient(to bottom, #072142, #061c37, #07182b, #061220, #020b16);

    &.active {
      --bg-gradient: #02021e;

    }

    * {
      cursor: none;
    }

    --theme: #fff;
    --stroke-bottom: #f9d6ac;
    --stroke-top: #02021e;
    --head-opacity: 0;


    --bottom-gradient: linear-gradient(to bottom,
    rgba(7, 33, 66, 0),
    rgba(6, 28, 55, 0),
    rgba(7, 24, 43, 0),
    rgba(6, 18, 32, 0),
    rgba(6, 18, 32, 0),
    rgba(6, 18, 32, 0),
    rgba(2, 11, 22, 1));
    
    --gradient: linear-gradient(0deg,
    rgba(2, 2, 30, 0.0001) 0%,
    rgba(2, 2, 30, 0) 95%);

    --head-gradient: linear-gradient(180deg,
    #fbfefc 0%,
    rgba(243, 243, 243, 0) 94%);


    &.blog-clr {
      --theme: #02021e;
      --stroke-top: #f9d6ac;
      --stroke-bottom: #02021e;
      --head-opacity: 1;
      
      --gradient: linear-gradient(180deg,
      #fbfefc 0%,
      rgba(243, 243, 243, 0) 94%);

      --bottom-gradient: linear-gradient(to bottom,
      rgba(7, 33, 66, 0),
      rgba(6, 28, 55, 0),
      rgba(7, 24, 43, 0),
      rgba(6, 18, 32, 0),
      rgba(6, 18, 32, 0),
      rgba(6, 18, 32, 0),
      #fbfefc);
    }

  }


  * {
    scrollbar-width: thin;
    scrollbar-color: #3719ca #1e213d;
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 0px;
  }

  *::-webkit-scrollbar-track {
    //background: #072142;
    background-image: linear-gradient(to bottom, #072142, #061c37, #07182b, #061220, #020b16);
    transition: background-color 1s ease-in-out;

  }

  *::-webkit-scrollbar-thumb {
    background-color: #3719ca;
    border-radius: 100px;
    transition: background-color 1s ease-in-out;
  }

  a {
    display: block;
    text-decoration: none;
    color: inherit;
    cursor: none;
  }

  * {
    cursor: none !important;
  }

  body {

    //overflow-x: hidden;

    &.locked {
      overflow: hidden;
      height: 100vh;
    }

    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    margin: 0;
    position: relative;
    color: #fff;
    //background: var(--dark);

  }

  .abyssopelagic {
    font-family: Abyssopelagic, serif;

  }

  svg#goo {
    pointer-events: none;
    position: absolute;
  }

`

export const Main = styled(motion.main)`
  position: relative;
  flex: 1;
  width: 100%;

  //border: thick solid yellow;
`
