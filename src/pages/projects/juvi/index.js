import React, { useState } from 'react';
import useJuviAssets from '@hooks/queries/juvi/useJuviAssets';
import useToolTip from '@hooks/useToolTip';
import CaseStudy from '@components/CaseStudy';
import ColorPalette from '@components/CaseStudy/Colors';
import FontUsed from '@components/CaseStudy/FontUsed';
import useUpdatePath from '@hooks/useUpdatePath';
import MetaTxt from '@components/CaseStudy/MetaTxt';
import Intro from '@components/CaseStudy/Intro';
import RectangleView from '@/components/juvi-components/RectangleView';
import Headline from '@components/CaseStudy/Headline';
import useJuviMarqueeAssets from '@hooks/queries/juvi/useJuviMarqueeAssets';
import ElementsViewSection
  from '@/components/juvi-components/ElementsViewSection';
import CarouselSliderDesktop
  from '@/components/juvi-components/CarouselSliderDesktop';
import CarouselSliderMobile
  from '@/components/juvi-components/CarouselSliderMobile';
import useJuviVideo, {
  useJuviCarouselDesktopVid,
} from '@hooks/queries/juvi/useJuviVideo';
import { useProjectData } from '@scenes/ProjectPage/util/projectData';
import Seo from '@components/seo';
import { motion } from 'framer-motion';
import HorizontalGallery from '@/components/juvi-components/HorizontalGallery';
import Development from '@components/CaseStudy/Development';

function Juvi ({ location }) {
  // console.log('vigozaArg: ', arg)

  useToolTip('[data-tooltip-text]');
  useUpdatePath(location.pathname);

  const [scrolled, setScrolled] = useState(false);

  const { introMp4, introWebm, introPlaceholder } = useJuviVideo();
  const carouselDesktop = useJuviCarouselDesktopVid();
  const {
    mp,
    mp2,
    mp3,
    mp4,
    mp5,
    mp6,
    mp7,
    mp8,
    rectView,
    devShot,
  } = useJuviMarqueeAssets();

  const mobileCarousel = [mp, mp2, mp3, mp4, mp5, mp6, mp7, mp8];
  const juviData = useProjectData().items[0];

  const { title, tags, preview, liveUrl } = juviData;

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
      <Seo
        title='Juvi'
        description='case-study for one of the project i have built juve liqour store, an ecommerce site'
      />

      <Headline title={title} tags={tags} media={preview.publicURL}
                liveUrl={liveUrl} />

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
        <MetaTxt link={liveUrl} />
      </motion.div>

      <RectangleView img={rectView} />

      <Intro
        desc={juviData.intro.desc}
        vidProps={{
          mp4: introMp4.publicURL,
          webm: introWebm.publicURL,
          img: introPlaceholder,
        }}
      />

      <CarouselSliderDesktop videos={carouselDesktop}
                             topTxt='I have put together one of unique shot to present them in carousal,
                             it include page transition, interaction and some cool animations '
      />

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

      <Development img={devShot} />
    </CaseStudy>
  );
}

export default Juvi;
