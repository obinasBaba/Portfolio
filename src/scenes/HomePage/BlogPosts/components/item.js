import React from 'react'
import styled, { css } from 'styled-components'

import {
  heightWidth,
  largeUp,
  mediumUp,
  spacing,
  text,
} from '../../../../styles/mixins'
import { Typography } from '@material-ui/core'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const PreviewContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  &:not(:first-child) {
    position: relative;
    ${spacing('mt', 8)};

    &::before {
      content: '';
      position: absolute;
      width: calc(100% + 40px);
      height: 1px;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #32344d;
      @media screen and (max-width: 768px) {
        top: -30px;
      }
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }

  ${mediumUp(css`
    flex-direction: row;
    align-items: center;
  `)};
  
  a{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
  }
`

const ImageBox = styled.div`
  flex: 0 0 auto;
  width: 100%;
  border: 1px solid #323453;
  background: linear-gradient(
    123.69deg,
    rgba(10, 12, 45, 0.45) 0%,
    rgba(10, 12, 45, 0) 100.53%
  );

  ${mediumUp(css`
    ${heightWidth('width', 18)}
  `)};

  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  .img-wrapper {
    z-index: -1;
    display: block;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }
`

const Desc = styled.div`
  margin-top: 2rem;

  //@media screen and (min-width: $md) {}

  ${mediumUp(css`
    margin-top: 0;
    margin-left: 40px;
  `)};

  ${largeUp(css`
    margin-left: 60px;
  `)};
`

const Tag = styled(Typography)`
  font-weight: lighter;
  ${text(0.7)};
  letter-spacing: 1px;
  color: lightgray;
  opacity: 0.5;
  text-transform: uppercase;

  ${spacing('mb', 1)};
`

const Title = styled(Typography)`
  line-height: 1.4em;
  font-weight: lighter;
  ${text(1.25)};

  a {
    text-decoration: none;
  }
`

const Item = ({ media, tag, title, link }) => {
  return (
    <PreviewContainer>
      <Link to={link} />

      <ImageBox>
        <GatsbyImage className="img-wrapper" alt={''} image={getImage(media)} />
      </ImageBox>

      <Desc>
        <Tag variant="body2">{tag}</Tag>
        <Title variant="h6"> {title} </Title>
      </Desc>
    </PreviewContainer>
  )
}

export default Item
