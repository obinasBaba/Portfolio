import React, { useState } from 'react';
import CaseStudy from '../../../components/CaseStudy';
import ComingSoon from '../../../components/CaseStudy/ComingSoon';
import useUpdatePath from '../../../hooks/useUpdatePath';
import Headline from '@components/CaseStudy/Headline';
import { motion } from 'framer-motion';
import { useProjectData } from '@scenes/ProjectPage/util/projectData';

function Project3 ({ location }) {
  const [scrolled, setScrolled] = useState(false);
  useUpdatePath(location.pathname);

  const project3data = useProjectData().items[2];
  const { title, tags, preview } = project3data;

  // useLocoScroll();
  // useToolTip("[data-tooltip-text]");
  // useRefreshMouseListeners( '[data-pointer]' )

  return (<CaseStudy projectData={project3data} scrolled={scrolled}>
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

      <ComingSoon />
    </motion.div>
  </CaseStudy>);
}

export default Project3;
