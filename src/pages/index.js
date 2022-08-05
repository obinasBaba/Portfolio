import React from "react";
import HomePage from "../scenes/HomePage";
import useToolTip from "../hooks/useToolTip";
import Seo from "../components/seo";
import useUpdatePath from "../hooks/useUpdatePath";

function IndexPage( { path } ){
  // useLocoScroll();
  useUpdatePath( path );

  useToolTip( "[data-tooltip-text]" );
  // useRefreshMouseListeners('.homepage-container [data-pointer]')

  return (
    <>
      <Seo
        title="homepage"
      />
      <HomePage />
    </>
  );
}

export default IndexPage;
