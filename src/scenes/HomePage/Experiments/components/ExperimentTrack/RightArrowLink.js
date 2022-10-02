import React, { useEffect, useLayoutEffect } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { ReactSVG } from "react-svg";
import { Link } from "gatsby";
import { useProjectSvg } from "../../../../../hooks/queries/useProjectSvg";
import { length, spacing, text } from "../../../../../styles/mixins";

const RightArrowContainer = styled(motion.div)`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  width: ${({ len }) => len};

  ${({ mt }) => css`
    ${spacing("mt", mt)}
  `};

  &:hover {
    .svg-wrapper {
      transform: scale(1.25) translateX(-17%);
      transition: transform 1s cubic-bezier(0.6, 0.01, 0, 0.9);
    }
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ArrowLine = styled.div`
  height: 1px;
  background-image: linear-gradient(
    to right,
    #e7a28f 13.52%,
    #f9d6ac 41.89%,
    #fbfefc 86.77%
  );
  border-radius: 500px;
  flex: 1;
`;

const Arrow = styled.div`
  position: relative;
  z-index: 0;
  margin: 0 auto;
  max-width: 50px;
  ${length("width", 5)};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 1s cubic-bezier(0.6, 0.01, 0, 0.9);

  & :hover {
  }

  &::after {
    //content: '';
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-30%, -35%);
    display: block;

    ${spacing("p", 4)};
  }

  & .svg-wrapper {
    width: 50%;
    margin: 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: transform 1s cubic-bezier(0.6, 0.01, 0, 0.9);
    transform: translateX(-60%);

    div {
      display: grid;
      place-items: center;
    }

    svg {
      max-width: 100%;
      width: 100%;
      display: inline;
    }
  }
`;

const Text = styled.p`
  ${({ txtStyle }) =>
    txtStyle ??
    css`
      margin: 0;
      padding: 0;
      display: block;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 300;

      ${text(0.8)};
    `};
`;

function RightArrowLink({
  mt = 0,
  txt,
  lineLength = "100%",
  txtStyle,
  link = "/",
  target,
  tooTipTxt = false,
}) {
  const { rightArrow } = useProjectSvg();

  return (
    <RightArrowContainer
      len={lineLength}
      mt={mt}
      data-pointer="focus"
      data-tooltip={!!tooTipTxt}
      data-tooltip-text={tooTipTxt}
    >
      <Text txtStyle={txtStyle}>{txt}</Text>

      <ArrowContainer>
        <ArrowLine className="arrow-line" />
        <Arrow
          className="arrow"
          data-tooltip
          data-pointer="stuck"
          data-tooltip-text={tooTipTxt}
        >
          <ReactSVG className="svg-wrapper" src={rightArrow.publicURL} />
        </Arrow>
      </ArrowContainer>
    </RightArrowContainer>
  );
}

export default RightArrowLink;
