import React from "react";
import styled, { css } from "styled-components";

import { Typography } from "@material-ui/core";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { length, spacing, text } from "../../../../styles/mixins";
import { mediumUp, smallUp } from "../../../../styles/mixins/breakpoints";

const PreviewContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 600px;

  //border: thin solid red;

  &:hover {
    img {
      transform: scale(1.3);
      transition: transform 1.6s ease-in-out;
    }
  }

  &:not(:first-child) {
    position: relative;
    ${spacing("mt", 8)};

    &::before {
      content: "";
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

  a {
    display: flex;
    flex-direction: column;
    width: 100%;
    z-index: 2;

    ${mediumUp(css`
      flex-direction: row;
      //justify-content: space-between;
      align-items: center;
      gap: 3vmax;
    `)};
  }
`;

const ImageBox = styled.div`
  flex: 0 0 auto;
  width: 100%;
  border: 1px solid #323453;
  //margin: 0 auto;
  overflow: hidden;
  background: linear-gradient(
    123.69deg,
    rgba(10, 12, 45, 0.45) 0%,
    rgba(10, 12, 45, 0) 100.53%
  );

  ${mediumUp(css`
    ${length("width", 18)};
    margin: 0;
  `)};

  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  .img-wrapper {
    //z-index: -1;
    display: block;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;

      transition: transform 1s ease-in-out;
    }
  }
`;

const Desc = styled.div`
  ${spacing("mt", 2)};

  ${mediumUp(css`
    margin-top: 0;
  `)};
`;

const Tag = styled(Typography)`
  font-weight: lighter;
  letter-spacing: 1px;
  color: silver;
  opacity: 0.5;
  text-transform: uppercase;

  ${spacing("mb", 0)};
  ${text(0.467)};

  ${smallUp(css`
    ${spacing("mb", 0)};
  `)};
`;

const Title = styled(Typography)`
  line-height: 1.4em;
  font-weight: lighter;
  ${text(1.1)};

  a {
    text-decoration: none;
  }
`;

function Item({ media, tag, title, link }) {
  return (
    <PreviewContainer className="home-blog-thumbnail" data-pointer="focus">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <ImageBox>
          <GatsbyImage className="img-wrapper" alt="" image={getImage(media)} />
        </ImageBox>

        <Desc>
          <Tag variant="subtitle2">{tag}</Tag>
          <Title variant="h6"> {title} </Title>
        </Desc>
      </a>
    </PreviewContainer>
  );
}

export default Item;
