import { motion, useTransform } from "framer-motion";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { length, spacing } from "../../styles/mixins";
import { AppStateContext } from "../../contexts/AppStateContext";
import { map } from "../../helpers/utils";
import { MotionValueContext } from "../../contexts/MotionStateWrapper";
import { Link } from "gatsby";

const RotatingDiv = styled( motion.div )`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;

  border: thin solid red;


  grid-row: 1 / 1;
  grid-column: 1 / 1;

  .border {
    border-radius: 500px;
    border: 3px solid;
  }


`;

const ProgressCircleContainer = styled.div`
  position: fixed;
  top: calc(100vh - calc(var(--size) * 6rem));
  bottom: auto;

  //border: thin solid red;

  ${spacing( "right", 6 )};

  z-index: 7;


  svg.circle {
    transition: opacity 100ms ease-out;
  }

  &:hover {
    z-index: 8;

    svg.circle {
      //transition: opacity 100ms ease-in;
      opacity: 0;
    }
  }
`;

const ProgressCircleWrapper = styled( motion.div )`
  position: relative;
  display: grid;
  place-items: center;

  //border: thin solid rebeccapurple;

  a {
    display: grid;
    place-items: center;
  }

  & .phone {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
    //opacity: .7;

    & * {
      transition: stroke 0.4s ease-in-out;
    }

    #phone_path {
      stroke: var(--theme);
    }
  }

  svg#progress {
    transition: opacity 400ms ease-in;
    transform-origin: center;

    grid-row: 1 / 1;
    grid-column: 1 / 1;


    circle {
      fill: none;
      stroke-width: 3px;

    }

    .bg {
      stroke: var(--stroke-bottom);
      opacity: 0.3;
    }

    .indicator {
      stroke: var(--stroke-bottom);
    }
  }

  &:hover {
    z-index: 8;

    svg#progress {
      transition: opacity 300ms ease-out;
      opacity: 0;
    }
  }


    // ${length( "width", 5.1 )};
    // ${length( "height", 5.1 )};
`;

const topPathVariant = {
  initial: {
    strokeWidth: 3,
    stroke: "var(--stroke-top)"
  }
};

const bottomPathVariant = {
  initial: {
    pathLength: 0,
    stroke: "var(--stroke-bottom)",
    strokeWidth: 4
  }
};

const containerVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  },

  transition: {
    duration: 1,
    delay: 1
  }
};

function ScrollProgressCircle(){
  const { currentPath } = useContext( AppStateContext );

  const {
    moScroll: { y, limit }
  } = useContext( MotionValueContext );


  const rotate = useTransform( y, latest => map( latest, 0, limit.get(), 0, 360 ) );

  const pathLength = useTransform( rotate, [0, 360], [0, 1] );


  useEffect( () => {
    pathLength.set( 0 );
    rotate.set( 0 );
    y.set( 0 );
  }, [currentPath] );

  return (

    <ProgressCircleContainer
      data-pointer="magnet"
      data-pointer-color="#5d6c7b"
      data-magnet-distance={.7}
      data-magnet-attraction={1}
      data-tooltip
      data-tooltip-text="Write me a poem..."
    >
      <ProgressCircleWrapper

        variants={containerVariants}
        transition={containerVariants.transition}
      >
        <Link to="/contact">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="phone"
            width="27"
            height="27"
            viewBox="0 0 27 27"
          >
            <g
              id="Mask_Group_6"
              data-name="Mask Group 6"
              transform="translate(-0.5)"
            >
              <g id="phone">
                <path
                  id="Path_6574"
                  data-name="Path 6574"
                  d="M0,0H27V27H0Z"
                  fill="none"
                />
                <path
                  id="phone_path"
                  data-name="Path 6575"
                  d="M9.753,13.164a8.9,8.9,0,0,0,4.119,4.1A.836.836,0,0,0,14.7,17.2l2.641-1.761a.844.844,0,0,1,.8-.074l4.94,2.117a.841.841,0,0,1,.506.875,5.063,5.063,0,0,1-5.022,4.422A14.344,14.344,0,0,1,4.219,8.438,5.063,5.063,0,0,1,8.64,3.415a.841.841,0,0,1,.875.506l2.119,4.944a.844.844,0,0,1-.07.794L9.81,12.341A.836.836,0,0,0,9.753,13.164Z"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.688"
                />
              </g>
            </g>
          </svg>

          <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
            <motion.circle cx="50" cy="50" r="30" pathLength="1" className="indicator" strokeDashoffset="0px"
                           style={{ pathLength, rotate }}
                           strokeDasharray="0px 1px" />
          </svg>

        </Link>


      </ProgressCircleWrapper>
    </ProgressCircleContainer>

  );
}

export default React.memo( ScrollProgressCircle );
