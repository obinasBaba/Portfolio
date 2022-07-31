import React from "react";
import { Typography } from "@material-ui/core";
import MotionBtn from "../../../components/MotionBtn";
import { useProjectSvg } from "../../../hooks/queries/useProjectSvg";
import HeadlineTitle from "../../../components/Headline";
import { aimText, aimTxtWrapper, aimWrapper, container, effect, text } from "./toprojects.module.scss";


function ToProjects(){

  const { planet } = useProjectSvg();


  return (

    <div className={container}>

      <HeadlineTitle title="Projects" mb={2} subtitle="Case Studies" />

      <div className={aimWrapper}>

        <div className={effect} data-scroll data-scroll-speed="-1">

          <img src={planet.publicURL} alt="booo" />

        </div>


        <div className={text}>
          <div className={aimTxtWrapper}>
            <Typography className={aimText} gutterBottom variant="body1">
              I Build website of a different kind, <br />
              One that capture your imagination,
              One that drive your business forward
              with strong traffic, One that ...
            </Typography>

            <Typography className={aimText} variant="body1">
              My portfolio is really quite diverse in range
              containing everything from simple API design
              to fully-fledged web-apps and deployment
              setup to landing pages that I have simply created for fun.
              I would prefer to let my work speak for itself so feel free
              to have a flick through.

            </Typography>

            <MotionBtn text="My Portfolio" to="/projects" />
          </div>
        </div>
      </div>


    </div>
  );
}

export default ToProjects;
