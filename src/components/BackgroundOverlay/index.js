import React from 'react'
import styled from 'styled-components'

const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  pointer-events: none;

  z-index: 9;

  svg {
    pointer-events: none;
    height: 100%;
    width: 100%;

    .shape-overlays__path:nth-of-type(1) {
      fill: url(#gradient1);
    }

    .shape-overlays__path:nth-of-type(2) {
      fill: url(#gradient2);
    }

    .shape-overlays__path:nth-of-type(3) {
      fill: url(#gradient3);
    }
  }

  & .shape-overlays {
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;
    //pointer-events: none;
    //z-index: 1;

    path {
      position: relative;
    }

    //border: thick solid red;
  }
`

const BackgroundOverlay = ({ loading = true, clsName }) => {

  return (
    <OverlayContainer>

      <svg className={clsName} viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00c99b" />
            <stop offset="100%" stopColor="#ff0ea1" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffd392" />
            <stop offset="100%" stopColor="#ff3898" />
          </linearGradient>

          <linearGradient id="gradient3" x1="0.177" y1="0.104" x2="0.949"
                          y2="0.947" gradientUnits="objectBoundingBox">
            <stop offset="0" stopColor="#5d6c7b" />
            <stop offset="0.482" stopColor="#a4b5c0" />
            <stop offset="1" stopColor="#bfd0d9" />
          </linearGradient>

          <linearGradient id="gradient4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#110046" />
            <stop offset="100%" stopColor="#32004a" />
          </linearGradient>

        </defs>

        <path className="shape-overlays__path" />
        <path className="shape-overlays__path" />
        <path className="shape-overlays__path" />

        {/*<path className="shape-overlays__path"
              d="M 0 0C 5.555555555555555 0 5.555555555555555 0 11.11111111111111 0 C 16.666666666666664 0 16.666666666666664 0 22.22222222222222 0 C 27.77777777777777 0 27.77777777777777 0 33.33333333333333 0 C 38.888888888888886 0 38.888888888888886 0 44.44444444444444 0 C 50 0 50 0 55.55555555555556 0 C 61.1111111111111 0 61.1111111111111 0 66.66666666666666 0 C 72.22222222222223 0 72.22222222222223 0 77.77777777777779 0 C 83.33333333333333 0 83.33333333333333 0 88.88888888888889 0 C 94.44444444444444 0 94.44444444444444 0 100 0 V 100 H 0" />
        <path classNam  e="shape-overlays__path"
              d="M 0 0C 5.555555555555555 0 5.555555555555555 0 11.11111111111111 0 C 16.666666666666664 0 16.666666666666664 0 22.22222222222222 0 C 27.77777777777777 0 27.77777777777777 0 33.33333333333333 0 C 38.888888888888886 0 38.888888888888886 0 44.44444444444444 0 C 50 0 50 0 55.55555555555556 0 C 61.1111111111111 0 61.1111111111111 0 66.66666666666666 0 C 72.22222222222223 0 72.22222222222223 0 77.77777777777779 0 C 83.33333333333333 0 83.33333333333333 0 88.88888888888889 0 C 94.44444444444444 0 94.44444444444444 0 100 0 V 100 H 0" />
        <path className="shape-overlays__path"
              d="M 0 0C 5.555555555555555 0 5.555555555555555 0 11.11111111111111 0 C 16.666666666666664 0 16.666666666666664 0 22.22222222222222 0 C 27.77777777777777 0 27.77777777777777 0 33.33333333333333 0 C 38.888888888888886 0 38.888888888888886 0 44.44444444444444 0 C 50 0 50 0 55.55555555555556 0 C 61.1111111111111 0 61.1111111111111 0 66.66666666666666 0 C 72.22222222222223 0 72.22222222222223 0 77.77777777777779 0 C 83.33333333333333 0 83.33333333333333 0 88.88888888888889 0 C 94.44444444444444 0 94.44444444444444 0 100 0 V 100 H 0" />
*/}
      </svg>

    </OverlayContainer>
  )
}

export default BackgroundOverlay
