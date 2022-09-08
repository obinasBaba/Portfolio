import React from 'react';
import styled, { css } from 'styled-components';
import Companies from '../Companies';
import { Typography } from '@material-ui/core';
import { spacing, text } from '@/styles/mixins';
import { motion } from 'framer-motion';
import { mediumUp } from '@/styles/mixins/breakpoints';

const AboutMetaContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(137.81deg, #e7a28f 3.52%, #f9d6ac 41.89%, #fbfefc 96.77%);
  height: 100%;
  flex: 50%;
  //z-index: 200;
  color: #02021e;

  display: flex;
  flex-flow: column;

  ${spacing('p', 7)};
  ${spacing('pb', 3)};

  &::after {
    z-index: -100;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    //background-color: rgba(249, 214, 172, 0.1);
    backdrop-filter: blur(2px);
  }
`;

const MetaSubtitle = styled(Typography)`
  font-weight: 700;
  opacity: 0.3;

  ${spacing('mb', 1)};
  ${text(1)};
`;

const Title = styled(Typography)`
  position: relative;
  font-weight: bold;
  ${spacing('mb', 6)};

  &::after {
    content: '';
    position: absolute;
    display: block;
    background: ${({ afterColor }) =>
            afterColor ? afterColor : 'rgb(30, 33, 61)'};
    height: 3px;
    width: 18%;
    ${spacing('mt', 2)};
  }

  ${mediumUp(css`
    ${spacing('mb', 2)};

    &::after {
      ${spacing('mt', 1)};
    }
  `)};
`;

const Description = styled(Typography)`
  //max-width: 43ch;
  font-family: var(--sofia-pro);
  font-weight: lighter;
  line-height: 160%;
  letter-spacing: 0.5px;
  //opacity: 0.7;
  color: #020b16;
  margin: 0;
  position: relative;
  ${spacing('mb', 4)};
  ${text(1.1)};
`;

const AboutEffect = styled(Typography)`
  position: absolute;
  top: 12%;
  line-height: 0;
  right: -35%;
  font-size: 15rem;
  opacity: 0.05;
  z-index: -150;
  pointer-events: none;
  user-select: none;
`;

export const transition = {
  // duration: 1,
  ease: [0.6, 0.01, 0, 0.9],
  opacity: {
    delay: .3,
  },
};

const aboutContainerVariants = {
  initial: {
    y: '110%',
    opacity: .3,

  },
  animate: {
    y: 0,
    opacity: 1,

  },
  exit: {
    y: '110%',
    opacity: 0,
    transition: {
      opacity: {
        delay: 0,
      },
    },
  },
};

const About = () => {
  return (
    <AboutMetaContainer variants={aboutContainerVariants}
                        transition={transition}
    >

      <AboutEffect variant='h1'> About </AboutEffect>

      <Title variant='h4'> About Me. </Title>


      <MetaSubtitle variant='h6'> Interactive Web developer </MetaSubtitle>
      <Description>
        I'm Henok, a 22-years-old Ethiopian Freelance Front-end developer.
        {/*<br />*/}
        I like to resolve design problems, create smart user interface and
        imagine useful interaction, developing rich web experiences & web
        applications.
        <br />
        when not working or futzing around with code, I study how to scape from
        University. Actually for hire.
      </Description>


      <Companies />


    </AboutMetaContainer>
  );
};

export default About;
