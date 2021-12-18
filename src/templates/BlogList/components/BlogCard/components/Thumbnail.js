import React from 'react'
import styled, { css } from 'styled-components'
import CardMedia from '@material-ui/core/CardMedia'
import {
  length,
  largeUp,
  mediumUp,
  smallUp,
  spacing,
} from '../../../../../styles/mixins'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {Link} from 'gatsby'

const StyledThumbnail = styled(CardMedia)`
  position: relative;
  width: 88%;
  margin-left: auto; //center it
  margin-right: auto;
  background-color: #fff;
  
  ${spacing('mt', -7)};
  ${spacing('br', 2)};

  & .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;

    ${spacing('br', 2)};
  }

  ${smallUp(css`
    flex: 1 0;
    margin-top: 0;
    height: max-content;
    ${length('height', 35)};


    ${spacing('ml', -3)};
  `)}
  
  
  ${mediumUp(css`
    ${spacing('ml', -5)};
  `)}
  
  ${largeUp(css`
    ${spacing('ml', -10)};
  `)}
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    //background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
    background-blend-mode: soft-light;
    background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);


    ${spacing('br', 2)};
    opacity: 0.5;
  }
`

const Thumbnail = ({ media, link }) => {
  return (
    <StyledThumbnail>
      <GatsbyImage
        alt={'featured media'}
        image={getImage(media)}
        objectFit="cover"
        objectPosition="center"
        className="image-container"
      />
      <Link to={link} className='link' />
    </StyledThumbnail>
  )
}

export default Thumbnail
