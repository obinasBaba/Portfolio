import React from "react";
import { Typography } from "@material-ui/core";

import Img from "./thumbnail.jpg";
import * as s from "./nextproject.module.scss";
import { Link } from 'gatsby';

function NextProject({ titleTxt, url, thumbnailUrl }) {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Link to={url}>
          <Typography className={s.text} variant="h1" data-cursor={true} data-cursor-img={thumbnailUrl}>
            Next Project
          </Typography>
        </Link>
      </div>
    </div>
  );
}

export default NextProject;
