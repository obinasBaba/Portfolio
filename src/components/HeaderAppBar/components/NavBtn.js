import React from "react";
import styled, { css } from "styled-components";
import { length } from "../../../styles/mixins";
import { motion } from "framer-motion";

// const headerTransition = 'all .3s'

const Btn = styled( motion.button )`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  pointer-events: initial;

  border-radius: 50%;
  background-color: transparent;
  //cursor: none;
  transition: background-color 0.3s, border 0.3s;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);

  ${length( "height", 5 )};
  ${length( "width", 5 )};

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -15px;
    left: -15px;
    right: -15px;
    bottom: -15px;

    //border: thin solid red;
  }


  svg {
    position: absolute;
    inset: 0;

    ${( { menu_open } ) => menu_open && css`
      #eye-left, #eye-right {
        fill: #072142;
      }
    `};
  }

  & :hover {
    svg {
      #eye-left, #eye-right {
        fill: #072142;
      }
    }
  }


`;


const HiddenText = styled.p`
  text-indent: 99999px;
  pointer-events: none;

`;

const navBtnVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1
  },
  transition: {
    ease: [0.6, 0.01, 0, 0.9],
    duration: 3
  }
};

const NavBtn = ( { isWhite, toggleMenu, pos, variants = {}, menuIsOpen } ) => {
  // useMagnet('.nav-btn', 1.6, 0.51)

  return (
    <Btn
      className="nav-btn"
      data-pointer="magnet"
      data-magnet-distance={.8}
      data-magnet-attraction={1.8}
      data-tooltip
      data-tooltip-text="open my space"
      iswhite={isWhite}
      menu_open={menuIsOpen.toString()}
      pos={pos}
      onClick={toggleMenu}

      variants={navBtnVariants}
      transition={navBtnVariants.transition}
    >
      {/*<Bars opened={toggleMenu.menuIsOpen} />*/}

      <svg xmlns="http://www.w3.org/2000/svg"
           width="100%" height="100%" viewBox="0 0 58.321 70.444">
        <g id="AlienFace" transform="translate(-550.368 -1104.358)">
          <path id="Path_255" data-name="Path 255"
                d="M379.5-127.1a28.883,28.883,0,0,0-14.5,8.8c-7.2,7.7-9.2,16-6.6,26.3,3.5,13.4,14.9,29.3,23.1,32,6.2,2,10.1.6,17-6.3,11.6-11.7,17.6-28.9,14.2-40.8-2-6.9-8.1-14.1-14.8-17.4C392.7-127.2,384.3-128.4,379.5-127.1Zm-.9,25.6c3.5,2.2,5.6,7.7,5.2,13.3-.3,4.7-.3,4.7-4.3,5-5.6.5-11.1-1.4-13.3-4.6-2.4-3.3-3.5-9.3-2.7-13.4l.7-3.1,5.9.6C373.4-103.4,377.2-102.4,378.6-101.5ZM407.8-98c.4,9.6-5,15-15.3,15H388v-6.4c0-5,.5-6.9,2.2-9.1,2.9-3.7,7.4-5.5,12.8-5.2l4.5.2ZM389.5-67c.4.6-1.628-.4-4.328-.4-2.5,0-4.172.9-4.172.4,0-.6,2.072-.766,4.172-.766C387.372-67.766,389.2-67.6,389.5-67Z"
                transform="translate(194 1233)"
                fill="none" stroke="var(--theme)" strokeWidth="2" />
          <path id="eye-left"
                d="M365.9-100.9c-.2,3.1.3,8.4,1.1,10.4,1.1,2.8,6.7,5.5,11.4,5.5,3.3,0,3.6-.3,3.6-2.8,0-4.8-2-10.2-4.4-11.7C374.3-101.7,366-102.7,365.9-100.9Zm5.1,2.8a4.12,4.12,0,0,1-1.5,2.1c-1.2,1-1.5,1-1.5-.2a3.1,3.1,0,0,1,.7-2.1C369.6-99.3,371-99.2,371-98.1Z"
                transform="translate(194 1233)" fill="none" />
          <path id="eye-right"
                d="M396-100.2c-4.2,2.1-6,5.3-6,10.9,0,4.3,0,4.3,3.8,4.3,4.6,0,9.9-3.1,11.2-6.6a20.18,20.18,0,0,0,1-6.5c0-3.7-.1-3.9-3.2-3.9A17.677,17.677,0,0,0,396-100.2Zm-.6,3.3c-1.2,1.3-2,1.6-2.2.9a1.924,1.924,0,0,1,.9-2.1C396.6-99.7,397.3-99,395.4-96.9Z"
                transform="translate(194 1233)" fill="none" />
          <path id="Path_258" data-name="Path 258" d="M559.649,1116.577a17.322,17.322,0,0,1,7.015-5.42"
                transform="translate(3.144 1.297)" fill="none" stroke="var(--theme)" strokeLinecap="round"
                strokeWidth="2" />
          <path id="Path_259" data-name="Path 259"
                d="M560.218,1113.088a3.513,3.513,0,0,1,.163-.355,5.164,5.164,0,0,1,1.071-1.409"
                transform="matrix(0.995, 0.105, -0.105, 0.995, 118.2, -43.795)" fill="none" stroke="var(--theme)"
                strokeLinecap="round" strokeWidth="2" />
          <path id="Path_260" data-name="Path 260"
                d="M560.218,1114.149a5.538,5.538,0,0,1,.269-.569,8.306,8.306,0,0,1,1.775-2.256"
                transform="matrix(0.921, 0.391, -0.391, 0.921, 507.992, -109.438)" fill="none" stroke="var(--theme)"
                strokeLinecap="round" strokeWidth="2" />
          <path id="Path_263" data-name="Path 263"
                d="M560.218,1113.085a3.636,3.636,0,0,1,.15-.355,5.132,5.132,0,0,1,.988-1.407"
                transform="matrix(0.921, 0.391, -0.391, 0.921, 480.201, -108.772)" fill="none" stroke="var(--theme)"
                strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>


      <HiddenText> Menu </HiddenText>
    </Btn>
  );
};

export default NavBtn;
