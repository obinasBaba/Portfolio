import React from "react";
import { Typography, useMediaQuery, useTheme } from "@material-ui/core";
import {
  container,
  text,
  textWrapper,
  vidDesc,
  vidWrapper,
  wrapper,
} from "./intro.module.scss";
import VideoPlayer from "@/pages/projects/juvi/components/VideoPlayer";

const Intro = ({ desc, subDesc, vidProps }) => {
  console.log("viporops: ", vidProps);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={textWrapper}>
          <Typography variant="h1">{desc.title}</Typography>

          <Typography className={text} variant={matches && "body1"}>
            {desc.text}
          </Typography>
        </div>

        <div className={vidWrapper}>
          <VideoPlayer vidProps={vidProps} />

          <div className={vidDesc}>
            {subDesc?.title && (
              <Typography variant="h4" gutterBottom>
                {subDesc.title}
              </Typography>
            )}

            {subDesc?.text && (
              <Typography className={text} variant={matches && "body1"}>
                {subDesc.text}
              </Typography>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
