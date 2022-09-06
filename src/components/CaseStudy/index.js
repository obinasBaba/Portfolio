import React, { useContext, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";
import { MotionValueContext } from "@contexts/MotionStateWrapper";
import { createPortal } from "react-dom";
import { navigate } from "gatsby";
import { useLocomotiveScroll } from "@contexts/LocoMotive";
import { useMotionBreakPoint } from "@contexts/BreakPoint";
import useUpdatePath from "@hooks/useUpdatePath";
import clsx from "clsx";
import ReturnBtn from "../ReturnBtn";
import { HeadLineBG } from "./Headline/Components";
import { bgVariant, transition } from "./Headline/variants";
import ProjectScrollDown
  from "../../scenes/ProjectPage/components/SideBarTools/ProjectScrollDown";
import NextProject from "./NextProject";
import useRefreshMouseListeners from "../../hooks/useRefreshMouseListeners";

import {
  container,
  containerScrolled,
  returnBtn
} from "./casestudy.module.scss";

const FixedPortal = (props) => createPortal(props.children, document.body);

const FixedItems = styled.div`
  position: fixed;
  left: 3.8%;
  top: 29%;
  bottom: 5%;
  z-index: 7;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;

  a {
  }

  //border: thin solid red;
`;

const containerVariants = {
  initial: {
    opacity: 0
  },

  animate: {
    opacity: 1
  },

  exit (arg) {
    if (arg.path === "/projects/") {
      return {};
    }

    return {
      opacity: 0, transition: {
        duration: 1.5
      }
    };
  }
};

const projectDataDefault = {
  title: "Vigoza Digital Agency",
  subTitle: "this is vigoza subtitle",
  headlineImage: "",
  about: {
    role: "FrontEnd Developer", context: "Design", period: "End 2018"
  },
  intro: {
    themeColor: "#f1c9b3",
    color: "#02021e",
    logoUrl: "/projects/honey-logo.png", // imageData: preview2,
    link: "https://www.prosapient.com",
    title: "The Project",
    desc: `
        Honey is an outstanding Beauty and Hair space in Addis Abeba, Ethiopia.
        They include a variety of services including professional hair cutting and
        styling, manicures , pedicures, cosmetics, makeup and makeovers to say a few.
        This WebApp(PWA) makes their client to keep up and admire their daily post as
        well us to easily make an appointment despite the massive no of client.   
        `
  },
  nextProject: {
    title: "next title", url: "/", thumbnailUrl: "/"
  }
};

const CaseStudy = ({
  projectData = projectDataDefault, path, children, scrolled
}) => {
  const { title, subTitle, about } = projectData;
  const {
    thumbnailUrl, title: nextProjectTitle, url
  } = projectData.nextProject;
  // const { headlineImg, publicURL } = projectData.imageData
  useUpdatePath(path);

  useRefreshMouseListeners("[data-pointer]");

  const {
    variantsUtil: { fromCaseStudy, fromProjectList }
  } = useContext(MotionValueContext);

  const { breakpoint } = useMotionBreakPoint();
  const { locoInstance } = useLocomotiveScroll();
  const { mainAnimationController, screenOverlayEvent } = useContext(
    MotionValueContext);

  const lup = typeof window !== "undefined" ? matchMedia(
    "(min-width: 1200px)").matches : false;

  // const [scrolled, setScrolled] = useState( false );
  const showScrollDown = useMotionValue(0);

  const moInitial = useMotionValue(
    fromProjectList.get()
      ? lup
        ? ["fromProjectsInitial"]
        : ["fromProjectsSmallInitial"]
      : lup
        ? ["initial"]
        : ["smallInitial"]
  );

  const moAnimate = useMotionValue(
    fromProjectList.get()
      ? lup
        ? ["fromProjectsAnimate"]
        : ["fromProjectsSmallAnimate"]
      : lup
        ? screenOverlayEvent.get()
        === "closed" ? ["animate"] : mainAnimationController
        : ["smallAnimate"]);

  useLayoutEffect(() => {
    // console.log('fromProject : ', location, path)
    fromProjectList.set(false);
    fromCaseStudy.set(true);
  }, []);

  useEffect(() => {
    if (scrolled) {
      showScrollDown.set(1);
      document.body.classList.add("darkish");
    } else {
      showScrollDown.set(0);
      document.body.classList.remove("darkish");
    }

    return () => document.body.classList.remove("darkish");
  }, [scrolled]);

  const returnClick = () => {
    locoInstance.scrollTo(0, {
      easing: [0.6, 0.01, 0, 0.9],
      callback: () => setTimeout(() => navigate(projectData?.backUrl),
        scrolled ? 350 : 0)
    });
  };

  return (
    <motion.div
      className={clsx([container, scrolled && containerScrolled])}
      id="headline"
      variants={containerVariants}
      initial={moInitial.get()}
      animate={moAnimate.get()}
      exit="exit"
      custom={{
        scrollTop: () => null
      }}
    >
      {typeof document !== `undefined` && (<FixedPortal>
        <div>
          <ProjectScrollDown activeIndex={showScrollDown} />
        </div>
      </FixedPortal>)}

      <div
        className={returnBtn}
        data-pointer="focus"
        data-pointer-color="#3719ca"
        data-scroll={true}
        data-scroll-sticky={true}
        data-scroll-target="#headline"
        data-scroll-offset="20%">
        <ReturnBtn onClick={returnClick} />
      </div>

      <HeadLineBG variants={bgVariant} transition={transition} />

      {children}

      <NextProject
        thumbnailUrl={thumbnailUrl}
        title={nextProjectTitle}
        url={url} />

    </motion.div>
  );
};

export default CaseStudy;
