import React, { useState } from 'react';
import CaseStudy from '../../../components/CaseStudy';
import ComingSoon from '../../../components/CaseStudy/ComingSoon';
import useProject2Assets from '../../../hooks/queries/useProject2Assets';
import useUpdatePath from '../../../hooks/useUpdatePath';
import Headline from '@components/CaseStudy/Headline';
import { motion } from 'framer-motion';
import { useProjectData } from '@scenes/ProjectPage/util/projectData';



function Project2 ({ location }) {
  const { headlineImage } = useProject2Assets();

  const project2Data = useProjectData().items[1];
  const { title, tags, preview } = project2Data;

  useUpdatePath(location.pathname);
  const [scrolled, setScrolled] = useState(false);

  // useLocoScroll();
  // useToolTip('[data-tooltip-text]');
  // useRefreshMouseListeners( '[data-pointer]' )

  return (
    <CaseStudy projectData={project2Data} scrolled={scrolled}>
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

export default Project2;
