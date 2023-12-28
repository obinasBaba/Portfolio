import React, { useState } from 'react';
import CaseStudy from '@components/CaseStudy';
import useUpdatePath from '@hooks/useUpdatePath';
import Headline from '@components/CaseStudy/Headline';
import { motion } from 'framer-motion';
import { useProjectData } from '@scenes/ProjectPage/util/projectData';
import MetaTxt from '@components/CaseStudy/MetaTxt';
import { Container, Typography } from '@material-ui/core';

function Project3 ({ location }) {
  const [scrolled, setScrolled] = useState(false);
  useUpdatePath(location.pathname);

  const project3data = useProjectData().items[2];
  const { title, tags, preview, liveUrl } = project3data;

  const desc = `
         
      Rahove Technologies is a tech agency that takes your digital dreams
       and turns them into pixelated reality. I was responsible for creating an intuitive, 
       modern, and unique web experience. The work is a collection of many 
       inspirations and ideas that I have collected serfing the web. The site needs 
       some refinement here and there; I'm still tinkering with the knobs and dials,
        but it's a good start.
         
        `;

  const about = [
    { q: 'Period -', a: 'Start Of 2023' },
    { q: 'Clients -', a: 'Rahove Technologies' },
    { q: 'Context -', a: 'api, CMS, responsiveness, motion-design, frontend' },
    { q: 'frameworks -', a: 'React.js, Strapi.js' },
    { q: 'Role -', a: 'Fullstack Developer' },
    { q: 'Build -', a: 'See It Live' },
  ];

  return (<CaseStudy projectData={project3data} scrolled={scrolled}>
    <Headline title={title} tags={tags} media={preview.publicURL}
              liveUrl={liveUrl}
    />


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
      <MetaTxt link={liveUrl}
               about={about}
               desc={desc}
      />
    </motion.div>

    <Container fixed={false} maxWidth='md'

    >
      <Typography className='titleTxt' variant='h2'
                  style={{ margin: '14rem 0rem' }}
                  noWrap
      >
        On Going Story ...
      </Typography>
    </Container>

  </CaseStudy>);
}

export default Project3;
