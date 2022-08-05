// noinspection JSIgnoredPromiseFromCall

import React, { useContext, useLayoutEffect } from "react";
import ProjectPage from "../../scenes/ProjectPage";
import useToolTip from "../../hooks/useToolTip";
import useCursorEventRefresher from "../../hooks/useRefreshMouseListeners";
import { AppStateContext } from "../../contexts/AppStateContext";
import Seo from "../../components/seo";

function Projects( { path } ){


  const {
    setCurrentPath
  } = useContext( AppStateContext );

  useLayoutEffect( () => {
    setCurrentPath( path );
  }, [] );

  useToolTip( " [data-tooltip-text]" );
  // useCursorEventRefresher( '.project-work-container [data-pointer]' )

  return (
    <>
      <Seo title="Projects" description="A destination of aesthetic pleasure, here you will get your
   dose of inspiration, as well as find a possible way to implement your business idea." />
      <ProjectPage />
    </>
  );
}

export default Projects;
