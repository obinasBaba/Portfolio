import React from "react";
import ResponsiveContainer from "@components/ResponsiveContainer";
import { Typography } from "@material-ui/core";
import { container, elementImg, wrapper, text } from "./elementsviewsection.module.scss";

const ElementsViewSection = ( { elements } ) => {
  return (
    <div className={container}>

      <ResponsiveContainer className={wrapper}>

        <div className={text}>
          <Typography variant="h3" gutterBottom>
            elements
          </Typography>

          <Typography style={{maxWidth: '77ch'}}>
            kim drew a whopping 141 scribble- and 39 stone illustrations to use in all kinds of media, including the
            website. they portray elements the band personally feels close to.
          </Typography>
        </div>

        <div className={elementImg}>
          <img src={elements.publicURL} alt="elements used in the project" />
        </div>


      </ResponsiveContainer>


    </div>
  );
};

export default ElementsViewSection;

