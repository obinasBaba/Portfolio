import {createGlobalStyle, css} from 'styled-components'
import ResponsiveVars from './variables/ResponsiveVars'
import {smallUp} from './mixins'

export const GlobalStyle = createGlobalStyle`

  ${ResponsiveVars}

  ;

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


    ${smallUp(css`
      & * {
        cursor: none;
      }
    `)};
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    color: var(--light_gray);
    //color: #fff;
    --dark-gray: #434e5e;
    --light_gray: #a4b5c0;
    --medium: #5d6c7b;


    --gray_gradient: linear-gradient(137.81deg,
    #566373 3.52%,
    #a4b5c0 45.89%,
    #cbd7de 100.77%);

    --orage_gradient: linear-gradient(137.81deg,
    #e7a28f 3.52%,
    #f9d6ac 41.89%,
    #fbfefc 96.77%);


    --theme: #a4b5c0;
    //--theme: #fff;
    --stroke-bottom: var(--light_gray);
    --stroke-top: #434e5e;
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


  /* Change Autocomplete styles in Chrome*/
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    //border: none;
    //-webkit-text-fill-color: transparent;
    //-webkit-box-shadow: none;
    //transition: none;
    //
    //appearance: none;
    //background-image: none !important;
    //background-color: transparent !important;
    //color: transparent !important;
    background-color: red !important;
    background-image: none !important;

    appearance: none !important;
    -moz-appearance: none !important;
    -webkit-appearance: none !important;

    -webkit-box-shadow: none !important;

    -webkit-text-fill-color: #a4b5c0 !important;

  }


  @-webkit-keyframes autofill {
    0%,100% {
      color: #666;
      background: transparent;
    }
  }

  input:-webkit-autofill {
    -webkit-animation-delay: 1s; /* Safari support - any positive time runs instantly */
    -webkit-animation-name: autofill;
    -webkit-animation-fill-mode: both;
  }
   
  
`
