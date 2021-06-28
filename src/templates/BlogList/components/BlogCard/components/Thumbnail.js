import React from 'react'
import styled, { css } from 'styled-components'
import CardMedia from '@material-ui/core/CardMedia'
import {
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
  height: 0;
  background-color: #fff;
  //padding-bottom: 40%;

  ${spacing('mt', -7)};
  ${spacing('br', 2)};

  & .image-container {
    height: 100%;
    width: 100%;
    display: block;

    ${spacing('br',
            2)};
  }

  ${smallUp(css`
    flex: 1 0;
    margin-top: 0;
    height: 90%;

    ${spacing('ml', -3)};
  `)}
  
  & a.link{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
  
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
