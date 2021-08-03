import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import MotionBtn from '../../../MotionBtn'
import { MenuContainer, MenuList, Overlay } from './components'
import CloseBtn from '../CloseBtn'
import BackgroundSvg from './components/BgSvg'
import MenuItems from './components/MenuItems'

const menuVariants = {}

const overlayVariant = {
  transition: {
    duration: 0.8,
    ease: [0.5, 0, 0.75, 0],
  },

  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1.1,
      ease: [0.5, 0, 0.75, 0],
    },
  },
}

const menuListVariants = {
  initial: {
    opacity: 1,
    x: '100%',
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [1, 0, 0.68, 1],
      staggerChildren: 0.05,
      delayChildren: 0.8,
    },
  },
  exit: {
    opacity: 1,
    x: '100%',
    transition: {
      delay: .2,
      duration: 0.8,
      ease: [1, 0, 0.68, 1],
      staggerChildren: 0.06,
    },
  },
}

const motionBtnVariant = {
  transition: {
    duration: 0.8,
    ease: [1, 0, 0.68, 1],
    // delayChildren: 2,
  },

  initial: {},
  animate: {
    //
  },
  exit: {},
}

const innerBtnVariant = {
  initial: { y: '120%' },
  animate: {
    y: 0,
  },

  exit: {
    y: '-125%',
    transition: {
      type: 'spring',
    },
  },
}

const LogoBg = styled(motion.div)`
  max-width: 100%;
  width: 440px;
  position: absolute;
  opacity: 0.2;
  z-index: -10;

  &::after {
    content: '';
    //background-color: rgba(2, 2, 30, 0.1);
    backdrop-filter: blur(5px);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 100;
  }
`

const logoVariants = {
  initial: {
    opacity: 0.0,
    scale: 0.8,
    rotate: '30deg',
  },
  animate: {
    opacity: 0.2,
    scale: 1,
    rotate: '0deg',
    // filter: 'blur(1px)',

    transition: {
      delay: 0.1,
      duration: 0.8,
      ease: [1, 0, 0.68, 1],
      // staggerChildren: 0.06,
    },
  },
  exit: {
    // filter: 'blur(5px)',
    opacity: 0,
    scale: 0.9,
    rotate: '30deg',

    transition: {
      opacity: {
        duration: 1.2
      },

      delay: .175,
      duration: 0.6,
      ease: [1, 0, 0.68, 1],
      // staggerChildren: 0.06,
    },
  },
}



