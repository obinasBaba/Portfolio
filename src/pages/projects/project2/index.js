import React from "react";
import useToolTip from "../../../hooks/useToolTip";
import CaseStudy from "../../../components/CaseStudy";
import ComingSoon from "../../../components/CaseStudy/ComingSoon";
import useProject2Assets from "../../../hooks/queries/useProject2Assets";
import useUpdatePath from "../../../hooks/useUpdatePath";

const projectDataDefault = {
  title: "Gebeya",
  subTitle: "this is gebeya subtitle",
  about: {
    role: "FrontEnd Developer",
    context: "Design",
    period: "End 2018"
  },
  intro: {},
  backUrl: "/projects#one",
  nextProject: {
    title: "Atgebe",
    url: "/projects/project3",
    thumbnailUrl: ""
  }
};


function Project2( { location } ){

  const { headlineImage } = useProject2Assets();

  useUpdatePath( location.pathname );


  projectDataDefault.headlineImage = headlineImage.publicURL;
  // useLocoScroll();
  useToolTip( "[data-tooltip-text]" );
  // useRefreshMouseListeners( '[data-pointer]' )

  return (

    <CaseStudy projectData={projectDataDefault}>

      <ComingSoon />

    </CaseStudy>

  );
}

export default Project2;
