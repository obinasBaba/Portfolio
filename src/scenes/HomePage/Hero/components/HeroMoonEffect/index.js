import React from 'react';
import styled, { css } from "styled-components";
import { motion } from 'framer-motion';
import { gridColWidth, spacing } from "../../../../../styles/mixins";
import { mediumUp, xLargeUp } from "../../../../../styles/mixins/breakpoints";

const HeroMoonEffectContainer = styled( motion.div )`
  position: relative;
  display: grid;
  justify-self: end;
  place-items: center;
  pointer-events: none;

  width: 100%;
  height: 100%;
  grid-row: 1 / 3;

  //border: thick solid red;

  ${gridColWidth( 1 )};

  .moon {
    //border: thin solid teal;
    max-width: 100%;
    align-self: start;
    height: auto;
    margin-top: 9vmax;
    overflow: visible;

    ${xLargeUp( css`
      //transform: scale(2vmax);
      width: 100%;
      //height: 100%;
    ` )};

    svg {
      width: 100%;
      height: 100%;
      overflow: visible;

    }
  }

  svg.mountain {
    position: absolute;
    right: 0;
    bottom: 0;
    height: auto;
    max-width: 100%;
    //border: thin solid green;
  }

  ${mediumUp( css`
    position: absolute;
    grid-row: initial;
    //height: 100vh;
    width: 50%;

    ${gridColWidth( 1 )};

    svg.moon {

      align-self: center;
      margin-top: 0;

      ${spacing( 'mb', 8.8 )};
      ${spacing( 'mr', 3.2 )};
    }

  ` )};

`

const moonAndStarVariants = {
    initial: {}, animate: {
        transition: {
            delayChildren: .2, staggerChildren: .1
        }
    },
}
const moonVariants = {
    initial: {
        y: '100%', scale: .3, opacity: 0,
    },
    animate: {
        y: 0, scale: 1, opacity: 1,
    },
    exit: {
        y: '100%', scale: .3, opacity: 0, transition: {
            duration: 1, delay: .5, ease: [0.6, 0.01, 0, 0.9],
        }
    }
}
const starVariants = {
    initial: {}, animate: {
        transition: {
            staggerChildren: .2
        }
    },
    exit: {
        transition: {
            staggerChildren: .04
        }
    }
}
const starItemVariants = {
    initial: {
        scale: 0, opacity: 0
    },
    animate: {
        scale: 1, opacity: 1,
    },
    exit: {
        scale: 0, opacity: 0,
    }
}

const mountainVariants = {
    initial: {}, animate: {
        transition: {
            staggerChildren: .21,
        }
    },
    exit: {
        transition: {
            staggerChildren: .21,
        }
    }
}
const mountainItemVariants = {
    initial: {
        y: '100%', opacity: .6,
    },
    animate: {
        y: 0, opacity: 1, transition: {
            duration: .8, ease: [0.6, 0.01, 0, 0.9],
        }
    },
    exit: {
        y: '100%', opacity: .5,
    }
}

const containerVariant = {
    animate: {
        transition: {
            // delayChildren: .8,
        }
    }
}

const moonTransition = {
    duration: 1, ease: [0.6, 0.01, 0, 0.9],
}

const transition = {
    duration: 2, ease: [0.6, 0.01, 0, 0.9],

}


