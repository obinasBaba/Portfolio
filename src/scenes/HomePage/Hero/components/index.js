import styled, { css } from 'styled-components'
import {
  length, largeUp,
  mediumUp,
  smallUp,
  spacing, xLargeUp, text,
} from '../../../../styles/mixins'

export const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;

  //overflow: hidden;
`

export const TextContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  gap: 1rem;


  ${spacing('pl', 6)};
  ${spacing('pb', 10)};
  ${spacing('pt', 12)};


  ${ smallUp( css`
    ${spacing('pb', 0)};
    ${spacing('pl', 4)};
    justify-content: center;

  ` ) };

  ${ largeUp( css`
    ${spacing('pl', 7)}; 
    ${spacing('pb', 4)};

  ` ) };

  ${xLargeUp( css`
    ${spacing('pl', 5)}; 
  ` )};



}`

export const Greeting = styled.div`
  display: flex;
  align-items: center;

  svg {
    transform: rotate(-10deg);
    fill: var(--color);
    
    ${ spacing( 'mr', -2 ) };
    ${ spacing( 'ml', 3 ) };
    ${ spacing( 'mt', 4 ) };
    ${ spacing( 'max-width', 8.2 ) };
  }

  & > :first-child{
    word-spacing: -20px;
    text-indent: -10px;
  }
  
  & > :last-child{
    
  }

  & h1{
    font-family: 'Elianto-Regular',serif;
    margin: 0;
    padding: 0;
    line-height: 100%;
    ${text(4.8  )};


    @media (max-width: 576px) {
      font-size: clamp(30px, 15vw, 80px);
    }
    
   
  }

  ${xLargeUp( css`
      & h1{
        ${text(5.8  )};
      }
    
    svg{
      ${ spacing( 'mt', 0 ) };
      ${ spacing( 'max-width', 8.7 ) };
    }
    
    

  `)};

`

export const Intro = styled.div`
  display: flex;
  flex-flow: column;
  gap: 4rem;
  align-self: flex-start;
  
  & > :first-child {
    max-width: 20ch;
    font-weight: bold;
    opacity: .8;
    word-spacing: -5px;
    
    ${text(2.5  )};
    //color: #6c7b8a;
  }

  & > :last-child{
    text-align: right;
    letter-spacing: -1px;
    color: var(--medium);
    font-weight: bolder;
    max-width: 22ch;
    margin-left: auto;

    //font-style: italic;
    ${text(1.6 )};

  }
  
  ${xLargeUp( css`
    margin-top: 2rem;


    & > :first-child {
      max-width: 21ch;
      word-spacing: 0;

      ${text(3  )};
      //color: #6c7b8a;
    }

    & > :last-child{
      ${text(1.3 )};
    }
    
  ` )};
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
