import React from 'react'
import styled, { css } from 'styled-components'
import CardMedia from '@material-ui/core/CardMedia'
import {
  largeUp,
  mediumUp,
  smallUp,
  spacing,
} from '../../../../../styles/mixins'

const StyledThumbnail = styled(CardMedia)`
  width: 88%;
  margin-left: auto; //center it
  margin-right: auto;
  height: 0;
  padding-bottom: 47%;
  background-color: #fff;
  position: relative;

  ${spacing('mt', -7)};
  ${spacing('br', 2)};

  ${smallUp(css`
    flex: 1 0;
    //margin-top: 0;
    // ${spacing('ml', -3)};
  `)}
  
  ${mediumUp(css`
    // ${spacing('ml', -5)};
  `)}
  
  ${largeUp(css`
    // ${spacing('ml', -10)};
  `)}
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
    ${spacing('br', 2)};
    opacity: 0.5;
  }
`

const Thumbnail = ({ media }) => {
  return <StyledThumbnail image={media}/>
}

export default Thumbnail