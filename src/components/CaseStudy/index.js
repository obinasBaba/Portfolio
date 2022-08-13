/* eslint-disable no-nested-ternary */
import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import Headline from "./Headline";
import ReturnBtn from "../ReturnBtn";
import { AppStateContext } from "@contexts/AppStateContext";
import styled from "styled-components";
import { ProjectContainer } from "./components";
import { useMotionValue, useTransform } from "framer-motion";
import { HeadLineBG } from "./Headline/Components";
import { bgVariant, transition } from "./Headline/variants";
import { MotionValueContext } from "@contexts/MotionStateWrapper";
import ProjectScrollDown from "../../scenes/ProjectPage/components/SideBarTools/ProjectScrollDown";
import { createPortal } from "react-dom";
import { navigate } from "gatsby";
import NextProject from "./NextProject";
import useRefreshMouseListeners from "../../hooks/useRefreshMouseListeners";
import { useLocomotiveScroll } from "@contexts/LocoMotive";
import { useMotionBreakPoint } from "@contexts/BreakPoint";


const args = {
  path: undefined,
  scroll: undefined
};

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
  exit( arg ){
    if ( arg.path )
      args.path = arg.path;
    if ( arg.scrollTop )
      args.scroll = arg.scrollTop;

    if ( arg.path === "/projects/" ) {
      if ( args.scroll )
        args.scroll();

      return {};
    }

    return {
      opacity: 0,
      transition: {
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
    role: "FrontEnd Developer",
    context: "Design",
    period: "End 2018"
  },
  intro: {
    themeColor: "#f1c9b3",
    color: "#02021e",
    logoUrl: "/projects/honey-logo.png",
    // imageData: preview2,
    link: "https://www.prosapient.com",
    title: "The Project",
    desc:
      `
        Honey is an outstanding Beauty and Hair space in Addis Abeba, Ethiopia.
        They include a variety of services including professional hair cutting and
        styling, manicures , pedicures, cosmetics, makeup and makeovers to say a few.
        This WebApp(PWA) makes their client to keep up and admire their daily post as
        well us to easily make an appointment despite the massive no of client.   
        `
  },
  nextProject: {
    title: "next title",
    url: "/",
    thumbnailUrl: "/"
  }
};


const CaseStudy = ( { projectData = projectDataDefault, path, children } ) => {
  const { title, subTitle, about } = projectData;
  const { thumbnailUrl, title: nextProjectTitle, url } = projectData.nextProject;
  // const { headlineImg, publicURL } = projectData.imageData
  const {
    setCurrentPath
  } = useContext( AppStateContext );

  useRefreshMouseListeners( "[data-pointer]" );

  const {
    variantsUtil: { fromCaseStudy, fromProjectList }
  } = useContext( MotionValueContext );

  const { breakpoint } = useMotionBreakPoint();


  const [scrolled, setScrolled] = useState( false );
  const bodyRef = useRef( null );
  const bgRef = useRef( null );

  const moInitial = useMotionValue( fromProjectList.get() ?
    (breakpoint.get().lgUp ? ["fromProjectsInitial"] : ["fromProjectsSmallInitial"])
    : breakpoint.get().lgUp ? ["initial"] : ["smallInitial"] );

  const moAnimate = useMotionValue( fromProjectList.get() ?
    (breakpoint.get().lgUp ? ["fromProjectsAnimate"] : ["fromProjectsSmallAnimate"])
    : breakpoint.get().lgUp ? ["animate"] : ["smallAnimate"] );

  const showScrollDown = useMotionValue( 0 );

  const { locoInstance, yProgress } = useLocomotiveScroll();


  useLayoutEffect( () => {
    bodyRef.current = document.body;
  }, [] );


  useEffect( () => {
    // console.log('fromProject : ', location, path)
    bgRef.current = document.body.querySelector( ".projectContainer" );
    setCurrentPath( path );
    fromProjectList.set( false );
    fromCaseStudy.set( true );

  }, [] );

  useTransform( yProgress, latest => {
    if ( latest > .1 ) {
      if ( !scrolled )
        setScrolled( true );

    } else if ( scrolled )
      setScrolled( false );
  } );

  useEffect( () => {

    if ( scrolled ) {
      showScrollDown.set( 1 );
      bgRef.current
        ?.classList.add( "container-scrolled" );

      document.body.classList.add( "blog-clr" );
    } else {
      showScrollDown.set( 0 );

      bgRef.current
        ?.classList.remove( "container-scrolled" );

      document.body.classList.remove( "blog-clr" );

    }


    return () => document.body.classList.remove( "blog-clr" );
  }, [scrolled] );


  const returnClick = () => {
    locoInstance.scrollTo( 0, {
      easing: [0.6, 0.01, 0, 0.9],
      callback: () => setTimeout( () => navigate( projectData?.backUrl ), scrolled ? 350 : 0 )
    } );
  };

  const FixedPortal = ( props ) => createPortal( props.children, document.body );

  return (
    <>

      {
        (typeof document !== `undefined`) && <FixedPortal>
          <FixedItems>
            {/* <Link to={projectData?.backUrl || '/projects'}  > */}
            <ReturnBtn to={projectData?.backUrl || "/projects"}
                       tooltip="project list"
                       onClick={returnClick} />
            {/* </Link> */}

            <ProjectScrollDown activeIndex={showScrollDown} />

          </FixedItems>
        </FixedPortal>
      }


      <ProjectContainer className="projectContainer case-study-container"
                        variants={containerVariants}
                        initial={moInitial.get()}
                        animate={moAnimate.get()}
                        exit="exit"
                        custom={{
                          scrollTop: () => {

                          }
                        }}
      >

        <Headline
          title={title}
          subTitle={subTitle}
          about={about}
          media={projectData.headlineImage}
        />

        <HeadLineBG variants={bgVariant} transition={transition} />

        {
          children
        }

        <NextProject thumbnailUrl={thumbnailUrl} title={nextProjectTitle} url={url} />

      </ProjectContainer>
    </>

  );
};

export default CaseStudy;
