import React, { useState } from 'react';
import Headline from '@components/CaseStudy/Headline';
import { motion } from 'framer-motion';
import useJuviAssets from '@hooks/queries/juvi/useJuviAssets';
import useToolTip from '../../../hooks/useToolTip';
import CaseStudy from '../../../components/CaseStudy';
import MetaTxt from '../../../components/CaseStudy/MetaTxt';
import Intro from '../../../components/CaseStudy/Intro';
import ColorPalette from '../../../components/CaseStudy/Colors';
import FontUsed from '../../../components/CaseStudy/FontUsed';
import Development from '../../../components/CaseStudy/Development';
import useVigozaAssets from '../../../hooks/queries/useVigozaAssets';
import useUpdatePath from '../../../hooks/useUpdatePath';
import MarqueeSliderView
  from '@/pages/projects/vigoza/components/MarqueeSliderView';
import ElementsViewSection
  from '@/pages/projects/vigoza/components/ElementsViewSection';
import HorizontalGallery
  from '@/pages/projects/vigoza/components/HorizontalGallery';
import RectangleView from '@/pages/projects/vigoza/components/RectangleView';

const projectDataDefault = {
  title: 'Vigoza Digital Agency', subTitle: 'this is vigoza subtitle', about: {
    role: 'FrontEnd Developer', context: 'Design', period: 'End 2018',
  }, intro: {
    color: '#02021e',
    themeColor: '#973c22',
    logoUrl: '/projects/vigoza-logo.svg', // imageData: preview2,
    link: '/',
    title: 'The Project',
    desc: `
        Vigoza is a full-service digital agency that builds immersive user experience.
        The Team create an exceptional visualization and thought-out functionality.
        The studio develops the products people appreciate all around the world.
        This project is made to make it easy to witness and follow-up their work and to keep their clients
        more close
        `,
  }, backUrl: '/projects#two', nextProject: {
    title: 'Gebeya', url: '/projects/project2', thumbnailUrl: '',
  },
};

const DetectViewPort = ({
  children = 0.5, onEnter, onLeave, options = { amount: 0.5 },
}) => (<motion.div
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
</motion.div>);

function Vigoza ({ location }) {
  // console.log('vigozaArg: ', arg)

  useToolTip('[data-tooltip-text]');
  useUpdatePath(location.pathname);
  const { headlineImage, webView, mobileView, showcase } = useVigozaAssets();

  const [scrolled, setScrolled] = useState(false);

  const {
    amber,
    flame,
    pearl,
    spartan,
    white,
    fontAby,
    fontRai,
    elements,
  } = useJuviAssets();

  const colors = [amber, flame, pearl, spartan, white];
  const { title, subTitle, about } = projectDataDefault;
  projectDataDefault.nextProject.thumbnailUrl = headlineImage.publicURL;
  projectDataDefault.location = location;
  // useLocoScroll();

  return (

    <CaseStudy projectData={projectDataDefault} scrolled={scrolled}>
      {/*<Headline title={title} subTitle={subTitle} about={about} media='' />*/}

      <motion.div
        viewport={{
          amount: 0.6,
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
        <MetaTxt link='juvi.henzzo.com' />
      </motion.div>

      {/*<RectangleView />*/}

      {/*<MarqueeSliderView />*/}

      <HorizontalGallery />

      <Intro intro={projectDataDefault.intro} />


      <ColorPalette colors={colors} />

      <FontUsed fonts={[fontAby, fontRai]} />

      <ElementsViewSection elements={elements} />

      {/* <Concept /> */}

      <Development />
    </CaseStudy>
  );
}

export default Vigoza;
