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
import useUpdatePath from "../../../hooks/useUpdatePath";
import ElementsViewSection from "@/pages/projects/juvi/components/ElementsViewSection";
import RectangleView from "@/pages/projects/juvi/components/RectangleView";
import Headline from "@components/CaseStudy/Headline";
import HorizontalGallery from "@/pages/projects/juvi/components/HorizontalGallery";
import useJuviMarqueeAssets from "@hooks/queries/juvi/useJuviMarqueeAssets";
import CarouselSliderDesktop from "@/pages/projects/juvi/components/CarouselSliderDesktop";
import CarouselSliderMobile from "@/pages/projects/juvi/components/CarouselSliderMobile";
import useJuviVideo, {
  useJuviCarouselDesktopVid,
} from "@hooks/queries/juvi/useJuviVideo";
import { useProjectData } from '@scenes/ProjectPage/util/projectData';


function Juvi({ location }) {
  // console.log('vigozaArg: ', arg)

  useToolTip("[data-tooltip-text]");
  useUpdatePath(location.pathname);

  const [scrolled, setScrolled] = useState(false);

  const { introMp4, introWebm, introPlaceholder } = useJuviVideo();
  const carouselDesktop = useJuviCarouselDesktopVid();
  const { mp, mp2, mp3, mp4, mp5, mp6, mp7, mp8 } = useJuviMarqueeAssets();

  const mobileCarousel = [mp, mp2, mp3, mp4, mp5, mp6, mp7, mp8];
  const juviData = useProjectData().items[0];

  const { title, tags, preview } = juviData;

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



  // projectDataDefault.nextProject.thumbnailUrl = headlineImage.publicURL;
  // projectDataDefault.location = location;

  return (
    <CaseStudy projectData={juviData} scrolled={scrolled}>
      <Headline title={title} tags={tags} media={preview.publicURL} />

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

export default Juvi;
