import styled, {css} from 'styled-components'
import {mediumUp, spacing} from '../../../styles/mixins'
import {Typography} from '@material-ui/core'

export const Role = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  flex-flow: column;
  list-style-type: none;
  padding: 0;
  margin: 0;

  ${spacing('mb', 5)};

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

export const ImgGradient = styled.div`
  width: 100%;
  z-index: 11;
  position: relative;

  .overlay {
    background-image: linear-gradient(to bottom, rgb(2,2,30) -50%, rgba(2, 2, 30, 0) 80%);
    z-index: 11;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`