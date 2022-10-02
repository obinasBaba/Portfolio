import React from "react";
import styled, { css } from "styled-components";
import { Container, useMediaQuery, useTheme } from "@material-ui/core";
import { motion, useSpring, useTransform } from "framer-motion";
import { length, spacing } from "../../../../styles/mixins";
import HeadlineTitle from "../../../../components/Headline";
import { useProjectSvg } from "../../../../hooks/queries/useProjectSvg";
import { smallUp, xLargeUp } from "../../../../styles/mixins/breakpoints";
import { useLocomotiveScroll } from "@contexts/LocoMotive";

const TitleContainer = styled(Container)`
  display: flex;
  flex-flow: column;
  align-items: center;
  /*@include hl-margin(bottom, 100px);
  @include hl-padding(top, 75px);*/

  ${spacing("mb", 11)};
`;

const LogoLink = styled.a`
  position: relative;
  margin-left: auto;
  display: none;
  justify-content: center;
  align-items: center;

  ${length("width", 12)};

  ${smallUp(css`
    display: flex;
    margin-right: -30px;
  `)};

  ${xLargeUp(css`
    margin-right: -100px;
  `)};

  img {
    object-fit: cover;
    position: absolute;
  }

  .circledText {
    //width: 100%;
    ${length("width", 12)};
  }

  .dribbleRed {
    width: 100%;
    //display: none;

    position: absolute;
    transition: transform 1s ease;
    will-change: transform;
    max-width: 3.18rem;
  }

  &:hover {
    & .dribbleRed {
      transform: rotate(360deg) scale(1.13);
      filter: invert(52%) sepia(26%) saturate(5887%) hue-rotate(303deg)
        brightness(81%);
    }
  }
`;

function Title() {
  const { circledText, dribbleRed } = useProjectSvg();
  const { yProgress } = useLocomotiveScroll();

  const transform = useTransform(yProgress, [0, 1], [0, 560]);

  const rotate = useSpring(transform, { damping: 50, stiffness: 400 });

  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up("xxl"));

  // const {recentDesign, setRecentDesign} = useContext( LoadStateContext )

  return (
    <TitleContainer maxWidth={match ? "xl" : "lg"}>
      <LogoLink
        href="https://dribbble.com/henok500"
        rel="noopener noreferrer"
        target="_blank"
      >
        <motion.img
          alt="Web App, Mobile"
          loading="lazy"
          src={circledText.publicURL}
          className="circledText"
          style={{ rotate }}
        />

        <img
          loading="lazy"
          alt="Web App, Mobile"
          src={dribbleRed.publicURL}
          className="dribbleRed"
          onLoad={() => {}}
        />
      </LogoLink>

      <HeadlineTitle title="Designs" subtitle="Recent Designs" />
    </TitleContainer>
  );
}

export default Title;
