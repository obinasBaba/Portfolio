import React from 'react'
import styled from 'styled-components'

const BlobContainer = styled.button`
  pointer-events: auto;
  cursor: pointer;
  background: #e7e7e7;
  border: none;
  padding: 1.5rem 3rem;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  position: relative;
  display: inline-block;

  font-weight: 900;
  width: 175px;
  height: 120px;
  color: #fff;
  background: none;

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }


  &::before {
    content: '';
    background-image: linear-gradient(
            137.81deg,
            #e7a28f 3.52%,
            #f9d6ac 41.89%,
            #fbfefc 96.77%
    );
    -webkit-clip-path: path("M154.5,88.5 C131,113.5 62.5,110 30,89.5 C-2.5,69 -3.5,42 4.5,25.5 C12.5,9 33.5,-6 85,3.5 C136.5,13 178,63.5 154.5,88.5 Z");
    clip-path: path("M154.5,88.5 C131,113.5 62.5,110 30,89.5 C-2.5,69 -3.5,42 4.5,25.5 C12.5,9 33.5,-6 85,3.5 C136.5,13 178,63.5 154.5,88.5 Z");
    transition: clip-path 0.5s cubic-bezier(0.585, 2.5, 0.645, 0.55), -webkit-clip-path 0.5s cubic-bezier(0.585, 2.5, 0.645, 0.55),
    background-image 0.5s ease;
  }
  
  &:hover::before {
    background: #f9d6ac;
    -webkit-clip-path: path("M143,77 C117,96 74,100.5 45.5,91.5 C17,82.5 -10.5,57 5.5,31.5 C21.5,6 79,-5.5 130.5,4 C182,13.5 169,58 143,77 Z");
    clip-path: path("M143,77 C117,96 74,100.5 45.5,91.5 C17,82.5 -10.5,57 5.5,31.5 C21.5,6 79,-5.5 130.5,4 C182,13.5 169,58 143,77 Z");
  }
  
  &::after {
    content: '';
    height: 86%;
    width: 97%;
    top: 5%;
    border-radius: 58% 42% 55% 45% / 56% 45% 55% 44%;
    border: 1px solid #e7a28f;
    transform: rotate(-20deg);
    z-index: -1;
    transition: transform 0.5s cubic-bezier(0.585, 2.5, 0.645, 0.55);
  }
  
  &:hover::after {
    transform: translate3d(0, -5px, 0);
  }
  
  & span {
    display: block;
    transition: transform 0.3s ease;
    mix-blend-mode: difference;
  }
  
  &:hover span {
    transform: translate3d(0, -10px, 0);
  }
`

const BlobButton = ({txt}) => {
  return (
    <BlobContainer>
      <span>{txt}</span>
    </BlobContainer>
  )
}

export default BlobButton
