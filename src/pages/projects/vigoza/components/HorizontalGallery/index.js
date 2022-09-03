import React from "react";
import useHomeWorksAssets from "@hooks/queries/useHomeWorksAssets";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { container, track, trackImg, wrapper } from "./horizontalgallery.module.scss";

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

  const imageList = [ // useMeo
    Art,
    North,
    Investments,
    Investments,
    Investments,
    Tude
  ];


  return (
    <div className={container}>


      <div className={track}
           data-scroll={true}
        data-scroll-direction="horizontal"
        data-scroll-speed="-1.5"
      >
        <div className={wrapper}>
          {imageList.map( ( imgData ) =>

            <div className={trackImg}>
              <GatsbyImage alt={imgData.name}
                           key={imgData.name}
                           className="image dribble-shots"
                           objectFit="cover"
                           image={getImage( imgData )} />
            </div>
          )}
        </div>
      </div>

      <div className={track}
           data-scroll={true}
        data-scroll-direction="horizontal"
        data-scroll-speed="1"
      >
        <div className={wrapper}>
          {imageList.map( ( imgData ) =>

            <div className={trackImg}>
              <GatsbyImage alt={imgData.name}
                           key={imgData.name}
                           className="image dribble-shots"
                           objectFit="cover"
                           image={getImage( imgData )} />
            </div>
          )}
        </div>
      </div>


    </div>
  );
};

export default HorizontalGallery;

