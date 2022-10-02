import React from "react";
import styled from "styled-components";
import { Container, Typography } from "@material-ui/core";
import { spacing } from "@/styles/mixins";
import devPic from "./dev.png";
import * as s from "./fullwebview.module.scss";

const DevelopmentContainer = styled.div``;

const TitleWrapper = styled.div``;

const Development = () => {
  return (
    <div className={s.container}>
      <div className={s.title_container}>
        <Typography variant="h1"> Development </Typography>
        <Typography>UI & Components</Typography>
      </div>

      <div className={s.device}>
        <header>
          <span />
          <span />
          <span />
        </header>
        <div className={s.img}>
          <img src={devPic} alt={"dev pic"} />
        </div>
      </div>
    </div>
  );
};

export default Development;
