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
  ${spacing('pt', 3)};


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
    ${spacing('pl', 12)}; 
  ` )};


  & > h2 {
    //margin-left: 15px;
    //font-weight: bolder;
  }

}`

export const Greeting = styled.div`
  display: flex;
  align-items: center;

  svg {
    transform: rotate(-10deg);

    fill: var(--color);
    ${ spacing( 'mr', -2.8 ) };
    ${ spacing( 'ml', 3 ) };
    ${ spacing( 'mt', 5 ) };
    ${ spacing( 'max-width', 10 ) };
  }

  & > :first-child{
    word-spacing: -20px;
  }

  & h1{
    font-family: 'Elianto-Regular',serif;
    margin: 0;
    padding: 0;
    line-height: 100%;

    @media (max-width: 576px) {
      font-size: clamp(30px, 15vw, 80px);
    }
  }

`

export const Intro = styled.div`
  display: flex;
  flex-flow: column;
  gap: 2rem;
  align-self: flex-start;
  
  & > :first-child {
    max-width: 20ch;
    font-weight: bolder;
    opacity: .8;
    word-spacing: -5px;
    
    ${text(2.8)};
    //color: #6c7b8a;
  }

  & > :last-child{
    text-align: right;
    letter-spacing: -1px;
    color: var(--medium);
    font-style: italic;

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
