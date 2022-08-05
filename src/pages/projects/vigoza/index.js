import React from "react";
import useToolTip from "../../../hooks/useToolTip";
import CaseStudy from "../../../components/CaseStudy";
import MetaTxt from "../../../components/CaseStudy/MetaTxt";
import Intro from "../../../components/CaseStudy/Intro";
import ColorPalette from "../../../components/CaseStudy/Colors";
import FontUsed from "../../../components/CaseStudy/FontUsed";
import Development from "../../../components/CaseStudy/Development";
import useVigozaAssets from "../../../hooks/queries/useVigozaAssets";
import useColorAssets from "../../../hooks/queries/useColorAssets";
import WebView from "../../../components/CaseStudy/WebView";
import useUpdatePath from "../../../hooks/useUpdatePath";

const projectDataDefault = {
  title: "Vigoza Digital Agency",
  subTitle: "this is vigoza subtitle",
  about: {
    role: "FrontEnd Developer",
    context: "Design",
    period: "End 2018"
  },
  intro: {
    color: "#02021e",
    themeColor: "#973c22",
    logoUrl: "/projects/vigoza-logo.svg",
    // imageData: preview2,
    link: "/",
    title: "The Project",
    desc: `
        Vigoza is a full-service digital agency that builds immersive user experience.
        The Team create an exceptional visualization and thought-out functionality.
        The studio develops the products people appreciate all around the world.
        This project is made to make it easy to witness and follow-up their work and to keep their clients
        more close
        `
  },
  backUrl: "/projects#two",
  nextProject: {
    title: "Gebeya",
    url: "/projects/project2",
    thumbnailUrl: ""
  }
};

function Vigoza( { location } ){
  // console.log('vigozaArg: ', arg)

  const { headlineImage, webView, mobileView, showcase } = useVigozaAssets();
  const {
    amber,
    flame,
    pearl,
    spartan,
    white,
    fontAby,
    fontRai
  } = useColorAssets();
  const colors = [amber, flame, pearl, spartan, white];

  useUpdatePath( location.pathname );

  projectDataDefault.nextProject.thumbnailUrl =
    projectDataDefault.headlineImage =
      headlineImage.publicURL;
  projectDataDefault.location = location;
  // useLocoScroll();
  useToolTip( "[data-tooltip-text]" );

  return (
    <CaseStudy projectData={projectDataDefault}>
      <MetaTxt />

      <WebView web={webView} mobile={mobileView} tempWebView={showcase} />

      <Intro intro={projectDataDefault.intro} />

      {/* <AnalysisPreparation /> */}

      <ColorPalette colors={colors} />

      <FontUsed fonts={[fontAby, fontRai]} />

      {/* <Concept /> */}

      <Development />
    </CaseStudy>
  );
}

export default Vigoza;
