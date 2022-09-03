import React from "react";
import { container } from "./fontused.module.scss";


const FontUsed = ( { fonts } ) => {
  return (
    <div className={container}>

      {fonts.map( ( { publicURL } ) => (
        <img src={publicURL} alt="" key={publicURL} />
      ) )}

    </div>
  );
};

export default FontUsed;
