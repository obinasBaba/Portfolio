import React from "react";
import styled from "styled-components";

const StarsSvgContainer = styled.div`
  //border: var(--thin);
  max-width: 200px;
  position: absolute;
  top: ${({ pos }) => pos.top};
  left: ${({ pos }) => pos.left};
  bottom: ${({ pos }) => pos.bottom};
  right: ${({ pos }) => pos.right};
  opacity: 0.3;
  z-index: 9999;
  pointer-events: none;
`;

const StarEffect = ({ pos }) => {
  return (
    <StarsSvgContainer pos={pos}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="138.869"
        height="162.192"
        viewBox="0 0 138.869 162.192"
      >
        <g
          id="Group_6"
          data-name="Group 6"
          transform="translate(-434.748 -212.272)"
        >
          <path
            id="Union_2"
            data-name="Union 2"
            d="M9.262-1553.123l-1.274-3.32-3.317,1.273a2.83,2.83,0,0,1-3.657-1.628,2.829,2.829,0,0,1,1.628-3.656l3.317-1.273-1.275-3.32a3,3,0,0,1,1.725-3.875l.007,0a3,3,0,0,1,3.875,1.725l1.275,3.32,3.316-1.273a2.83,2.83,0,0,1,3.657,1.627,2.831,2.831,0,0,1-1.628,3.657L13.6-1558.6l1.274,3.32a3,3,0,0,1-1.726,3.876l-.006,0a3,3,0,0,1-1.074.2A3,3,0,0,1,9.262-1553.123Z"
            transform="translate(524.223 1925.661)"
            fill="#fff"
          />
          <path
            id="Union_1"
            data-name="Union 1"
            d="M12.691-1546.594l-2.054-5.35L5.5-1549.974a3,3,0,0,1-3.876-1.725l-.551-1.436a3,3,0,0,1,1.725-3.875l5.135-1.971-2.054-5.35a3,3,0,0,1,1.726-3.875l1.867-.717a3,3,0,0,1,3.876,1.726l2.053,5.35,5.135-1.971a3,3,0,0,1,3.875,1.726l.552,1.435a3,3,0,0,1-1.726,3.876l-5.134,1.971,2.054,5.351a3,3,0,0,1-1.725,3.875l-1.867.716a2.991,2.991,0,0,1-1.075.2A3,3,0,0,1,12.691-1546.594Z"
            transform="translate(548.451 1781.397)"
            fill="#fff"
          />
          <path
            id="Union_3"
            data-name="Union 3"
            d="M3.886-1562.853l-.606-1.58-1.513.581a1,1,0,0,1-1.292-.575l-.116-.3a1,1,0,0,1,.575-1.292l1.514-.581-.606-1.58a1,1,0,0,1,.575-1.292l.436-.167a1,1,0,0,1,1.292.575l.606,1.58,1.513-.581a1,1,0,0,1,1.292.575l.116.3A1,1,0,0,1,7.1-1565.9l-1.513.581.606,1.579a1,1,0,0,1-.575,1.292l-.437.167a1,1,0,0,1-.357.067A1,1,0,0,1,3.886-1562.853Z"
            transform="translate(434.456 1874.46)"
            fill="#fff"
          />
        </g>
      </svg>
    </StarsSvgContainer>
  );
};

export default StarEffect;
