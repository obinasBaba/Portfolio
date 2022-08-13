import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AboutPage from "../scenes/AboutPage";
import useToolTip from "../hooks/useToolTip";
import Seo from "../components/seo";
import useUpdatePath from "../hooks/useUpdatePath";


function About( { path } ){

  useUpdatePath( path );

  // useLocoScroll();

  useToolTip( "[data-tooltip-text]" );
  // useRefreshMouseListeners( '#about [data-pointer]' );


  return (
    <>
      <Seo title="About" description="let me tell you about me, my skills and my process of getting work done" />
      <AboutPage />
    </>
  );
}

export default About;
