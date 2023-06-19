import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { spacing, text } from '../../../../../styles/mixins';
import * as s from './item.module.scss';

const transition = {
  ease: [0.6, 0.01, 0, 0.9],
  duration: 1.5,
};

const itemVariant = {
  initial (arg) {
    // console.log('arg:-- ', arg)
    return {
      opacity: 0,
      y: arg.idx > 1 ? 100 : -100,
    };
  },

  animateFp () {
    return {
      opacity: 1,
      y: 0,

      transition: {
        ...transition,
        delay: 0.5,
      },
    };
  },

  exitFp (arg) {
    return {
      opacity: 0,
      y: arg.idx > 1 ? 100 : -100,
    };
  },

  hover (c) {},
  hoverEnd: {},
};

const titleVariant = {
  initial: {},
  animate: {},
  exit: {},
  hover: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 0.5,
    },
  },
  hoverEnd: {},
};

const letterVariant = {
  initial: {},
  animate: {},
  exit: {},
  hover: {
    y: [null, -30, 0],
    opacity: [1, 0, 1],
    transition: {
      duration: 0.2,
    },
  },
  hoverEnd: {},
};

const ListItem = styled(motion.li)`
  //border: thin solid red;
  padding: 0;
  margin: 0;

  ${spacing('p', 2)};
  //flex: 1 1 32%;

  .titleTxt {
    line-height: 180%;
    font-weight: bold;

    span {
      display: inline-block;
    }
  }
`;

const Tags = styled.div`
  display: flex;
  align-items: center;
  //flex-flow: column;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 0;

  ${spacing('gap', 1)};

  p {
    ${text(0.6)};
    font-weight: lighter;
    opacity: 0.6;
  }
`;

function Item ({ onHoverStart, onHoverEnd, title, tags, desc, idx }) {
  return (
    <motion.li
      className={s.container}
      variants={itemVariant}
      transition={transition}
      custom={{ idx }}
      onHoverStart={() => onHoverStart()}
      onHoverEnd={() => onHoverEnd()}
    >
      <Typography variant='h3' className={s.titleTxt}>
        {title}
      </Typography>

      <div className={s.tags}>
        {tags.map((tag, idx) => (
          <p key={idx}>{tag}</p>
        ))}
      </div>

      <Typography className={s.text}>{desc}</Typography>
    </motion.li>
  );
}

export default Item;
