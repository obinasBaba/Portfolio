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

  .c-scrollbar {
    //display: none;
  }
  

  html {
    --dark: #02021e;
    -webkit-font-smoothing: antialiased;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    //overflow: hidden;
    
    cursor: none;
  }

  body{
    --bg-gradient: linear-gradient(to bottom, #072142, #061c37, #07182b, #061220, #020b16);
    
    &.active{
      --bg-gradient: #02021e;

    }
    
    * {
      cursor: none;
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
  
  *{
    cursor: none !important;
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



export const Main = styled( motion.main )`
  position: relative;
  flex: 1;
  width: 100%;
  
  //border: thick solid yellow;
`

