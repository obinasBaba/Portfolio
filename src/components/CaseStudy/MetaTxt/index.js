import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import { spacing } from '@/styles/mixins';
import ResponsiveContainer from '../../ResponsiveContainer';
import {
  container,
  desc,
  key,
  seeLive,
  value,
  wrapper,
} from './metaintro.module.scss';

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

const MetaTxt = ({ link }) => {
  const about = [
    { q: 'Period -', a: 'End 2020' },
    { q: 'Clients -', a: 'Juvi House' },
    { q: 'Context -', a: 'Web, Front-end, E-commerce, Cms, Interaction' },
    { q: 'tools -', a: 'figma, javascript, illustrator' },
    { q: 'Role -', a: 'UI Design / Coding' },
    { q: 'Build -', a: 'See It Live' },
  ];

  return (
    <ResponsiveContainer className={container}>

      <Typography variant='h1'> Intro </Typography>


      <Typography className={desc}>
        Juvi house, A premium liquor brand, startup invented by two caring young
        founders, was struggling to gain market share due to consumer perception
        that their products was a low-end spirit compared to more local
        alternatives. The brand needed a new website experience that would allow
        them to tell the story of Juvi and communicate its exceptional quality
        for serious liquor drinkers. I spent two months shaping this
        minimalistic web project in close collaboration with them and am so
        happy with the result.
      </Typography>

      <motion.ul className={wrapper}>
        {about.map(({ q, a }, idx) => (
          <li key={q}>
            <Typography noWrap className={key} variant='h6'> {q}</Typography>

            {
              (link && idx === about.length - 1) ? <a href={link}
                                                      className={seeLive}>
                  <Typography className={value}
                              variant='subtitle'> {a} </Typography>
                </a>
                :
                <Typography className={value}
                            variant='subtitle'> {a} </Typography>

            }

          </li>
        ))}
      </motion.ul>


    </ResponsiveContainer>
  );
};

export default MetaTxt;
