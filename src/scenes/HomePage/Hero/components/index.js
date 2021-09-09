import styled, { css } from 'styled-components'
import {
  length, largeUp,
  mediumUp,
  smallUp,
  spacing, xLargeUp,
} from '../../../../styles/mixins'

export const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  
  //border: thick solid teal;
  //overflow: hidden;
`

export const TextContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  //border: thin solid red;
  
  ${spacing('pl', 6)};
  ${spacing('pb', 10)};
  ${spacing('pt', 3)};


  ${ smallUp( css`
    ${spacing('pb', 0)};
    ${spacing('pl', 4)}; //smallDown
    justify-content: center; //smallDown

  ` ) };
  
  ${ largeUp( css`
    ${spacing('pl', 7)}; //smallDown
    ${spacing('pb', 4)};


  ` ) };
  
  ${xLargeUp( css`
    ${spacing('pl', 12)}; //smallDown
  ` )};
  

  & > h2 {
    margin-left: 15px;
    font-weight: bolder;
  }
  
  .job{
    ${spacing('mt', 5)};
    margin-left: 15px;
    ${ length( 'letter-spacing', .2 ) };
  }
  
}
`

export const Lines = styled.div`
  position: relative;
  height: 4px;
  border-radius: 100px;
  margin-left: 15px;
  background-image: var(--gray_gradient);
  
  ${ spacing( 'width', 9 ) };
  ${spacing('mt', 5)};



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
`

export const SvgWithTxt = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;


  svg {
    fill: var(--color);
    ${ spacing( 'mr', -4 ) };
    ${ spacing( 'max-width', 20 ) };
  }

  .enok {
    @media (max-width: 576px) {
      font-size: clamp(30px, 16vw, 100px);
    }
  }
`
