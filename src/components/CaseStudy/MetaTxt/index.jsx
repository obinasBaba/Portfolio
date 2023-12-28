
import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import { spacing } from '@/styles/mixins';
import { desc, container, seeLive, key, value, wrapper } from './metaintro.module.scss';

export const Q = styled(Typography)`
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

export const A = styled(Typography)`
  //line-height: 160%;
  letter-spacing: 0;
  font-weight: 100;

    // ${spacing('text-indent', 1)};
`;


// descripe the props using comment

/**
 * MetaTxt
 * @param link
 * @param description
 * @param about
 * @returns {Element}
 * @constructor
 */
const MetaTxt = ({ link, desc: description, about } ) => {


  return (<div className={container}>
    <Typography variant='h1'> Intro  </Typography>

    <Typography className={desc}
                dangerouslySetInnerHTML={{
                  __html: description
                }}
    />

    <motion.ul className={wrapper}>
      {about.map(({ q, a }, idx) => (<li key={q}>
        <Typography noWrap className={key} variant='h6'>
          {q}
        </Typography>

        {link && idx === about.length - 1 ? (<a href={link} className={seeLive}>
          <Typography className={value} variant='subtitle'>
            {a}
          </Typography>
        </a>) : (<Typography className={value} variant='subtitle'>
          {a}
        </Typography>)}
      </li>))}
    </motion.ul>
  </div>);
};

export default MetaTxt;
