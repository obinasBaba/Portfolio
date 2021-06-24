import React from 'react'
import styled from 'styled-components'

const BgSvgContainer = styled.div`
  //border: thin solid red;
  position: absolute;
  top: 0;
  right: 0;
  max-width: 50%;
  opacity: 0.1;
  z-index: 9999;

  //max-height: 558.156px;
  
`

const BgEffect = ({pos}) => {
  return (
    <BgSvgContainer>
      <svg xmlns="http://www.w3.org/2000/svg" width="809" height="643" viewBox="0 0 809 643">
        <defs>
          <clipPath id="clip-path">
            <rect id="Rectangle_106" data-name="Rectangle 106" width="809" height="643" transform="translate(557)" fill="#614848" stroke="#707070" stroke-width="1"/>
          </clipPath>
        </defs>
        <g id="Mask_Group_7" data-name="Mask Group 7" transform="translate(-557)" clip-path="url(#clip-path)">
          <g id="Bg-Effect">
            <path id="shaoe" d="M548.684-600A59,59,0,0,1,490-659a59,59,0,0,1,59-59H651.412a56.657,56.657,0,0,0,56.037-56.5A56.66,56.66,0,0,0,651.426-831H59A59,59,0,0,1,0-890a59,59,0,0,1,59-59H349.824a51.648,51.648,0,0,0,51.066-51.5,51.649,51.649,0,0,0-51.043-51.5H195a59,59,0,0,1-59-59,59,59,0,0,1,59-59H990v221h-7a59.672,59.672,0,0,1,7.012.412L990-831.411a59.594,59.594,0,0,1-7,.411h7v113h-7a59.687,59.687,0,0,1,7.012.412L990-600.41a59.565,59.565,0,0,1-6.683.41Z" transform="matrix(0.788, -0.616, 0.616, 0.788, 1152.903, 1311.745)"
                  fill="#80808e"/>
            <circle id="circle" cx="59" cy="59" r="59" transform="translate(997.807 492.603)" fill="#80808e"/>
          </g>
        </g>
      </svg>
    </BgSvgContainer>
  )
}

export default BgEffect
