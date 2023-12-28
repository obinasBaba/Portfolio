import React, { useState } from 'react';
import CaseStudy from '@components/CaseStudy';
import useUpdatePath from '@hooks/useUpdatePath';
import Headline from '@components/CaseStudy/Headline';
import { motion } from 'framer-motion';
import { useProjectData } from '@scenes/ProjectPage/util/projectData';
import MetaTxt from '@components/CaseStudy/MetaTxt';
import useLssyaAssets from '@hooks/queries/useLssyaAssets';
import RectangleView from '@components/juvi-components/RectangleView';
import { Container, Typography } from '@material-ui/core';

function Project2 ({ location }) {

  const [scrolled, setScrolled] = useState(false);
  const lssyaData = useProjectData().items[1];
  const { title, tags, preview, liveUrl } = lssyaData;

  useUpdatePath(location.pathname);

  const { rectView } = useLssyaAssets();

  // useLocoScroll();
  // useToolTip('[data-tooltip-text]');
  // useRefreshMouseListeners( '[data-pointer]' )

  const desc = `Lssya, 
        Therapy, but make it digital. Lssya cuts through the mental health
         maze with secure video chat, real-time messaging, and top-notch therapists a click away.
        As the lead front-end developer, I poured my heart (and a surprising amount of predator) into 
        building this online platform that
         connects you with licensed therapists faster than you can say, "I wanna kill my self!".
         <br/>
        Shout out to  <a target='_blank' referrerpolicy='no-referrer'  href='https://www.linkedin.com/in/filimon-mehari-64452020b/'>Filimon</a>, 
        the creative whiz behind the branding and UI that's so sleek it should be illegal, 
        and , the backend queen(and a caffeine addict) who built the whole thing without breaking a virtual
         sweat, and <a target='_blank' referrerpolicy='no-referrer'  href='https://www.linkedin.com/in/dawit-getachew/'>Dave</a>... well,
          Dave kept us caffeinated. Four months, countless lines of code,
          and one mission: to make mental health support accessible, convenient, and maybe even a little fun.
        `;

  const about = [
    { q: 'Period -', a: 'End 2022' },
    { q: 'Clients -', a: 'Lssya' },
    { q: 'Context -', a: 'Web, Front-end, Branding, responsive, Interaction' },
    { q: 'frameworks -', a: 'React.js, graphql' },
    { q: 'Role -', a: 'Senior Frontend' },
    { q: 'Build -', a: 'See It Live' }];

  return (
    <CaseStudy projectData={lssyaData} scrolled={scrolled}>
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

      <RectangleView img={rectView} />

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

export default Project2;
