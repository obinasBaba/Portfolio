import React from "react";
import { container } from "./imageview.module.scss";
import useJuviMarqueeAssets from "@hooks/queries/juvi/useJuviMarqueeAssets";

const ImageView = () => {
  const { mp } = useJuviMarqueeAssets();

  return <div className={container}></div>;
};

export default ImageView;