const Menu = ({ toggleMenu: { setMenuIsOpen, menuIsOpen } }) => {



  return (
    <MenuContainer
      variants={menuVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      onAnimationComplete={t => {
        if (t === 'exit') document.body.classList.remove('locked')
      }}
    >
      <Overlay
        variants={overlayVariant}
        transition={overlayVariant.transition}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      />

      <MenuList variants={menuListVariants}  >

        <MenuItems onClick={() => setMenuIsOpen(!menuIsOpen)} />

        <BackgroundSvg />

        <LogoBg variants={logoVariants}>
          <svg
            id="_29171633"
            data-name="29171633"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 254.283 261.885"
          >
            <g fill="#140844">
              <path
                id="Path_49"
                data-name="Path 49"
                d="M562.121-656.378c-11.292,11.586-23.624,29.2-32.977,47.235a55.442,55.442,0,0,1-3.741,6.787c-.416,0,.9-2.948,4.919-10.832,2.148-4.25,3.81-7.952,3.6-8.158s-1.039.96-1.87,2.537-1.593,2.742-1.8,2.6c-.485-.48,3.118-6.924,4.5-8.089.693-.617,1.108-1.371.97-1.714-.069-.411,2.425-4.525,5.612-9.255s5.75-8.638,5.681-8.706c-.485-.686-2.7-.343-2.84.48-.277,1.44-4.642,8.3-5.057,7.884-.208-.206.624-1.783,1.87-3.5,3.118-4.25,2.286-4.525-1.316-.48-3.187,3.565-3.048,3.154.97-2.125,1.386-1.851,2.356-3.5,2.148-3.7-.831-.823-5.334,4.456-10.461,12.271a76.886,76.886,0,0,1-5.542,7.953c-.554-.548,2.217-6.65,4.3-9.529a20.748,20.748,0,0,0,2.355-3.771A14.928,14.928,0,0,1,536-641.57c2.217-2.262,2.355-2.605,1.178-2.605-2.217,0-7.551,3.839-10.808,7.747-1.593,1.988-5.057,5.827-7.69,8.638a54.942,54.942,0,0,0-6.789,8.912,61.158,61.158,0,0,1-5.75,8.5c-4.3,5.484-10.669,17.824-15.657,30.439a150.873,150.873,0,0,0-6.859,21.252c-.762,2.674-.97,2.879-3.741,3.291a39.527,39.527,0,0,0-4.988,1.028,54.83,54.83,0,0,1-6.72.96c-5.681.548-5.612.891-2.286-8.981,2.563-7.678,2.771-8.364,1.8-7.4-.693.823-4.018,10.626-4.78,14.4-.346,1.714-.9,2.742-1.524,2.742-1.594,0-.97-3.634,2.148-13.094,3.117-9.529,3.325-12,1.247-14.054l-1.524-1.508-1.247,2.331c-.693,1.3-1.94,4.113-2.771,6.239-.831,2.194-1.8,3.976-2.148,3.976s-.416-.343-.208-.686c.277-.411,1.8-5.485,3.533-11.312,1.663-5.9,3.533-11.655,4.087-12.889l1.108-2.194-1.455,1.714c-1.247,1.508-1.247,1.234.346-1.919,1.87-3.839,3.395-7.541,2.91-6.993-4.573,4.8-9.63,14.534-14.41,27.971-1.663,4.593-3.117,8.158-3.256,7.815-.346-1.1,7.413-23.378,10.184-29.273,3.187-6.719,3.256-7.061,1.8-5.828-1.455,1.166-1.316.069.416-3.77.762-1.714,1.247-3.359,1.039-3.565-1.108-1.166-10.877,17.276-16.7,31.673-1.871,4.525-3.6,8.5-3.949,8.912-.416.411-.485.274-.277-.343.139-.548,1.593-5.21,3.187-10.283a110.877,110.877,0,0,1,4.3-11.86c.693-1.44,1.247-2.948,1.109-3.291-.277-.754-8.521,8.707-10.53,11.929a46.928,46.928,0,0,1-2.633,4.113,12.124,12.124,0,0,0-1.663,3.5,75.628,75.628,0,0,1-3.048,8.09c-3.395,8.09-7.621,24.474-7.621,29.685,0,2.948-.277,4.045-1.385,4.936-2.771,2.4-1.247,2.194,7.482-.96a106.272,106.272,0,0,1,10.877-3.428c1.178-.137.069.48-2.425,1.371-11.569,4.25-14.549,5.621-14.2,6.444.139.48-.624,1.371-1.8,1.988-2.7,1.371-3.464.754-.831-.754,1.039-.617,1.316-.891.554-.686-.762.274-1.94.686-2.563.823a1.845,1.845,0,0,0-1.247,1.645c0,.754-.277,1.3-.693,1.3-.346,0-.485-.48-.277-1.028.485-1.234,0-1.3-1.871-.274-.831.411-1.247,1.165-1.039,1.714s-.554,1.988-1.663,3.291c-2.148,2.4-3.533,6.581-2.217,6.581.416,0,.9-.617,1.178-1.3a5.48,5.48,0,0,1,1.524-2.262c1.039-.754,1.108-.754.693.274-.554,1.508.693,1.645,2.633.343,2.078-1.371,14.2-6.17,14.2-5.622,0,.343-14.341,7.2-14.964,7.2-.97,0-5.127,3.222-5.127,3.976a6.181,6.181,0,0,1-1.108,2.537c-1.316,2.057-.693,3.291,1.316,2.673.831-.274,5.612-2.4,10.6-4.8,12.4-5.9,15.241-6.376,4.087-.685-4.919,2.468-9.561,4.936-10.184,5.416-.9.685-1.247,2.468-1.593,7.541-.277,4.045-.139,6.65.208,6.65,1.039,0,1.593-3.154,1.108-6.17-.416-2.468-.277-2.742.831-2.536,2.148.343,3.048,1.165,3.048,2.948,0,.891.208,1.645.485,1.645a63.65,63.65,0,0,0,5.889-3.154c3.048-1.714,5.681-3.016,5.819-2.811.208.137-2.078,1.919-5.057,3.976a58.722,58.722,0,0,0-5.889,4.319c-1.524,2.194.138,16.316,2.7,22.966.9,2.468,2.078,5.484,2.563,6.719a13.231,13.231,0,0,0,1.94,3.428,9.768,9.768,0,0,1,1.593,3.291c.485,1.92.554,1.988,1.039.549.693-1.783.346-6.856-.554-7.953a9.743,9.743,0,0,1-1.039-3.222c-.416-2.194-.346-2.263.554-1.1.554.686.831,1.577.624,1.851a5.8,5.8,0,0,0,1.108,2.811,9.259,9.259,0,0,1,1.386,3.222c0,1.44,3.672,8.3,4.226,7.884a.815.815,0,0,1,.97.411.767.767,0,0,0,1.039.343c.277-.137.9.617,1.386,1.714,1.524,3.633,2.009,2.948.693-.891-1.385-3.908-3.048-14.465-2.633-17.07.138-.891,1.108,1.851,2.217,6.307,1.108,4.319,2.7,9.735,3.533,12.066,1.663,4.319,5.889,12.2,6.3,11.723a15.73,15.73,0,0,0-1.108-4.251,28.073,28.073,0,0,1-1.386-7.61,20.556,20.556,0,0,0-.623-5.347c-.554-1.234-.416-1.92.346-2.537a2.251,2.251,0,0,0,.693-2.262c-.416-1.714-2.494-16.659-2.84-20.772a11.777,11.777,0,0,0-.693-3.633c-.485-.754.762-3.428,1.593-3.428.277,0,.623,2.125.693,4.73a38.064,38.064,0,0,0,.831,6.719c.416,1.3.485-.137.277-4.25-.485-8.3.693-6.307,1.8,3.085a44.645,44.645,0,0,0,1.178,7.541c.346.343-.069-10.215-.9-21.938-.346-4.73-.208-6.033.623-6.719.554-.48,4.711-2.194,9.214-3.839,4.572-1.645,8.729-3.222,9.353-3.428,1.039-.48,1.178.686,1.524,11.038.346,11.929,1.732,21.6,4.087,28.656,1.94,5.9,6.3,14.877,7.828,16.111,1.455,1.165,1.386,1.028-1.455-4.456-5.127-9.8-7.205-20.293-7.552-38.391-.138-7.747,0-12.34.277-10.626l.554,3.085.069-3.565c.139-4.662.623-5.69,2.7-5.69h1.663l-.069,9.392a110.141,110.141,0,0,0,.277,11.518c.277,1.1.554,3.428.762,5.142s.485,3.839.623,4.8c3.325,18.236,4.365,22.486,6.72,27.9,1.178,2.811,3.118,4.251,2.217,1.714-.346-.96-.208-.891.693.206,1.039,1.234,1.108,1.234,1.178.137,0-1.44,0-1.44,2.494-.137,1.524.685,2.425,1.988,3.395,4.593,1.108,3.154,1.385,3.428,1.732,1.988s.554-1.234,2.009,1.851c.9,1.919,1.94,3.428,2.355,3.359.346-.068.831.274,1.039.823s0,.754-.485.48c-1.247-.754-.9.411.97,3.359,1.8,2.879,2.425,2.605.693-.343-1.108-1.988-1.316-3.017-.416-2.468.346.206-.139-1.371-.97-3.565-1.524-3.7-4.85-19.2-4.3-19.744.138-.137,1.316,3.633,2.563,8.432,2.7,10.42,4.226,14.054,8.591,20.43,3.672,5.279,4.5,6.307,3.256,3.908-1.663-3.222-5.681-14.808-5.4-15.836.069-.617.624.137,1.109,1.645,1.108,3.154,2.078,4.593,2.91,4.113.277-.206.9.206,1.316.823.624.96.693.617.416-1.714-.277-2.674-.208-2.811.693-1.714,1.247,1.645,1.247,1.3-.485-5.759-1.316-5.347-1.455-8.3-1.593-26.6-.069-21.115,0-22.212,3.117-35.649.762-3.428,1.524-6.856,1.732-7.678a8.067,8.067,0,0,1,1.87-3.291c1.316-1.577,2.356-1.92,7.413-2.468,3.256-.411,7.274-.891,9.006-1.1l3.118-.48-3.81-.48c-2.078-.274-6.651-.48-10.115-.548-5.334-.068-6.651-.274-8.175-1.508-1.524-1.165-2.771-1.44-7.136-1.371a68.861,68.861,0,0,0-7.759.412c-1.732.274-2.148.205-1.455-.206,2.7-1.714,20.022-2.879,33.67-2.194,4.226.206,5.127,0,6.374-1.234l1.386-1.371-4.572-.754c-2.563-.411-7.136-1.028-10.184-1.439-4.988-.548-4.572-.617,3.81-.343,5.127.206,10.6.48,12.124.685l2.771.274-2.563-.754c-2.078-.617-2.563-1.1-2.286-2.194.139-.823.277-1.646.277-1.92.069-.274.624-.343,1.316-.137.762.274.623,0-.485-.96-1.732-1.371-1.524-1.714,1.524-2.468,2.7-.617,2.356-1.371-1.732-3.017-5.542-2.194-8.868-2.742-20.991-3.291-8.8-.411-10.531-.617-8.314-1.1,2.771-.617,14.341-.411,20.784.343a74.941,74.941,0,0,1,8.244,1.851c3.533.96,5.057,1.165,5.75.617,1.109-.96,1.178-2.674.139-2.674-.346,0-.485-.343-.208-.823s.208-.548-.277-.274-3.256-.274-6.166-1.165a60.956,60.956,0,0,0-9.768-2.194c-2.356-.274-4.5-.754-4.711-1.1s-.9-.343-1.663.069c-.9.48-1.455.48-1.8-.069-.346-.617-3.6-.754-11.292-.48-5.958.137-9.214.069-7.344-.206a102.853,102.853,0,0,1,10.946-.548c8.175-.068,9.56-.48,11.223-3.359.624-1.028.9-1.234.693-.48-1.178,3.359-1.178,3.771-.139,3.771.693,0,1.593-1.577,2.563-4.662a284.7,284.7,0,0,1,10.531-27.56c6.512-14.465,17.32-35.443,21.615-42.025a55.18,55.18,0,0,0,3.879-6.513c0-.274-1.316.891-2.841,2.605-1.732,1.851-2.425,2.331-1.732,1.165.624-1.028.9-1.851.624-1.851-.97,0-9.907,8.3-9.907,9.118,0,.48-.624,1.234-1.386,1.714-2.771,1.714-12.955,18.3-16,26.12-.346.891-.831,1.44-1.108,1.234-.208-.274,2.148-5.485,5.2-11.586a143.263,143.263,0,0,1,13.232-21.8c8.314-11.517,9.491-13.506,8.868-14.122s-4.642,2.605-4.642,3.771c0,.548-.208.754-.485.548-.208-.274-.831-.137-1.386.274-.693.617-.9.343-.9-1.44,0-1.988-.139-2.125-1.178-1.3-1.663,1.3,3.395-5.073,7.344-9.255,3.256-3.428,2.979-3.565-1.316-.48-1.8,1.234-1.386.617,1.732-2.742,4.919-5.142,6.928-7.473,6.443-7.473C567.8-662,565.169-659.463,562.121-656.378Zm-89.3,140.4c.693,1.028-.277,3.222-1.593,3.771-.624.343-3.048,1.234-5.334,2.125s-3.672,1.577-3.118,1.577a28.257,28.257,0,0,0,5.2-1.645c4.78-1.988,4.5-1.92,4.5-1.1,0,.343-1.524,1.165-3.395,1.851-1.94.686-3.325,1.44-3.118,1.714.139.274-.069.754-.485,1.028-.554.274-.623.206-.346-.274.693-1.1-.416-1.028-3.741.274-1.524.617-2.563,1.371-2.356,1.714s.208.617,0,.617a8.322,8.322,0,0,0-1.594.48c-1.039.411-1.108.343-.346-.617s.693-1.1-.624-.754c-1.039.274-1.386.206-1.039-.343.554-.96-.069-.96-2.009-.137-1.316.548-1.316.617-.069.617,1.039.068,1.108.274.416,1.1-1.316,1.577-2.078,1.234-2.078-.891,0-3.085.762-4.8,2.148-5.142,1.108-.274,1.316-.068,1.039,1.1-.208.96-.069.823.416-.343.693-1.577,2.009-2.262,8.452-4.525C472.82-517,472.266-516.867,472.82-515.975Z"
                transform="translate(-353.17 662)"
              />
              <path
                id="Path_50"
                data-name="Path 50"
                d="M441.484-647.284a49.883,49.883,0,0,0-7.621,1.234,45.885,45.885,0,0,1-5.75,1.234c-5.681.686-27.781,8.569-29.79,10.558a2.975,2.975,0,0,1-1.871.685,1.8,1.8,0,0,0-1.455.549,11.814,11.814,0,0,1-2.979,2.125c-4.087,2.4-10.323,6.444-10.738,6.924a24.433,24.433,0,0,1-2.563,1.92c-1.247.891-3.118,2.262-4.157,3.085-5.265,4.182-23.07,23.515-23.07,25.091a.875.875,0,0,1-.97.754c-1.247,0-4.365,4.662-8.66,12.957a130.131,130.131,0,0,0-12.886,40.174c-1.386,8.981-1.593,28.656-.416,35.649a241.61,241.61,0,0,0,7.136,25.3c2.078,6.17,9.838,21.39,13.232,25.983,1.593,2.125,4.018,5.416,5.334,7.267,3.533,4.8,11.847,13.78,12.817,13.78.416,0,1.178.823,1.594,1.782.485.96,1.178,1.508,1.524,1.3a1.564,1.564,0,0,1,1.455.068c.554.274.554.549,0,.891-.416.274.277,1.234,1.663,2.331,1.316,1.028,2.425,1.508,2.425,1.1,0-1.1,1.039-.069,1.039.96,0,.48.624.754,1.316.617s1.039.068.831.411.069,1.028.624,1.508c.831.686,1.039.686,1.039-.206,0-.548-1.94-2.605-4.3-4.456a156.443,156.443,0,0,1-20.091-20.43c-6.3-8.227-17.32-27.148-16.281-28.108a45.045,45.045,0,0,1,3.533,6.444,124.216,124.216,0,0,0,72.189,61.769A121.29,121.29,0,0,0,445.018-400c6.027.411,6.443.343,5.473-.686a3.988,3.988,0,0,0-2.425-1.028,14.055,14.055,0,0,1-3.187-.343c-1.108-.274-1.94-.206-1.94.137,0,.411-.831.411-2.217,0a22.437,22.437,0,0,0-4.919-.617c-1.663,0-2.494-.274-2.217-.686s.208-.617-.138-.548c-1.178.343-7.621-.96-11.292-2.194-4.642-1.645-3.672-1.714,2.148-.274,2.425.617,5.057,1.166,5.958,1.3,2.494.274,1.178-.823-1.663-1.371-3.672-.617-11.916-3.085-13.994-4.182a7.589,7.589,0,0,0-2.563-.96c-1.316,0-17.6-8.844-23.416-12.683-7.69-5.142-22.239-18.99-28.127-26.805a70.387,70.387,0,0,1-4.85-6.856,8.484,8.484,0,0,0-1.247-2.194,105.1,105.1,0,0,1-6.374-12.134c-.9-2.125-4.018-8.775-4.711-9.941-.9-1.44-4.642-15.973-5.82-22.623-.416-2.057-.693-10.283-.762-18.167-.069-15.905.623-21.047,4.365-32.427,2.356-7.13,2.494-8.364,1.109-8.364-1.455,0-4.157,8.158-6.374,19.539-.97,4.662-1.247,9.6-1.247,20.224.069,15.9.9,21.458,5.473,36.335.831,2.811,1.732,6.17,2.009,7.4a20.372,20.372,0,0,0,1.524,4.662,6.059,6.059,0,0,1,.831,2.674c-.416.411-4.642-8.432-4.988-10.421a30.7,30.7,0,0,0-1.386-3.976c-4.018-10.009-6.235-32.29-4.572-46.961.416-3.976.762-7.747.762-8.364a1.81,1.81,0,0,1,.693-1.577,4.144,4.144,0,0,0,.624-2.605c0-2.125,1.94-9.392,3.81-14.191a42.993,42.993,0,0,0,1.455-4.114c.554-2.125,7.413-15.905,9.491-19.264,4.711-7.473,10.184-14.945,10.184-13.848a7.41,7.41,0,0,1-1.732,2.811,9.573,9.573,0,0,0-1.732,2.537,4.7,4.7,0,0,1-1.039,1.508c-.554.548-.9,1.3-.693,1.645.277.343.069.617-.277.617a.709.709,0,0,0-.762.686c0,1.577,1.178.411,3.81-3.633,3.326-5.073,16-18.236,23.07-23.858C386.2-619.862,400.956-628.843,404-629.8c.831-.206,1.316-.754,1.108-1.165-.277-.411-.138-.549.277-.343.346.274,2.217-.137,4.088-.96a125.669,125.669,0,0,1,40.39-9.255c8.937-.548,23.832.754,31.868,2.742,6.789,1.714,9.422,1.371,6.581-.686-1.316-1.028-1.316-1.028.416-.617,1.386.343,2.009.068,2.91-1.3,1.109-1.645,1.109-1.714-1.108-2.125-1.178-.274-4.087-.891-6.374-1.44C472.313-647.7,455.271-648.656,441.484-647.284Z"
                transform="translate(-327.792 657.568)"
              />
              <path
                id="Path_51"
                data-name="Path 51"
                d="M639.455-591.8A14.693,14.693,0,0,0,638-588.921c0,.343,1.8,2.742,4.018,5.416,10.115,12.34,16.488,23.172,21.684,37.089a46.877,46.877,0,0,0,2.771,6.239c.9,1.028,4.087,14.123,4.087,16.728,0,1.577.346,2.262,1.385,2.536,1.247.343,1.386.96,1.386,5.347,0,8.912,1.385,11.723,3.256,6.444,1.247-3.565,1.039-7.884-.831-17.071-.97-4.593-1.524-9.049-1.316-9.872.762-3.222-6.235-19.744-15.519-36.2a97.606,97.606,0,0,0-14.549-18.579l-3.395-3.359Z"
                transform="translate(-423.091 640.681)"
              />
              <path
                id="Path_52"
                data-name="Path 52"
                d="M433.469-531.984c-4.919,5.279-8.937,14.739-12.47,29.274-2.425,9.666-3.187,14.328-2.425,14.328,1.871-.068,2.633-1.645,3.048-6.65.485-5.553,6.512-25.366,8.591-27.971a5.347,5.347,0,0,0,1.039-2.4c0-.617,1.039-2.674,2.355-4.593,3.187-4.8,3.325-5,2.979-5A20.473,20.473,0,0,0,433.469-531.984Z"
                transform="translate(-355.594 622.066)"
              />
              <path
                id="Path_53"
                data-name="Path 53"
                d="M627.979-446.943a124.876,124.876,0,0,1-27.919,65.677c-12.055,14.6-25.425,24.817-43.992,33.592a121.178,121.178,0,0,1-13.3,5.484c-2.286.686-6.027,1.782-8.244,2.468a89.082,89.082,0,0,1-12.47,2.4c-4.642.617-8.59,1.508-8.868,1.92-.346.48-.554.548-.554,0,0-.48-3.395-.754-10.045-.823-5.473,0-10.323-.206-10.738-.48-.346-.206-.693-.137-.693.274,0,.343,1.178.823,2.633.96,1.94.206,1.663.274-1.247.343a41.577,41.577,0,0,1-6.789-.48c-1.593-.343-3.048-.343-3.256-.068-.485.754,10.946,2.057,18.082,2.057,35.263,0,68.032-13.437,93.873-38.46,11.57-11.243,18.982-21.321,25.079-34.21,4.434-9.324,5.2-11.037,5.681-13.368l.416-2.057L624.585-420c-1.455,2.331-1.386,1.165.277-3.908,2.494-7.953,5.335-25.914,4.157-26.6C628.672-450.714,628.187-449.068,627.979-446.943Z"
                transform="translate(-375.313 595.504)"
              />
              <path
                id="Path_54"
                data-name="Path 54"
                d="M574.917-321.006c-1.871,1.508-3.533,2.537-3.672,2.4-.208-.206-1.455.343-2.84,1.1a99.916,99.916,0,0,1-15.38,7.13,15.48,15.48,0,0,0-5.334,2.742c-1.87,1.645-1.87,1.714-.277,1.234.97-.274,1.455-.137,1.178.274a3.939,3.939,0,0,1-2.286.96c-1.109.206-4.919,1.165-8.521,2.125a90.651,90.651,0,0,1-11.431,2.262,35.926,35.926,0,0,0-6.235.96,41.34,41.34,0,0,1-8.244.274c-6.72-.274-6.859-.274-5.4.96,1.524,1.371,1.94,1.371,14.341.48,5.612-.343,16.765-2.194,18.013-2.948a9.747,9.747,0,0,1,2.7-.617,6.962,6.962,0,0,0,2.771-.823,19.53,19.53,0,0,1,4.226-1.371c4.018-.96,7.759-2.605,9.63-4.113.97-.754,1.178-.823.762-.137-.347.617.138.548,1.663-.343,1.178-.686,2.147-1.508,2.147-1.851,0-.274.416-.48.9-.343,1.039.206,6.374-2.468,11.708-5.827,3.464-2.194,3.88-2.742,3.741-4.593a5.6,5.6,0,0,0-.485-2.331C578.45-323.543,576.788-322.514,574.917-321.006Z"
                transform="translate(-382.455 555.536)"
              />
            </g>
          </svg>
        </LogoBg>

        <CloseBtn toggler={setMenuIsOpen} state={menuIsOpen} />


      </MenuList>
    </MenuContainer>
  )
}

export default Menu
