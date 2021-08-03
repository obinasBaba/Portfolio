import styled, { createGlobalStyle } from 'styled-components'
import {fpNav, responsiveVar} from '../../styles/commons'
import {motion} from 'framer-motion';

export const GlobalStyle = createGlobalStyle`

  ${ responsiveVar }  ;
  ${ fpNav }  ;

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    //height: 100%;
  }

  html {
    --dark: #02021e;
    -webkit-font-smoothing: antialiased;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    
    //cursor: none;
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
  }

  body {
    
    //overflow-x: hidden;
    
    &.locked{
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
  
  .abyssopelagic{
    font-family: Abyssopelagic,serif;
    
  }
  
`

export const Page = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  flex-direction: column;

  .circle-cursor {
    position: fixed;
    left: 0;
    top: 0;
    pointer-events: none;

    &--outer {
      width: 100vw;
      height: 100vh;
      z-index: 12000;
    }

    &--inner {
      width: 10px;
      height: 10px;
      left: -5.2px;
      top: -5.2px;
      border-radius: 50%;
      z-index: 11000;
      background: #2c00ff;
    }
  }
`

export const Main = styled( motion.main )`
  flex: 1;
  position: relative;
`

