import styled, { css } from 'styled-components'
import {
  gridColWidth,
  gridify,
  largeUp,
  mediumUp,
  smallUp,
  spacing,
  text,
  xxLargeUp,
} from '../../../../styles/mixins'
import { motion } from 'framer-motion'

export const HeroContainer = styled(motion.section)`
  position: relative;
  z-index: 1;
  height: 100vh;
  width: 100%;

  ${gridify()};
`

export const TextContainer = styled( motion.div )`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  //padding-bottom: 15%;
  z-index: 2;
  
  ${ gridColWidth() };
  grid-row: 2 / 3;

  ${spacing('gap', 2)};
  ${spacing('ph', 3)};

  @media(min-width: 800px) {
    grid-row: initial;
    align-items: flex-start;


    ${spacing('pb', 0)};
    ${spacing('pl', 4)};
    ${spacing('pr', 0)};
    
    justify-content: center;
  }
  

  ${ largeUp( css`
    ${spacing('pl', 11)}; 
    ${spacing('pt', 3)};

  ` ) };

  ${xxLargeUp( css`
    ${spacing('pl', 3)}; 
    
  ` )};



}`

export const Greeting = styled( motion.div )`
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${mediumUp( css`
    justify-content: flex-start;
  ` )};

  svg {
    transform: rotate(-10deg);
    fill: var(--color);
    
    ${ spacing( 'mr', -1 ) };
    ${ spacing( 'ml', 3 ) };
    ${ spacing( 'max-width', 11 ) };
    

    ${largeUp( css`
      ${ spacing( 'mr', -2 ) };
    ` )};
    
    ${xxLargeUp( css`
      ${ spacing( 'max-width', 12 ) };
    ` )};
   
  }

  & > :first-child{
    word-spacing: -20px;
  }

  & h1{
    font-family: 'Elianto-Regular',serif;
    margin: 0;
    padding: 0;
    line-height: 100%;
    font-size: clamp(35px, 15vw, 80px);

    @media (max-width: 576px) {
      font-size: clamp(30px, 14vw, 80px);
    }
    
    ${xxLargeUp( css`
      ${text(5.8  )};
    `)};
  }

`

export const Intro = styled( motion.div )`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  ${mediumUp( css`
    justify-content: flex-start;
    align-items: flex-start;
    max-width: max-content;
  ` )};

  ${ spacing( 'gap', 4 ) };
  ${ spacing( 'mt', 1 ) };

  ${xxLargeUp( css`
    margin-top: 2rem;
    ${ spacing( 'gap', 7 ) };

  ` )};


  & .intro-txt {
    max-width: 23ch;
    font-weight: bold;
    color: var(--light_medium_gray);
    text-align: center;
    
    @media(max-width: 400px){
      ${text(2.2  )};
    }

    ${smallUp( css`
      ${text(2.7  )};
    ` )};

    ${mediumUp( css`
      text-align: initial;
      ${text(2.5  )};
    ` )};
    
    ${xxLargeUp( css`
      max-width: 21ch;
      word-spacing: 0;

      ${text(3  )};
    ` )};
  }

  & > .quote{
    text-align: right;
    letter-spacing: -1px;
    color: var(--light_medium_gray);
    font-weight: bolder;
    max-width: 22ch;
    margin-left: auto;

    ${text(1.2 )};
    
    
    ${mediumUp( css`
      max-width: 21ch;
      word-spacing: 0;

      ${text(1.3  )};
    ` )};
  }
  
  
`

export const Lines = styled.div`
  position: relative;
  height: 4px;
  border-radius: 100px;
  margin-left: 15px;
  background-image: var(--gray_gradient);
  
  ${ spacing( 'width', 9 ) };
  // ${spacing('mv', 6)};
  
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: inherit;
    border-radius: 100px;
    margin-top: 1.2rem;
    top: 0;
    left: 50%;
  }
`
