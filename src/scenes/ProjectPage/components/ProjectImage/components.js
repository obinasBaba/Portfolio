import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { gridColWidth, gridMultiplayer } from '@/styles/mixins';
import { largeUp, mediumUp, xxLargeUp } from '@/styles/mixins/breakpoints';

export const ProjectImg = styled(motion.div)`
    position: relative;

    ${gridColWidth(6, 60)}; //mobile-first
    ${gridMultiplayer('padding', 0.5)};
    ${gridMultiplayer('padding-left', 4)};


    & .effect {
        color: tomato;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-box-decoration-break: clone;
        background-image: linear-gradient(137.81deg,
        #e7a28f 3.52%,
            //#f9d6ac 41.89%,
        #fbfefc 96.77%);
    }

    ${mediumUp(css`
        grid-row: 1;
        margin-right: calc(100vw / 64 * 6);
        background: ${({ theme }) => theme.palette.secondary.main};

        padding: calc(100vw / 64 * 0.7) calc(100vw / 64 * 0.7) calc(100vw / 64 * 0.7) calc(100vw / 64 * 4.5);
        border-radius: 1.5rem;

        ${gridColWidth(25, 65)};
    `)};

    
`;

export const InnerWrapper = styled(motion.div)`
    //display: none;
    position: relative;
    z-index: 1;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    height: 100%;
    max-height: 40vmax;

    //border: 2px solid red;
    border-radius: 1rem;
    


    ${mediumUp(css`
        height: 30vmax;
    `)};

    ${xxLargeUp(css`
        //height: 500px;
        //height: 30vmax;
    `)};

    &::after {
        //content: '';
        position: absolute;
        display: block;
        inset: 0;
        background-color: #3719ca;
        opacity: 0.6;
        mix-blend-mode: hard-light;
        //background-blend-mode: soft-light;
    }

    img {
        //display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        //transition: filter 1.5s cubic-bezier(0.77, 0, 0.175, 1)
    }

    .image-over {
        //display: none;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        overflow: hidden;
        //z-index: 1000;

        .image-cover {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            background: tomato;
            z-index: 1000;

            &:last-child {
                background-image: linear-gradient(137.81deg,
                #e7a28f 3.52%,
                #f9d6ac 41.89%,
                #fbfefc 96.77%);
            }
        }

        ${mediumUp(css`
            //display: block;
        `)};
    }

    a {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
    }
`;

export const OverflowWrapper = styled(motion.div)`
    z-index: 999;
    overflow: hidden;
    display: none;
    position: absolute;
    font-size: 9rem;
    font-weight: 900;
    bottom: 2%;
    right: -5%;

    ${largeUp(css`
        display: block;
    `)};
`;
