/** @format */

import React, { useEffect, useLayoutEffect } from "react";
import AboutPage from "../scenes/AboutPage";
import useToolTip from "../hooks/useToolTip";
import Seo from "../components/seo";
import useUpdatePath from "../hooks/useUpdatePath";
import { useLocomotiveScroll } from "@contexts/LocoMotive";

/*import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin( ScrollTrigger );*/

function About({ path }) {
  useUpdatePath(path);

  // useLocoScroll();

  useToolTip("[data-tooltip-text]");
  // useRefreshMouseListeners( '#about [data-pointer]' );

  return (
    <>
      <Seo
        title="About"
        description="let me tell you about me, my skills and my process of getting work done"
      />
      <AboutPage />
    </>
  );
}

export default About;
