import React from 'react';
import { Link, navigate } from 'gatsby';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { itemVariants, transition } from '../variants';
import { length, text } from '../../../../../styles/mixins';
import OverlayController from '../../../../ScreenOverlay/OverlayController';
import {
  largeUp,
  mediumUp,
  xxLargeUp,
} from '../../../../../styles/mixins/breakpoints';

const hoverMixin = css`
  [data-circle="1"] {
    transform: scale(1.62);
    transition: 1s cubic-bezier(0.6, 0.01, 0, 0.9);

    ${xxLargeUp(css`
      transform: scale(1.32);
    `)};
  }

  [data-circle="2"],
  [data-circle="3"] {
    transform: scale(2.6);
    transition: 1s cubic-bezier(0.6, 0.01, 0, 0.9);

    ${xxLargeUp(css`
      transform: scale(1.62);
    `)};
  }

  [data-circle="4"] {
    transform: scale(2);
    transition: 1s cubic-bezier(0.6, 0.01, 0, 0.9);

    ${xxLargeUp(css`
      transform: scale(1.7);
    `)};
  }

  .stars {
    opacity: 1;
    //z-index: 1;
    transform: translate(-50%, -50%) rotate(-20deg) scale(0.8);
    transition-delay: 0.2s;
    transition: 1s cubic-bezier(0.6, 0.01, 0, 0.9);
  }

  .icon {
    opacity: 1;
    //z-index: 1;
    transition-delay: 0.2s;
    transform: translate(-50%, -50%) scale(0.8);
    transition: 1s cubic-bezier(0.6, 0.01, 0, 0.9);

    //@media screen and (max-width: $md) {
    //  display: none;
    //}
  }
`;

const ItemContainer = styled(motion.li)`
  position: relative;
  //border: thin solid red;

  &:nth-child(even) {
    align-self: flex-end;
    margin-right: 5%;
  }

  ${largeUp(css`
    &:nth-child(1) {
      margin-left: 20%;
    }

    &:nth-child(3) {
      //margin-top: 50px;
      align-self: center;
    }

    &:nth-child(4) {
      margin-right: 76%;
    }
  `)};

  ${({ active }) =>
          active &&
          css`
            ${hoverMixin}
          `};

  &:hover {
    ${hoverMixin};
  }
`;

const Title = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  font-weight: bold;
  letter-spacing: 0.357em;
  text-transform: uppercase;
  color: #fafafa;
  text-shadow: 0.1em 0.1em 0.3em #000;
  pointer-events: none;

  font-size: 1.2rem;


  ${mediumUp(css`
    ${text(1)};
  `)};

  ${largeUp(css`
    ${text(0.86)};
  `)};


  ${xxLargeUp(css`
    ${text(1)};
  `)};
`;

const Circle = styled(motion.div)`
  //--size: 60px;

  position: relative;
  transition: 1s cubic-bezier(0.6, 0.01, 0, 0.9);
  border-radius: 50%;
  //width: var(--size);
  //height: var(--size);
  background-color: #1e213d;
  //transition: transform 0.5s;

  &[data-circle="1"] {
    ${length('width', 23)};
    ${length('height', 23)};
  }

  &[data-circle="2"] {
    ${length('width', 16)};
    ${length('height', 16)};
  }

  &[data-circle="3"] {
    ${length('width', 14)};
    ${length('height', 14)};
  }

  &[data-circle="4"] {
    ${length('width', 20)};
    ${length('height', 20)};
  }

  a {
    //position: absolute;
    //top: 0;
    //left: 0;
    //right: 0;
    //bottom: 0;
    z-index: 20;
  }

  ${mediumUp(css`
    &[data-circle="1"] {
      --size: 10.24rem;

      width: var(--size);
      height: var(--size);

      ${xxLargeUp(css`
        --size: 16.24rem;
      `)};
    }

    &[data-circle="2"] {
      --size: 5.858rem;

      width: var(--size);
      height: var(--size);

      ${xxLargeUp(css`
        --size: 11.24rem;
      `)};
    }

    &[data-circle="3"] {
      --size: 5.258rem;

      width: var(--size);
      height: var(--size);

      ${xxLargeUp(css`
        --size: 9.24rem;
      `)};
    }

    &[data-circle="4"] {
      --size: 7.75rem;

      width: var(--size);
      height: var(--size);

      ${xxLargeUp(css`
        --size: 11.24rem;
      `)};
    }
  `)};
`;

const Star = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 19.86rem;
  height: 19.86rem;
  background-image: url("${({ bgimg }) => bgimg}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  transform-origin: center;
  transform: translate(-50%, -50%) rotate(0deg);
  //transition: opacity 0.3s, transform 0.4s;
  opacity: 0;
  pointer-events: none;
  transition: all 1s cubic-bezier(0.6, 0.01, 0, 0.9);
`;

const Icon = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  background-image: url("${({ bgimg }) => bgimg}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  //transition: opacity 0.5s;
  transform: translate(-50%, -50%);
  opacity: 0;
  pointer-events: none;
  transition: all 1s cubic-bezier(0.6, 0.01, 0, 0.9);

  &[data-icon="1"] {
    width: 11.33rem;
    height: 11.33rem;
  }

  &[data-icon="2"],
  &[data-icon="3"] {
    width: 13.17rem;
    height: 11.83rem;
  }

  &[data-icon="4"] {
    width: 9.75rem;
    height: 12.08rem;
  }
`;

const Item = ({ currentPath, link, stars, icon, index, title, onClick }) => {
  const handleLinkClick = (ev) => {
    ev.preventDefault();
    // Promise.resolve().then(() => setCurrentPath(link))
    if (OverlayController.isAnimating || window.isMenuAnimating) return;

    if (link === currentPath) return;

    onClick();

    setTimeout(() => navigate(link), 1400);
  };

  return (
    <ItemContainer
      variants={itemVariants}
      className='nav-menu-item'
      data-pointer={link !== currentPath && 'focus'}
      transition={transition}
      active={link === currentPath && currentPath !== '/'}
      key={link + index + title}
    >
      <Link to={link} onClick={(ev) => handleLinkClick(ev)}>
        <Circle data-circle={index + 1} />

        <Star bgimg={stars.publicURL} className='stars' />

        <Icon bgimg={icon.publicURL} data-icon={index + 1} className='icon' />
      </Link>

      <Title>{title}</Title>
    </ItemContainer>
  );
};

// benchmarking( react, chrome profiler)

export default Item;
