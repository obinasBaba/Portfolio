import React from "react";
import Title from "./Title";
import ScrollGallery from "../../../components/ScrollGallery/ScrollGallery";
import { container } from "./recent.module.scss";


function RecentWorks(){


  return (
    <div className={container} id="#design"
      // data-scroll-section={true}
    >
      <Title />
      <ScrollGallery />
    </div>
  );
}

export default RecentWorks;
