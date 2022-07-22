import React from "react";
import styled, { css } from "styled-components";
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import clsx from "clsx";
import MotionBtn from "../../../components/MotionBtn";
import { spacing } from "../../../styles/mixins";
import { mediumUp, xLargeUp } from "../../../styles/mixins/breakpoints";
import { useProjectSvg } from "../../../hooks/queries/useProjectSvg";
import HeadlineTitle from "../../../components/Headline";
import { container } from "./aim.module.scss";

const AimContainer = styled( motion.div )`
  //border: thick solid red;
  position: relative;
  //height: 50vh;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-evenly;


  ${spacing( "pt", 13 )};


  .aim-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-flow: wrap;

    //border: thin solid red;

    ${spacing( "mt", 10 )};


    ${xLargeUp( css`
      max-width: 90%;
    ` )};
  }


`;


const AimText = styled.div`
  //width: 40%;
  display: grid;
  place-items: center;
  //color: var(--light_medium_gray);
  padding: 0 2vmax;

  //border: thin solid red;

  .aim-txt-wrapper {
    display: grid;
    ${spacing( "gap", 3.5 )};

    .aim-text {
      font-weight: lighter;
      letter-spacing: .05vmax;
      max-width: 40ch;
      color: var(--light_gray);

    }
  }

`;

const Effect = styled.div`
  z-index: -1;
  position: relative;
  //transform: scale(1.4);
  //flex-grow: 1;

  display: grid;
  place-items: center;

  ${spacing( "mb", -14 )};

  img {
    max-width: 100%;
    opacity: .8;
    margin-left: 15vmax;

  }

  ${mediumUp( css`
    ${spacing( "mb", 5 )};

    img {
      margin-left: 0;
      max-width: 25vmax;
    }

  ` )};

`;

function Aim(){

  const { planet } = useProjectSvg();


  return (

    <AimContainer>

      <HeadlineTitle title="Projects" mb={2} subtitle="Case Studies" />

      <div className={clsx( ["aim-wrapper", container] )}>

        <Effect data-scroll data-scroll-speed="-1">

          <img src={planet.publicURL} alt="booo" />

        </Effect>


        <AimText>
          <div className="aim-txt-wrapper">
            <Typography className="aim-text" gutterBottom variant="body1">
              I Build website of a different kind, <br />
              One that capture your imagination,
              One that drive your business forward
              with strong traffic, One that ...
            </Typography>


            <Typography className="aim-text" variant="body1">
              My portfolio is really quite diverse in range
              containing everything from simple API design
              to fully-fledged web-apps and deployment
              setup to landing pages that I have simply created for fun.
              I would prefer to let my work speak for itself so feel free
              to have a flick through.

            </Typography>


            <MotionBtn text="My Portfolio" to="/projects" />
          </div>
        </AimText>
      </div>


    </AimContainer>
  );
}

export default Aim;
