import React, { useState } from "react";
import { motion } from "framer-motion";
import useJuviAssets from "@hooks/queries/juvi/useJuviAssets";
import useToolTip from "../../../hooks/useToolTip";
import CaseStudy from "../../../components/CaseStudy";
import MetaTxt from "../../../components/CaseStudy/MetaTxt";
import Intro from "../../../components/CaseStudy/Intro";
import ColorPalette from "../../../components/CaseStudy/Colors";
import FontUsed from "../../../components/CaseStudy/FontUsed";
import Development from "../../../components/CaseStudy/Development";
import useVigozaAssets from "../../../hooks/queries/useVigozaAssets";
import useUpdatePath from "../../../hooks/useUpdatePath";
import ElementsViewSection from "@/pages/projects/vigoza/components/ElementsViewSection";
import RectangleView from "@/pages/projects/vigoza/components/RectangleView";
import Headline from "@components/CaseStudy/Headline";
import HorizontalGallery from "@/pages/projects/vigoza/components/HorizontalGallery";
import useJuviMarqueeAssets from "@hooks/queries/juvi/useJuviMarqueeAssets";
import CarouselSliderDesktop from "@/pages/projects/vigoza/components/CarouselSliderDesktop";
import CarouselSliderMobile from "@/pages/projects/vigoza/components/CarouselSliderMobile";
import useJuviVideo, {
  useJuviCarouselDesktopVid,
} from "@hooks/queries/juvi/useJuviVideo";

const projectDataDefault = {
  title: "Vigoza Digital Agency",
  subTitle: "this is vigoza subtitle",
  about: {
    role: "FrontEnd Developer",
    context: "Design",
    period: "End 2018",
  },
  intro: {
    color: "#02021e",
    themeColor: "#973c22",
    logoUrl: "/projects/vigoza-logo.svg", // imageData: preview2,
    link: "/",
    title: "The Project",
    desc: `
        Vigoza is a full-service digital agency that builds immersive user experience.
        The Team create an exceptional visualization and thought-out functionality.
        The studio develops the products people appreciate all around the world.
        This project is made to make it easy to witness and follow-up their work and to keep their clients
        more close
        `,
  },
  backUrl: "/projects#two",
  nextProject: {
    title: "Gebeya",
    url: "/projects/project2",
    thumbnailUrl: "",
  },
};

const juviData = {
  intro: {
    desc: {
      title: "background",
      text: `To win over country wide markets, Juvi-House needed to better
       communicate its brand story with a revamped website experience.
       Reinventing the brand’s website to support growth, and integrating digital 
              storytelling to help influence the perceptions of consumers was the main goal.
       The revamped digital experience, coupled with search engine optimizations, customizations, 
                and an eCommerce capability, helped the brand evolve in a larger market. 
              
       `,
    },
  },
  sections: {
    collections: {
      title: "Collections",
      text: `the shop pages provide a clean overview
       of all available products. it also offers a faster purchase option for returning customers.
       thanks to an intuitive filter, a desired product can be quickly narrowed down with just a few clicks.
        for example, customers can search for a desired price range.
       
       `,
    },
    mobileView: {
      title: "Products",
      text: `I gave each item enough space to tell its own story, each product
          page opens with and individual and inviting introduction.  various elements (images, illustrations, text, colours),
           created in collaboration with several other team members, were carefully combined to create unique compositions for each item.
      `,
    },
  },
};
/*
 *   i used d/t arts that are subtle and not storing on the eye to keep
 * the aesthetics, theme and calm of the site
 * */

const DetectViewPort = ({
  children = 0.5,
  onEnter,
  onLeave,
  options = { amount: 0.5 },
}) => (
  <motion.div
    viewport={{
      ...options,
    }}
    onViewportEnter={(entry) => {
      onEnter(entry);
    }}
    onViewportLeave={(entry) => {
      onLeave(entry);
    }}
  >
    {children}
  </motion.div>
);

function Vigoza({ location }) {
  // console.log('vigozaArg: ', arg)

  useToolTip("[data-tooltip-text]");
  useUpdatePath(location.pathname);
  const { headlineImage, webView, mobileView, showcase } = useVigozaAssets();

  const [scrolled, setScrolled] = useState(false);

  const { introMp4, introWebm, introPlaceholder } = useJuviVideo();

  const carouselDesktop = useJuviCarouselDesktopVid();

  const { mp, mp2, mp3, mp4, mp5, mp6, mp7, mp8 } = useJuviMarqueeAssets();
  const mobileCarousel = [mp, mp2, mp3, mp4, mp5, mp6, mp7, mp8];

  const {
    amber,
    flame,
    pearl,
    spartan,
    white,
    fontAby,
    fontRai,
    element1,
    element2,
    element3,
    element4,
    element5,
  } = useJuviAssets();

  const colors = [amber, flame, pearl, spartan, white];
  const { title, subTitle, about } = projectDataDefault;
  projectDataDefault.nextProject.thumbnailUrl = headlineImage.publicURL;
  projectDataDefault.location = location;

  return (
    <CaseStudy projectData={projectDataDefault} scrolled={scrolled}>
      {/*<Headline title={title} subTitle={subTitle} about={about} media='' />*/}

      <motion.div
        viewport={{
          amount: 0.25,
        }}
        onViewportEnter={() => {
          if (!scrolled) setScrolled(true);
        }}
        onViewportLeave={(entry) => {
          if (entry.boundingClientRect.y >= 0) {
            setScrolled(false);
          }
        }}
      >
        <MetaTxt link="juvi.henzzo.com" />
      </motion.div>

      <RectangleView />

      <Intro
        desc={juviData.intro.desc}
        vidProps={{
          mp4: introMp4.publicURL,
          webm: introWebm.publicURL,
          img: introPlaceholder,
        }}
      />

      <CarouselSliderDesktop videos={carouselDesktop} />

      <CarouselSliderMobile
        images={mobileCarousel}
        desc={juviData.sections.mobileView}
      />

      <ElementsViewSection
        elements={[element1, element2, element3, element4, element5]}
      />

      <ColorPalette colors={colors} />

      <FontUsed fonts={[fontAby, fontRai]} />

      <HorizontalGallery />

      <Development />
    </CaseStudy>
  );
}

export default Vigoza;
