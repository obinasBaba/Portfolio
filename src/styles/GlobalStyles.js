import {createGlobalStyle, css} from 'styled-components'
import ResponsiveVars from './variables/ResponsiveVars'
import {smallUp} from './mixins'

export const GlobalStyle = createGlobalStyle`

  ${ResponsiveVars};

  canvas[resize] {
    width: 100%;
    height: 100%;
  }

  & .canvas {
    display: none;
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: var(--cIndex);
    pointer-events: none;
    //border: thin solid blue;
    
    ${smallUp(css`
      display: block;
    `)};
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    //height: 100%;
  }

  .c-scrollbar {
    display: none;
  }


  html {
    -webkit-font-smoothing: antialiased;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    //overflow: hidden;

    
    ${smallUp( css`
      & *{
        //cursor: none;
      }
    ` )};
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    color: #fff;

    

    --theme: #a4b5c0;
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
    rgba(250, 222, 188, 0.8) 0%,
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
      rgba(251, 254, 252, 0));
    }

    --cIndex: 20;

    &.canvas-hover {
      --cIndex: 10;
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

  a {
    display: block;
    text-decoration: none;
    color: inherit;
    cursor: none;
  }



`
