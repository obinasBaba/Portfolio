import React from 'react';
import styled from 'styled-components';
import {
  motion,
  useMotionTemplate,
  useSpring,
  useTransform,
} from 'framer-motion';
import ImageGrid from '../../scenes/HomePage/RecentDesigns/ImageGrid';
import { spacing } from '@/styles/mixins';
import useHomeWorksAssets from '../../hooks/queries/useHomeWorksAssets';
import { useLocomotiveScroll } from '@/contexts/LocoMotive';
import { isMobile } from 'react-device-detect';

const ScrollContainer = styled.section`
  position: relative;
  width: 100%;
  //border: 3px solid red;
`;

const ScrollWrapper = styled.div`
  position: relative;
  padding: 1rem 0;
  transform: translateX(-50%);

  &:nth-of-type(2) {
    transform: translateX(-20%);
  }

  ${spacing('mb', 13)};
`;

const ScrollTrack = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  transition: transform cubic-bezier(0.6, 0.01, 0, 0.9);
`;

const Gallery = () => {
  const {
    JD_1,
    Blog,
    Resume,
    Divo,
    Rahove_team,
    Fasraf,
    Hero,
    JM_1,
    JM_2,
  } = useHomeWorksAssets();

  const imageList = [
    // useMemo
    [Resume],
    [Fasraf, JM_2, JM_1],
    [Blog],
    [JD_1, JM_2, Rahove_team],
    [Hero],
    [JD_1, JM_2, JM_1],
    [Divo],
  ];

  const { yProgress } = useLocomotiveScroll();

  const transform = useTransform(yProgress, [0, 1], [0, isMobile ? -600 : -50],
    { clamp: false });
  const x = useSpring(transform, {
    mass: 0.5, damping: 15, stiffness: 50,
  });

  return (<ScrollContainer>
    <ScrollWrapper id='image_row_container'>
      <ScrollTrack
        className='rd-scroll-track'
        // style={{ x: useMotionTemplate`${x}%` }}

        // data-scroll={true}
        // data-scroll-direction="horizontal"
        // data-scroll-speed="2"
        // data-scroll-delay=".05"
        style={{ x: useMotionTemplate`calc(${x}%)` }}
      >
        {imageList.map((item, index) => (
          <ImageGrid images={item} idx={index} key={index} />))}
      </ScrollTrack>
    </ScrollWrapper>
  </ScrollContainer>);
};

export default Gallery;
