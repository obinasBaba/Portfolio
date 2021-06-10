import styled from 'styled-components'

export const SkyColor = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  
  background-image: -webkit-gradient(linear, left top, left bottom, from(#072142), color-stop(#061c37), color-stop(#07182b), color-stop(#061220), to(#020b16));
  background-image: -webkit-linear-gradient(top, #072142, #061c37, #07182b, #061220, #020b16);
  background-image: -o-linear-gradient(top, #072142, #061c37, #07182b, #061220, #020b16);
  background-image: linear-gradient(to bottom, #072142, #061c37, #07182b, #061220, #020b16);

  z-index: -200
`
