/** @format */

import { createGlobalStyle, css } from 'styled-components';
import { responsiveVars, webKitInputReset } from './variables/responsiveVars';
import { mediumUp, smallUp } from './mixins/breakpoints';

export const GlobalStyle = createGlobalStyle`

  ${responsiveVars}

  ;
  ${webKitInputReset}

  ;


  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  .c-scrollbar {
    display: none;
  }


  html {
    -webkit-font-smoothing: antialiased;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    //overflow: hidden;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    color: var(--light_gray);

    //color: #fff;
    --dark-gray: #434e5e;
    --light_gray: #a4b5c0;
    --light_medium_gray: #83909a;
    --medium: #5d6c7b;

    --theme: #a4b5c0;
    --medium-blue-color: #3719ca;
    --clr-medium-blue: #3719ca;
    //color: rgb(120, 128, 158);

    --dark: #02021e;
    --stroke-bottom: var(--light_gray);
    --stroke-top: var(--dark-gray);
    --head-opacity: 0;


    --gray_gradient: linear-gradient(137.81deg,
    #566373 3.52%,
    #a4b5c0 45.89%,
    #cbd7de 100.77%);

    --orage_gradient: linear-gradient(137.81deg,
    #e7a28f 3.52%,
    #f9d6ac 41.89%,
    #fbfefc 96.77%);

    --bottom-gradient-opacity: 1;
    --btm-gradient-opacity: 1;
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

    ${mediumUp(css`
      &.no-cursor {
        & * {
          //cursor: none;
        }
      }
    `)};

    &.menu_open {
      --theme: rgba(2, 11, 22, 1);
    }

    &.blog-clr {
      //--theme: #02021e;
      --stroke-top: #f9d6ac;
      --stroke-bottom: #02021e;
      --head-opacity: 1;

      --gradient: linear-gradient(180deg,
      #fbfefc 0%,
      rgba(243, 243, 243, 0) 94%);

      --btm-gradient-opacity: 0;
      --theme: rgba(2, 11, 22, 1);
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




`;
