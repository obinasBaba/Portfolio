// noinspection JSIgnoredPromiseFromCall

import React from "react";
import ProjectPage from "@/scenes/ProjectPage";
import useToolTip from "@/hooks/useToolTip";
import Seo from "../../components/seo";
import useUpdatePath from "@hooks/useUpdatePath";
import useRefreshMouseListeners from "@hooks/useRefreshMouseListeners";

function Projects( { path } ){


  useUpdatePath( path );


  useToolTip( " [data-tooltip-text]" );
  useRefreshMouseListeners( ".project-work-container [data-pointer]" );


  return (
    <>
      <Seo title="Projects" description="A destination of aesthetic pleasure, here you will get your
   dose of inspiration, as well as find a possible way to implement your business idea." />
      <ProjectPage />
    </>
  );
}

export default Projects;
