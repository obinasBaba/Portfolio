import React, { useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import useMenuAssets from '../../../../hooks/queries/useMenuAssets';
import { containerVariants } from './variants';
import { AppStateContext } from '@contexts/AppStateContext';
import Item from './components/Item';

import * as s from './menu.module.scss';

const metaRowVariants = {
  initial: {},

  animate: {
    transition: {
      staggerChildren: 0.05, delayChildren: 1.5,
    },
  },

  exit: {
    transition: {
      staggerChildren: 0.05, delayChildren: 0, staggerDirection: -1,
    },
  },
};

const transition = {
  duration: 1, ease: [0.6, 0.01, 0, 0.9],
};

const metaVariant = {
  initial: {
    opacity: 0, y: '110%',
  },

  animate: {
    opacity: 1, y: 0,
  },

  exit: {
    opacity: 0, y: '-110%', transition: {
      ...transition, duration: 0.3,
    },
  },
};

const Menu = ({ onClick }) => {
  const {
    blogIcon,
    blogStars,
    contactsIcon,
    contactsStars,
    portfolioIcon,
    portfolioStars,
    servicesIcon,
    servicesStars,
  } = useMenuAssets();

  const items = [
    {
      title: 'Projects',
      link: '/projects/',
      icon: portfolioIcon,
      stars: portfolioStars,
    }, {
      title: 'About', link: '/about/', icon: servicesIcon, stars: servicesStars,
    }, {
      title: 'Blog', link: '/blog', icon: blogIcon, stars: blogStars,
    }, {
      title: 'Contact',
      link: '/contact/',
      icon: contactsIcon,
      stars: contactsStars,
    }];
  const metaTxt = ['Linkedin', ' Github', 'Instagram'];

  const metaTxt2 = ['+251 923 36 5539', 'hi@henzzo.io'];

  const { currentPath, setListenerTargetSelector } = useContext(
    AppStateContext);

  useEffect(() => {
    setListenerTargetSelector('#menu-container [data-pointer]');

    return () => setListenerTargetSelector(undefined);
  }, []);

  return (<motion.div
    className={s.container}
    variants={{}}
    initial='initial'
    animate='animate'
    exit='exit'
    onAnimationComplete={() => {
      window.isMenuAnimating = false;
    }}
    onAnimationStart={() => {
      window.isMenuAnimating = true;
    }}
  >
    <motion.div className={s.nav_detail}
                variants={metaRowVariants}
                transition={transition}>
      {metaTxt.map((txt, i) => (<motion.div className={s.detail_item}
                                            variants={metaVariant}
                                            transition={transition}
                                            key={txt}>
        {txt} {i === 3 && <> &#160; &#160;</>}{' '}
      </motion.div>))}
    </motion.div>

    <motion.ul className={s.wrapper} variants={containerVariants}>
      {items.map(({ icon, link, stars, title }, index) => (
        <Item active={link === currentPath && currentPath !== '/'}
              key={title}
              link={link}
              stars={stars}
              icon={icon}
              currentPath={currentPath}
              index={index}
              title={title}
              onClick={onClick}
        />))}
    </motion.ul>

    <motion.div className={s.nav_detail}
                variants={metaRowVariants}
                transition={transition}>
      {metaTxt2.map((txt, i) => (<motion.div className={s.detail_item}
                                             variants={metaVariant}
                                             transition={transition}
                                             key={txt}>
        {txt} {i === 3 && <> &#160; &#160;</>}{' '}
      </motion.div>))}
    </motion.div>


  </motion.div>);
};

export default Menu;
