import styled, {css} from 'styled-components'
import {mediumUp, spacing} from '../../../styles/mixins'
import {Container, Typography} from '@material-ui/core'
import {motion} from 'framer-motion'

export const Role = styled( motion.ul )`
  display: flex;
  align-items: center;
  text-align: center;
  flex-flow: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
  //display: none;
  //visibility: hidden;

  ${spacing('mb', 7)};

  ${mediumUp(
  css`
      flex-flow: row;
      justify-content: space-evenly;
    `
)};
  
  li{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const HeadlineContainer = styled( motion.div )`
  display: flex;
  flex-flow: column;
  max-width: 1200px;
  margin: 0 auto;
  border: thick solid yellow;
  ${ spacing('ph', 3) };
 
  
  ${ mediumUp( css`
    ${ spacing('ph', 1) };
  ` ) }
`

export const Q = styled(Typography)`
  //font-family: var(--sofia-pro);
  color: #d94b19;
  line-height: 120%;
  font-weight: 500;
  max-width: 130px;
  letter-spacing: 1px;


`

export const A = styled( Typography )`
  line-height: 160%;
  letter-spacing: 0.5px;
  opacity: 0.7;
  padding-left: 7px;
`

export const ImgGradient = styled( motion.div )`
  width: 100%;
  z-index: 11;
  position: relative;
  box-shadow: 0 5px 20px 10px rgba( 0 0 0 / 15%);
  transition: all .3s;
  border: thick solid red;
  //transform: translateY( -200px ) scale(.7) ;
  
  img{
    min-height: 300px;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 1s;
    background-image: linear-gradient(to bottom, 
      rgba(50,52,77,0.89) -40%,
    rgba(2, 2, 30, 0) 80%);
    
    z-index: 12;
    //backdrop-filter: blur(2px);
  }

`

export const Title = styled(motion.div)`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-90%) translateX(-50%);
  z-index: 13;


  ${spacing('mb',
          9)}
  & > :first-child {
    line-height: 1.29;
    ${ spacing('letter-spacing', 3) };
    text-transform: uppercase;
  }

  & > :last-child {
    margin-left: auto;
    margin-top: -5px;
    font-weight: 400;
  }
`