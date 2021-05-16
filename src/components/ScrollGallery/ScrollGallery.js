import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';
import { springDebounce } from '../../helpers';
import styled from 'styled-components'

const AnimatedDiv = styled( animated.div )`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const Gallery = ({ children, step }) => {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', springDebounce(handleScroll));
    return () =>
      window.removeEventListener('scroll', springDebounce(handleScroll));
  }, [springDebounce]);

  const [{ springscrollY }, springsetScrollY] = useSpring(() => ({
    springscrollY: 0,
  }));
  const STEP = step;
  springsetScrollY({ springscrollY: scrollY });
  const interpHeader = springscrollY.interpolate(
    o => `translateX(-${o / STEP}px)`
  );

  return (
    <AnimatedDiv  style={{ transform: interpHeader }}>
      {children}
    </AnimatedDiv>
  );
};

Gallery.propTypes = {
  step: PropTypes.number,
  children: PropTypes.array,
};

export default Gallery;
