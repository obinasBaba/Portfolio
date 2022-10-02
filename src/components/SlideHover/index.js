import React from "react";
import styled from "styled-components";
import { spacing } from "../../styles/mixins";

const HoverSlider = styled.div`
  position: relative;
  //display: inline;
  width: fit-content;
  ${spacing("pb", 0.8)};

  &:before {
    content: "";
    position: absolute;
    height: 1px;
    width: 45%;
    left: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      #e7a28f 1.59%,
      #fbddb0 50%,
      #fbfefd 98.41%
    );
    transition: width 0.3s;
  }

  &:hover {
    &:before {
      width: 100%;
    }
  }
`;

const SlideHover = ({ children }) => {
  return <HoverSlider>{children}</HoverSlider>;
};

export default SlideHover;
