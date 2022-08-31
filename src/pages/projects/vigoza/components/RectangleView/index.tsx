import React from "react";
import { container, wrapper } from "./rectangleview.module.scss";
import Img from "./img.png";

const RectangleView = () => (
  <div className={container}>

    <div className={wrapper}>
      <img src={Img} data-scroll={true} data-scroll-speed="-2.5"
           alt="design images"
      />
    </div>

  </div>
);

export default RectangleView;