function HeroMoonEffect(){

    return (
        <HeroMoonEffectContainer variants={containerVariant}>
            <div className="moon" data-scroll data-scroll-speed='-2'>
                <motion.svg variants={moonAndStarVariants} className='__moon' width="539"
                            height="291" viewBox="0 0 539 291"
                            fill="none" xmlns="http://www.w3.org/2000/svg">

                    <motion.g variants={moonVariants}
                              transition={moonTransition}
                    >
                        <g filter="url(#filter0_df_151_75)">
                            <path
                                d="M422.905 135.731C426.209 189.2 388.552 236.86 329.248 240.524C296.933 242.521 259.419 230.089 238.473 210.94C251.21 214.733 264.993 216.403 279.27 215.521C338.576 211.856 383.965 165.546 380.661 112.077C379.158 87.7565 367.837 66.1308 350.349 50.1411C390.54 62.092 420.397 95.1363 422.905 135.731Z"
                                fill="white"/>
                        </g>
                        <g filter="url(#filter1_df_151_75)">
                            <path
                                d="M422.905 135.731C426.209 189.2 388.552 236.86 329.248 240.524C296.933 242.521 259.419 230.089 238.473 210.94C251.21 214.733 264.993 216.403 279.27 215.521C338.576 211.856 383.965 165.546 380.661 112.077C379.158 87.7565 367.837 66.1308 350.349 50.1411C390.54 62.092 420.397 95.1363 422.905 135.731Z"
                                fill="white"/>
                        </g>
                    </motion.g>

                    <motion.g filter="url(#filter2_df_151_75)"
                              variants={starVariants}
                    >
                        <motion.path
                            d="M15.2 114.853C15.2667 114.778 15.6556 112.999 16.0556 110.897C16.5556 108.287 16.8667 106.918 17.0444 106.584C17.4889 105.721 17.9333 105.495 20.3444 104.913C22.5333 104.395 23 104.223 23 103.942C23 103.662 22.5333 103.489 20.3444 102.972C17.9333 102.39 17.4889 102.163 17.0444 101.301C16.8667 100.966 16.5556 99.5972 16.0556 96.9988C15.6556 94.8963 15.3 93.1389 15.2667 93.085C15.1889 92.9771 14.8111 92.9664 14.7333 93.085C14.7111 93.1281 14.3556 94.8855 13.9444 96.988C13.4444 99.6295 13.1333 100.966 12.9667 101.301C12.5111 102.174 12.0667 102.39 9.65555 102.972C7.46667 103.489 7 103.662 7 103.942C7 104.223 7.46667 104.395 9.65555 104.913C12.0667 105.495 12.5111 105.71 12.9667 106.584C13.1333 106.918 13.4444 108.255 13.9444 110.897C14.7333 114.983 14.8333 115.285 15.2 114.853Z"
                            fill="white"
                            variants={starItemVariants}
                            transition={transition}
                        />
                        <motion.path
                            d="M156.325 107.76C156.433 107.637 157.065 104.726 157.715 101.285C158.528 97.0157 159.033 94.775 159.322 94.2281C160.044 92.8166 160.767 92.4461 164.685 91.4934C168.242 90.6465 169 90.3642 169 89.9055C169 89.4468 168.242 89.1645 164.685 88.3177C160.767 87.3649 160.044 86.9944 159.322 85.583C159.033 85.0361 158.528 82.7954 157.715 78.5434C157.065 75.103 156.487 72.2272 156.433 72.139C156.307 71.9626 155.693 71.9449 155.567 72.139C155.531 72.2096 154.953 75.0854 154.285 78.5258C153.472 82.8483 152.967 85.0361 152.696 85.583C151.956 87.0121 151.233 87.3649 147.315 88.3177C143.758 89.1645 143 89.4468 143 89.9055C143 90.3642 143.758 90.6465 147.315 91.4934C151.233 92.4461 151.956 92.799 152.696 94.2281C152.967 94.775 153.472 96.9627 154.285 101.285C155.567 107.972 155.729 108.466 156.325 107.76Z"
                            fill="white"
                            variants={starItemVariants}
                            transition={transition}
                        />
                        <motion.path
                            d="M204.001 166.753C203.948 167.027 203.891 167.323 203.832 167.631C203.675 168.473 203.547 169.112 203.445 169.57C203.393 169.799 203.347 169.987 203.306 170.134C203.268 170.271 203.226 170.404 203.178 170.502L203.174 170.51L203.174 170.51C202.997 170.856 202.79 171.119 202.38 171.329C202.025 171.51 201.519 171.649 200.779 171.831L200.777 171.832L200.777 171.832C200.573 171.881 200.397 171.924 200.243 171.963C200.397 172.002 200.573 172.046 200.777 172.095L200.779 172.095C201.519 172.277 202.025 172.416 202.38 172.598C202.79 172.807 202.997 173.071 203.174 173.416L203.178 173.424L203.178 173.424C203.226 173.523 203.268 173.655 203.306 173.793C203.347 173.94 203.393 174.128 203.445 174.357C203.547 174.815 203.675 175.454 203.832 176.296M204.001 166.753L203.832 176.297C203.832 176.297 203.832 176.297 203.832 176.296M204.001 166.753C204.054 167.029 204.11 167.327 204.168 167.637L204.168 167.638C204.325 168.466 204.453 169.104 204.556 169.564C204.608 169.793 204.655 169.983 204.697 170.133C204.736 170.269 204.779 170.407 204.833 170.51C205.006 170.852 205.211 171.115 205.619 171.325C205.973 171.508 206.48 171.649 207.221 171.831L207.223 171.832C207.427 171.881 207.603 171.924 207.757 171.963C207.603 172.002 207.427 172.046 207.223 172.095L207.221 172.095C206.48 172.277 205.973 172.418 205.619 172.601C205.211 172.812 205.006 173.074 204.833 173.416C204.779 173.519 204.735 173.657 204.697 173.794C204.655 173.944 204.608 174.134 204.556 174.364C204.453 174.825 204.325 175.464 204.168 176.296L204.168 176.297C204.111 176.604 204.054 176.9 204 177.174M204.001 166.753L204 177.174M203.832 176.296C203.895 176.629 203.95 176.92 204 177.174M203.832 176.296C203.832 176.296 203.832 176.296 203.832 176.296L204 177.174"
                            stroke="white"
                            variants={starItemVariants}
                            transition={transition}
                        />
                        <motion.path
                            d="M275.075 252.947C275.1 252.919 275.246 252.272 275.396 251.508C275.583 250.559 275.7 250.061 275.767 249.94C275.933 249.626 276.1 249.544 277.004 249.332C277.825 249.144 278 249.081 278 248.979C278 248.877 277.825 248.814 277.004 248.626C276.1 248.414 275.933 248.332 275.767 248.018C275.7 247.897 275.583 247.399 275.396 246.454C275.246 245.69 275.112 245.05 275.1 245.031C275.071 244.992 274.929 244.988 274.9 245.031C274.892 245.047 274.758 245.686 274.604 246.45C274.417 247.411 274.3 247.897 274.238 248.018C274.067 248.336 273.9 248.414 272.996 248.626C272.175 248.814 272 248.877 272 248.979C272 249.081 272.175 249.144 272.996 249.332C273.9 249.544 274.067 249.622 274.238 249.94C274.3 250.061 274.417 250.547 274.604 251.508C274.9 252.994 274.938 253.104 275.075 252.947Z"
                            fill="white"
                            variants={starItemVariants}
                            transition={transition}
                        />
                        <motion.path
                            d="M297.075 115.947C297.1 115.919 297.246 115.272 297.396 114.508C297.583 113.559 297.7 113.061 297.767 112.94C297.933 112.626 298.1 112.544 299.004 112.332C299.825 112.144 300 112.081 300 111.979C300 111.877 299.825 111.814 299.004 111.626C298.1 111.414 297.933 111.332 297.767 111.018C297.7 110.897 297.583 110.399 297.396 109.454C297.246 108.69 297.112 108.05 297.1 108.031C297.071 107.992 296.929 107.988 296.9 108.031C296.892 108.047 296.758 108.686 296.604 109.45C296.417 110.411 296.3 110.897 296.238 111.018C296.067 111.336 295.9 111.414 294.996 111.626C294.175 111.814 294 111.877 294 111.979C294 112.081 294.175 112.144 294.996 112.332C295.9 112.544 296.067 112.622 296.238 112.94C296.3 113.061 296.417 113.547 296.604 114.508C296.9 115.994 296.938 116.104 297.075 115.947Z"
                            fill="white"
                            variants={starItemVariants}
                            transition={transition}
                        />
                        <motion.path
                            d="M50.125 233.907C50.1667 233.859 50.4097 232.727 50.6597 231.389C50.9722 229.728 51.1667 228.857 51.2778 228.644C51.5556 228.095 51.8333 227.951 53.3403 227.581C54.7083 227.251 55 227.142 55 226.963C55 226.785 54.7083 226.675 53.3403 226.346C51.8333 225.975 51.5556 225.831 51.2778 225.282C51.1667 225.07 50.9722 224.198 50.6597 222.545C50.4097 221.207 50.1875 220.088 50.1667 220.054C50.1181 219.985 49.8819 219.979 49.8333 220.054C49.8194 220.082 49.5972 221.2 49.3403 222.538C49.0278 224.219 48.8333 225.07 48.7292 225.282C48.4444 225.838 48.1667 225.975 46.6597 226.346C45.2917 226.675 45 226.785 45 226.963C45 227.142 45.2917 227.251 46.6597 227.581C48.1667 227.951 48.4444 228.088 48.7292 228.644C48.8333 228.857 49.0278 229.708 49.3403 231.389C49.8333 233.989 49.8958 234.181 50.125 233.907Z"
                            fill="white"
                            variants={starItemVariants}
                            transition={transition}
                        />
                        <motion.path
                            d="M526.638 215.893C526.683 215.839 526.951 214.545 527.226 213.016C527.569 211.118 527.783 210.122 527.906 209.879C528.211 209.252 528.517 209.087 530.174 208.664C531.679 208.287 532 208.162 532 207.958C532 207.754 531.679 207.629 530.174 207.252C528.517 206.829 528.211 206.664 527.906 206.037C527.783 205.794 527.569 204.798 527.226 202.908C526.951 201.379 526.706 200.101 526.683 200.062C526.63 199.983 526.37 199.976 526.317 200.062C526.301 200.093 526.057 201.371 525.774 202.9C525.431 204.821 525.217 205.794 525.102 206.037C524.789 206.672 524.483 206.829 522.826 207.252C521.321 207.629 521 207.754 521 207.958C521 208.162 521.321 208.287 522.826 208.664C524.483 209.087 524.789 209.244 525.102 209.879C525.217 210.122 525.431 211.095 525.774 213.016C526.317 215.988 526.385 216.207 526.638 215.893Z"
                            fill="white"
                            variants={starItemVariants}
                            transition={transition}
                        />
                    </motion.g>
                    <defs>
                        <filter id="filter0_df_151_75" x="188.473" y="0.141052" width="284.633" height="290.593"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                           result="hardAlpha"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="16.5"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_151_75"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_151_75" result="shape"/>
                            <feGaussianBlur stdDeviation="20" result="effect2_foregroundBlur_151_75"/>
                        </filter>
                        <filter id="filter1_df_151_75" x="233.473" y="45.1411" width="202.633" height="208.593"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                           result="hardAlpha"/>
                            <feOffset dx="4" dy="4"/>
                            <feGaussianBlur stdDeviation="4.5"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_151_75"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_151_75" result="shape"/>
                            <feGaussianBlur stdDeviation="1" result="effect2_foregroundBlur_151_75"/>
                        </filter>
                        <filter id="filter2_df_151_75" x="0" y="65" width="539" height="195"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                           result="hardAlpha"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="5" opacity='.2'/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.72 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_151_75"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_151_75" result="shape"/>
                            {/* <feGaussianBlur stdDeviation="0" result="effect2_foregroundBlur_151_75"/> */}
                        </filter>
                    </defs>
                </motion.svg>
            </div>

            <motion.svg variants={mountainVariants} className="mountain" width="943" height="214" viewBox="0 0 943 214"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                <motion.path variants={mountainItemVariants}
                             transition={transition}
                             d="M589.895 162.558L367.989 98.7692L172 214H943V100.5L823.139 0L589.895 162.558Z"
                             fill="#432277"/>
                <motion.path variants={mountainItemVariants}
                             transition={transition} d="M743 214L544.5 50L346.41 165.159L186.155 124.459L0 214H743Z"
                             fill="#321C5E"/>
                <motion.path variants={mountainItemVariants}
                             transition={transition}
                             d="M625.174 200.977L532.744 148.884L411.128 214H943V172.326L821.384 102L625.174 200.977Z"
                             fill="#5430A0"/>
            </motion.svg>


        </HeroMoonEffectContainer>
    );
}

export default HeroMoonEffect;
