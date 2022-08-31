import React from "react";
import useHomeWorksAssets from "@hooks/queries/useHomeWorksAssets";
import ImageGrid from "@scenes/HomePage/RecentDesigns/ImageGrid";
import { container, track, wrapper } from "./horizontalgallery.module.scss";

const HorizontalGallery = () => {

  const {
    Art,
    eScooter,
    Web,
    Hommy,
    Investments,
    Lazy,
    Starbank,
    Teampoint,
    Travel,
    Tude,
    Realty,
    North
  } = useHomeWorksAssets();

  const imageList = [ // useMemo
    [Web],
    [Investments, Travel, Starbank],
    [eScooter],
    [Art, Lazy, Teampoint],
    [North],
    [Realty, Hommy, Tude],
    [Web]
  ];


  return (
    <div className={container}>


      <div className={track}
           data-scroll={true}
           data-scroll-direction="horizontal"
           // data-scroll-delay={.01}
           data-scroll-speed="-3"
      >
       <div className={wrapper}>
         {imageList.map((item, index) =>
           <ImageGrid images={item} key={index} />
         )}
       </div>
      </div>

      <div className={track}
           data-scroll={true}
           data-scroll-direction="horizontal"
           // data-scroll-delay={.01}
           data-scroll-speed="2"
      >
       <div className={wrapper}>
         {imageList.map((item, index) =>
           <ImageGrid images={item} key={index} />
         )}
       </div>
      </div>

    </div>
  );
};

export default HorizontalGallery;

