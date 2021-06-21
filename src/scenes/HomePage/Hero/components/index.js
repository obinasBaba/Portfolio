import styled, {css} from 'styled-components'
import {
  heightWidth,
  smallDown,
  smallUp,
  spacing,
} from '../../../../styles/mixins'

export const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`

export const TextContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  //border: thin solid red;
  
  ${spacing('pl', 6)};
  ${spacing('pb', 17)};


  ${ smallUp( css`
    ${spacing('pb', 0)};
    ${spacing('pl', 12)}; //smallDown
    justify-content: center; //smallDown

  ` ) };
  

  & > h2 {
    margin-left: 15px;
    font-weight: bolder;
  }
  
  .job{
    ${spacing('mt', 5)};
    margin-left: 15px;
    ${ heightWidth( 'letter-spacing', .2 ) };
  }
  
}
`

export const Lines = styled.div`
  position: relative;
  height: 4px;
  border-radius: 100px;
  background-image: linear-gradient(
          137.81deg,
          #e7a28f 13.52%,
          #f9d6ac 41.89%,
          #fbfefc 110.77%
  );
  
  ${ spacing( 'width', 9 ) };
  ${spacing('mt', 5)};
  margin-left: 15px;



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
    fill: white;
    ${ spacing( 'mr', -4 ) };
    ${ spacing( 'max-width', 20 ) };
  }

  .enok {
    @media (max-width: 576px) {
      font-size: clamp(30px, 16vw, 100px);
    }
  }
`
