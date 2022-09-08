import React, { useRef } from 'react';
import { Link } from 'gatsby';
import { ReactSVG } from 'react-svg';
import { motion } from 'framer-motion';
import useHeaderAssets from '../../../hooks/queries/useHeaderAssets';
import { homeLogo, reactSvg } from './appbarComponents.module.scss';

const logoVariant = {
  initial: {
    opacity: 0,
    scale: 1.56,
    rotate: 20,
  },
  animate: {
    opacity: 1,
    scale: 1.05,
    rotate: 0,
  },
  exit: {},

  transition: {
    ease: [0.6, 0.01, 0, 0.9],
    duration: 3,
  },
};

function HomeLogo ({ toggleMenu }) {
  const { logo } = useHeaderAssets();
  const logoRef = useRef(null);

  return (
    <motion.div
      variants={logoVariant}
      transition={logoVariant.transition}
      className={homeLogo}
      data-pointer='magnet'
      data-magnet-distance={.8}
      data-magnet-attraction={1.8}
      data-pointer-color='#5d6c7b'
      data-tooltip
      data-tooltip-text='Where it all started'
      ref={logoRef}
      onClick={toggleMenu}
    >

      <Link aria-label='to homepage' to='/'>
        <ReactSVG className={reactSvg} src={logo.publicURL} />
      </Link>

    </motion.div>
  );
}

export default HomeLogo;
