import styled, { createGlobalStyle } from 'styled-components'
import { responsiveVar } from '../../styles/commons'
import {motion} from 'framer-motion';

export const GlobalStyle = createGlobalStyle`

  ${ responsiveVar }  ;

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

  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  body {
    //overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    
    margin: 0;
    position: relative;
    color: #fff;
    background: var(--dark);
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

  &::after, &::before {
    //content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 20%;
    width: 2px;
    z-index: -999;
    box-shadow: inset 1px 1px 42px 31.25px rgba(50, 52, 77, 0.04);
  }

  &::before {
    left: initial;
    right: 20%;
  }
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