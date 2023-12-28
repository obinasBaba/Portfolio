import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled, { css } from 'styled-components';
import { length, spacing } from '@/styles/mixins';
import { largeUp, xxLargeUp } from '@/styles/mixins/breakpoints';

const ImageWrapper = styled.div`
    flex: 0 0 100%;
    max-width: calc(100vw / 64 * 40);
    margin-right: calc(100vw / 64 * 1);

    ${largeUp(css`
        max-width: calc(100vw / 64 * 26);
    `)};

    ${xxLargeUp(css`
        max-width: calc(100vw / 64 * 31);
    `)};

    ////todo-start - figure this out
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    -o-transition-property: transform;
    //todo-end

    &.item {
    }

    &:nth-child(2n) {
        //starting from the parent every even child
        max-width: calc(100vw / 64 * 28);
        display: flex;
        flex-flow: wrap;
        justify-content: space-between;

        ${largeUp(css`
            max-width: calc(100vw / 64 * 17);
        `)};

        ${xxLargeUp(css`
            max-width: calc(100vw / 64 * 20);
        `)};

        //every first-child of the parent of .image,// this is equal with ( parent > :first-child )

        .image:first-child {
            margin-bottom: calc(100vw / 64 * 1);
        }

        .image:nth-child(n + 2) {
            width: calc(50% - ((100vw / 64) / 2));
        }
    }

    @media screen and (min-width: 1600px) {
        ${length('max-width', 62)};

        &.item {
            ${spacing('mr', 2)};
        }

        &:nth-child(2n) {
            ${length('max-width', 40)};

            .image:first-child {
                ${spacing('mb', 2)};
            }

            .image:nth-child(n + 2) {
                //width: calc(50% - 10px * var(--coef-size));
            }
        }
    }

    .image {
        width: 100%;
    }
`;

function DesignImage ({ images }) {
  return (
    <ImageWrapper>
      {images.map((imgData) => (
        <GatsbyImage
          alt={imgData.name}
          key={imgData.name}
          className='image dribble-shots'
          objectFit='cover'
          image={getImage(imgData)}
        />
      ))}
    </ImageWrapper>
  );
}

export default DesignImage;
