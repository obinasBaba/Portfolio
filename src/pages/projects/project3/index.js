import React from "react";
import useToolTip from "../../../hooks/useToolTip";
import CaseStudy from "../../../components/CaseStudy";
import ComingSoon from "../../../components/CaseStudy/ComingSoon";
import useProject3Assets from "../../../hooks/queries/useProject3Assets";
import useUpdatePath from "../../../hooks/useUpdatePath";

const projectDataDefault = {
  title: "Atgbe Food Delivery",
  subTitle: "this is gebeya subtitle",
  about: {
    role: "FrontEnd Developer",
    context: "Design",
    period: "End 2018"
  },
  intro: {},
  backUrl: "/projects#three",
  nextProject: {
    title: "Vigoza",
    url: "/projects/vigoza",
    thumbnailUrl: ""
  }

};


function Project3( { location } ){

  const { headlineImage } = useProject3Assets();

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

export default Project3;
