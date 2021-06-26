import React from 'react'
import styled, { css } from 'styled-components'

import {
  heightWidth,
  largeUp,
  mediumUp,
  spacing, text,
} from '../../../../styles/mixins'
import { Link } from 'gatsby'
import { Typography } from '@material-ui/core'

const PreviewContainer = styled.div`
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
`

const ImageBox = styled.div`
  flex: 0 0 auto;
  width: 100%;
  border: 1px solid #323453;

  background: linear-gradient(
    123.69deg,
    #0a0c2d 28.53%,
    rgba(10, 12, 45, 0) 93.53%
  );
  
  
  ${ mediumUp(css`
      ${heightWidth('width', 18)}
  `) };

  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }
  
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
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
  font-family: var(--gramatika);
  font-weight: 600;
  ${ text(.7) };
  letter-spacing: 1px;
  color: lightgray;
  opacity: 0.5;
  text-transform: uppercase;
  
`

const Title = styled(Typography)`
  font-family: var(--sofia-pro);
  line-height: 1.4em;
  font-weight: 400;
  ${ text(1.4) };

  a {
    text-decoration: none;
  }
`

const Item = ({ media, tag, title }) => {
  return (
    <PreviewContainer>
      <ImageBox>
          <img src={media} alt={''} />
      </ImageBox>

      <Desc>
        <Tag variant='body2' >#{tag}</Tag>
        <Title variant='h6' > {title} </Title>
      </Desc>
    </PreviewContainer>
  )
}

export default Item
