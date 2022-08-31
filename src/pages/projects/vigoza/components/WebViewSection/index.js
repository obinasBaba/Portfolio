import React from "react";

// @ts-ignore
import { container, wrapper } from "./webviewsection.module.scss";
import { VPlayer } from "../MarqueeSliderView";
import { Typography } from "@material-ui/core";
import ResponsiveContainer from "@/components/ResponsiveContainer";

const WebViewSection = () => {


  return (
    <ResponsiveContainer className={container}>

      <div className={wrapper}>

        <Typography variant="h1">
          Section Title
        </Typography>

        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque blanditiis ducimus expedita iusto
          molestiae natus qui quidem sapiente ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
          delectus dignissimos doloremque eaque earum hic quaerat quam quos reprehenderit, ullam!
        </Typography>


        <VPlayer />

      </div>

    </ResponsiveContainer>
  );
};

export default WebViewSection;

