import React from "react";
import styled from "styled-components";
import { length, spacing } from "../../styles/mixins";
import { motion } from "framer-motion";
import { Link } from "gatsby";

const ReturnBtnContainer = styled(motion.div)`
  //border: thin solid crimson;
  position: relative;
  display: grid;
  place-items: center;

  ${length("height", 5)};
  ${length("width", 5)};

  & > * {
    grid-row: 1;
    grid-column: 1;
  }

  a {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  & :hover {
    svg #border {
      fill: #3719ca;
      transition: fill 0.6s ease-in-out, stroke 0.6s ease-in-out;
    }
  }

  svg {
    & * {
      transition: fill 0.6s ease-in-out, stroke 0.6s ease-in-out;
    }

    #border {
      fill: var(--theme);
    }
  }
`;

const transition = {
  ease: [0.6, 0.01, 0, 0.9],
  duration: 1,
  delay: 0.2,
};

const pathTransition = {
  ...transition,
  duration: 1,
};

const containerVariant = {
  hover: {
    transition: {
      staggerChildren: 0.05,
    },
  },

  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
  },

  exit: {
    opacity: 0,
  },
};

const borderPathVariant = {
  initial: {
    // fill: 'var(--theme)'
  },
  hover: {
    // fill: 'rgba(255, 255, 255, 0)',
    // transition: {
    //   duration: .4,
    //   ease: 'easeOut'
    // }
  },
};

const pathVariant = {
  initial: {
    pathLength: 1,
    strokeWidth: 1.6,
    stroke: "var(--theme)",
  },

  hover: {
    pathLength: [null, 0, 1],
    strokeWidth: 2,
    // stroke: '#123',
  },
};

const ReturnBtn = ({ onClick, tooltip = "Blog-list" }) => {
  return (
    <ReturnBtnContainer className="exitBtn" onClick={onClick}>
      {/*<Link to={to} />*/}

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 60 60"
        variants={containerVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        whileHover="hover"
        onAnimationEnd={(event) => {
          //console.log('animationEvent ;', event)
        }}
        transition={transition}
      >
        <motion.g
          id="Group_12"
          data-name="Group 12"
          transform="translate(-510 -2059)"
          variants={containerVariant}
        >
          <motion.g
            id="Path_7"
            data-name="Path 7"
            transform="translate(510 2059)"
            fill="none"
          >
            <motion.path
              d="M30,0A30,30,0,1,1,0,30,30,30,0,0,1,30,0Z"
              stroke="none"
            />

            <motion.path
              id="border"
              d="M 30 1 C 26.08457946777344 1 22.28681945800781 1.766620635986328 18.71220016479492 3.278549194335938 C 15.2590217590332 4.739128112792969 12.15753936767578 6.830268859863281 9.493900299072266 9.493900299072266 C 6.830268859863281 12.15753936767578 4.739128112792969 15.2590217590332 3.278549194335938 18.71220016479492 C 1.766620635986328 22.28681945800781 1 26.08457946777344 1 30 C 1 33.91542053222656 1.766620635986328 37.71318054199219 3.278549194335938 41.28779983520508 C 4.739128112792969 44.74098205566406 6.830268859863281 47.84246063232422 9.493900299072266 50.50609970092773 C 12.15753936767578 53.16973114013672 15.2590217590332 55.26087188720703 18.71220016479492 56.72145080566406 C 22.28681945800781 58.23337936401367 26.08457946777344 59 30 59 C 33.91542053222656 59 37.71318054199219 58.23337936401367 41.28779983520508 56.72145080566406 C 44.74098205566406 55.26087188720703 47.84246063232422 53.16973114013672 50.50609970092773 50.50609970092773 C 53.16973114013672 47.84246063232422 55.26087188720703 44.74098205566406 56.72145080566406 41.28779983520508 C 58.23337936401367 37.71318054199219 59 33.91542053222656 59 30 C 59 26.08457946777344 58.23337936401367 22.28681945800781 56.72145080566406 18.71220016479492 C 55.26087188720703 15.2590217590332 53.16973114013672 12.15753936767578 50.50609970092773 9.493900299072266 C 47.84246063232422 6.830268859863281 44.74098205566406 4.739128112792969 41.28779983520508 3.278549194335938 C 37.71318054199219 1.766620635986328 33.91542053222656 1 30 1 M 30 0 C 46.56853866577148 0 60 13.43146133422852 60 30 C 60 46.56853866577148 46.56853866577148 60 30 60 C 13.43146133422852 60 0 46.56853866577148 0 30 C 0 13.43146133422852 13.43146133422852 0 30 0 Z"
              stroke="none"
              variants={borderPathVariant}
              transition={transition}
            />
          </motion.g>

          <motion.path
            id="Path_4"
            data-name="Path 4"
            d="M0,0H18.156"
            transform="translate(532 2088.538)"
            fill="none"
            stroke="#fff"
            stroke-width="1"
            variants={pathVariant}
            transition={pathTransition}
          />
          <motion.path
            id="Path_3"
            data-name="Path 3"
            d="M7.085,0,0,7.085"
            transform="translate(531.115 2081.763)"
            fill="none"
            stroke="#fff"
            stroke-width="1"
            variants={pathVariant}
            transition={pathTransition}
          />
          <motion.path
            id="Path_2"
            data-name="Path 2"
            d="M7.085,0,0,7.085"
            transform="translate(529.343 2079.992)"
            fill="none"
            stroke="#fff"
            stroke-width="1"
            variants={pathVariant}
            transition={pathTransition}
          />
          <motion.path
            id="Path_5"
            data-name="Path 5"
            d="M7.085,0H0"
            transform="translate(543.071 2090.62)"
            fill="none"
            stroke="#fff"
            stroke-width="1"
            variants={pathVariant}
            transition={pathTransition}
          />
          <motion.path
            id="Path_6"
            data-name="Path 6"
            d="M7.085,7.085,0,0"
            transform="translate(531.115 2088.273)"
            fill="none"
            stroke="#fff"
            stroke-width="1"
            variants={pathVariant}
            transition={pathTransition}
          />
        </motion.g>
      </motion.svg>

      {/*</Link>*/}
    </ReturnBtnContainer>
  );
};

export default ReturnBtn;
