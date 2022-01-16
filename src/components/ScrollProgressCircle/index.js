import {motion, useTransform, useViewportScroll} from 'framer-motion'
import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { length, spacing } from '../../styles/mixins'
import { BackgroundOverlayStateContext } from '../../contexts/AppStateContext'
import { map } from '../../helpers/utils'
import { Link } from 'gatsby'
import { MotionValueContext } from '../../contexts/MotionStateWrapper'

const RotatingDiv = styled(motion.div)`
  width: 100%;
  height: 100%;

  grid-row: 1 / 1;
  grid-column: 1 / 1;

  .border {
    border-radius: 500px;
    border: 3px solid;
  }
`

const ProgressCircleContainer = styled.div`
  position: fixed;
  top: calc(100vh - calc(var(--size) * 6rem));
  bottom: auto;
  
  ${spacing('right', 6)};

  z-index: 8;
  
  svg.circle{
    transition: opacity 100ms ease-out;
  }
  
  &:hover{
    svg.circle{
      transition: opacity 100ms ease-in;

      opacity: 0;
    }
  }
  
`

const ProgressCircleWrapper = styled(motion.div)`
  position: relative;
  display: grid;
  place-items: center;

  a {
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
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

  
  ${length('width', 5.1)};
  ${length('height', 5.1)};
`

const topPathVariant = {
  initial: {
    strokeWidth: 3,
    stroke: 'var(--stroke-top)',
  },
}

const bottomPathVariant = {
  initial: {
    pathLength: 0,
    stroke: 'var(--stroke-bottom)',
    strokeWidth: 4,
  },
}

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },

  transition: {
    duration: 1,
    delay: 1,
  },
}

const ScrollProgressCircle = () => {
  const { currentPath, backgroundOverlay } = useContext(BackgroundOverlayStateContext)

  const {
    moScroll: { y, limit },
  } = useContext(MotionValueContext)

  const rotate = useTransform(y, latest => {
    return map(latest, 0, limit.get(), 0, 360)
  })

  const pathLength = useTransform(rotate, [0, 360], [0, 1])

  useEffect(() => {
    pathLength.set(0)
    rotate.set(0)
    y.set(0)
  }, [currentPath, backgroundOverlay])

  return (
    <>
      {!backgroundOverlay && (
        <ProgressCircleContainer
            data-pointer="magnet"
            data-pointer-color="#5d6c7b"
            data-magnet-distance={0.6}
            data-magnet-attraction={1.6}
            data-tooltip
            data-tooltip-text="Write me a poem..."
        >
          <ProgressCircleWrapper

            variants={containerVariants}
            initial="initial"
            animate="animate"
            transition={containerVariants.transition}
          >
            <Link to={'/contact'} />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="phone"
              width="27"
              height="27"
              viewBox="0 0 27 27"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="Rectangle_1289"
                    data-name="Rectangle 1289"
                    width="27"
                    height="27"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
              <g
                id="Mask_Group_6"
                data-name="Mask Group 6"
                transform="translate(-0.5)"
                clipPath="url(#clip-path)"
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

            <RotatingDiv style={{ rotate }}>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="circle"
                width="100%"
                height="100%"
                viewBox="0 0 101.001 101.042"
                variants={{}}
                initial="initial"
                animate="animate"
              >
                <motion.g id="circle" transform="translate(-51.033 -692.945)">
                  <motion.path
                    id="top"
                    d="M99.914,693.554c6.967-.8,51.626,3.722,51.62,53.12-1.324,27.374-27.015,48.149-51.556,46.733-25.351-.75-46.427-19.98-48.43-46.737C50.672,700.788,92.086,692.979,99.914,693.554Z"
                    transform="translate(0)"
                    fill="none"
                    variants={topPathVariant}
                  />

                  <motion.path
                    id="bottom"
                    d="M99.914,693.554c6.967-.8,51.626,3.722,51.62,53.12-1.324,27.374-27.015,48.149-51.556,46.733-25.351-.75-46.427-19.98-48.43-46.737C50.672,700.788,92.086,692.979,99.914,693.554Z"
                    transform="translate(0)"
                    fill="none"
                    stroke="#ffffff"
                    style={{ pathLength }}
                    variants={bottomPathVariant}
                  />
                </motion.g>
              </motion.svg>
            </RotatingDiv>
          </ProgressCircleWrapper>
        </ProgressCircleContainer>
      )}
    </>
  )
}

export default React.memo(ScrollProgressCircle)