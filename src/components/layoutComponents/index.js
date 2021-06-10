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
    
  }

  
  * {
    scrollbar-width: thin;
    scrollbar-color: #3719ca #1e213d;
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 5px;
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
  overflow: hidden;
  min-height: 100vh;
  flex-direction: column;
  
  &::after{
    content: '';
    position: absolute;;
    width: 100%;
    max-width: 1185px;
    top: -390px;
    z-index: -999;
    opacity: 0.4;
    height: 1076px;
    transform: translateY(-30%);
    background: radial-gradient(
            41.38% 40.85% at 56.08% 46.24%,
            #3719ca 0%,
            rgba(55, 25, 202, 0) 100% );
  }

`

export const Main = styled( motion.main )`
  flex: 1;
  position: relative;
  
`

export const VersionNo = styled.div`
  position: fixed;
  z-index: 9999;
  font-weight: 300;
  line-height: 1.6em;
  letter-spacing: 0.5px;
  color: gray;
  bottom: 3rem;
  text-shadow: 0.1em 0.1em 0.3em #000;
  right: 4rem;
`