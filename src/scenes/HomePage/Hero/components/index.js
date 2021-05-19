import styled, { css } from 'styled-components'
import { Container } from '@material-ui/core'
import {
  gridColWidth,
  gridify,
  largeUp,
  smallUp,
} from '../../../../styles/mixins'
import H from '../H.inline.svg'

export const HeroContainer = styled(Container)`
  position: relative;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  min-height: 80vh;
  ${gridify()};

  & > .hero-pic {
    display: none;
    grid-row: 1/2;
    border-radius: 1rem;
    max-width: 300px;
    
    ${gridColWidth(40, 65)};
    
    ${smallUp(css`
      display: block;
    `)};

    ${largeUp(css`
      ${gridColWidth(42, 60)};
    `)};
  }
`

export const TextContainer = styled.div`
  z-index: 99;
  grid-row: 1/2;
  display: grid;
  align-items: center;
  align-content: center; 
  grid-gap: 1rem;
  ${ gridColWidth(  ) };
  
  ${ smallUp( css`
    ${ gridColWidth(1, 46) };

  `)};
  
  & > h2 {
    margin-left: 15px;
  }
`

export const SvgWithTxt = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  svg {
    fill: white;
    margin-right: -33px;
    max-width: 200px;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-flow: column;
  
  & > :nth-child(1){
    display: block;
    flex: 1;
   
    @media (max-width: 576px ){
      font-size: clamp( 56px, 18.3vw, 100px );
    }
    
  }
  
  & > :nth-child(2){
    margin-left: auto;
    margin-right: 30px;
    margin-top: -10px;
  }
`;

export const SvgEffect = styled( H )`
  position: absolute;
  width: 500px;
  fill: ${(( { theme }) => theme.palette.secondary.main )};
  opacity: .1;
  transform: translateX( 45vw );
  ${ smallUp( css`
    display: none;
  ` ) };
`