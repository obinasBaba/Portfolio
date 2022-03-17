import React, {useContext, useLayoutEffect, useRef} from 'react'
import styled from 'styled-components'
import {spacing, text} from '../../styles/mixins'
import Typography from '@material-ui/core/Typography'
import {MotionValueContext} from "../../contexts/MotionStateWrapper";
import {motion, useAnimation} from "framer-motion";
import {AppStateContext} from "../../contexts/AppStateContext";

const InfoChipContainer = styled.div`
  position: fixed;
  bottom: 6%;
  left: 4%;
  pointer-events: none;
  z-index: 51;

  & * {
    pointer-events: none;
  }

  //z-index: 100;
`

// dataset.about

const Excerpt = styled(Typography)`

  //flex: 1;
  color: #02021e;
  //line-height: .9;
  margin: 0;
  padding: 0;
  max-width: 42ch;
  overflow-wrap: break-word;
  //word-spacing: -4px;

  text-shadow: 0 3px 3px rgba(0, 0, 0, 0.35);
  text-transform: uppercase;
  letter-spacing: 0.5px;

  ${text(0.7)};
`

const ToolTipWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #123;
  opacity: 0;
  border-radius: 500px;
  box-sizing: border-box;
  background-image: var(--gray_gradient);
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.35);


  & .dot {
    height: 6px;
    width: 6px;
    margin-top: 4px;
    border-radius: 50%;
    background-color: #020b16;
  }

  ${spacing('ph', 1.5)};
  ${spacing('pl', .5)};
  ${spacing('pv', .5)};
  ${spacing('gap', 1.5)};
`

const SmallPlanet = styled.div`
  height: 22px;
  width: 22px;
  animation: rotate 1s ease-in-out infinite normal ;
  //margin-top: 4px;
  
  &.stop{
    animation-play-state: paused;
  }
  
  //background-color: #020b16;

  @keyframes rotate {
    from {transform: rotate(0deg)}
    to {transform: rotate(360deg)}
  }
`

const containerVariant = {

    initial: {
        opacity: 0,
        y: 25,
    },

    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2 * .5,
            ease: 'easeIn'
        }
    },

    exit: {
        y: -25,
        opacity: 0,
        transition: {
            duration: 1.2 * .5,
            ease: [0.6, 0.01, 0, 0.9],
        },
        transitionEnd: {
            y: 25,
        }
    },
}

let first = false;

const ToolTip = () => {

    const {toolTipsData} = useContext(MotionValueContext)
    const smallRef = useRef(null);
    const {
        currentPath,
    } = useContext(AppStateContext)
    const toolTipTextNode = useRef(null)

    const controller = useAnimation()

    useLayoutEffect(() => {
        controller.start('exit')
    }, [currentPath])

    const setText = text => toolTipTextNode.current.textContent = text;

    function showAll(gen) {
        const {value, done} = gen.next();
        if (done) return;

        setText(value.text)

        controller.start('animate')

        setTimeout(() => {
            controller.start('exit')
                .then(() => showAll(gen))
        }, value.timer)

    }

    function* getNext(items) {
        for (const item of items) {
            yield item;
        }
    }

    const stopRotate = () => {
        smallRef.current?.classList.toggle('stop')
    }

    useLayoutEffect(() => {
        // return;
        toolTipsData.onChange(async v => {
            if (v.show) {
                if (v.text instanceof Array) {
                    const {text, timer} = v;

                    const items = text.map((m, idx) => ({text: m, timer: timer[idx]}));
                    let genObj = getNext(items);
                    showAll(genObj)

                } else {
                    toolTipTextNode.current.innerHTML = v.text
                    controller.start('animate')
                }


            } else {
                if (!first){
                    first = true;
                    stopRotate()
                }
                controller.start('exit')
            }
        })
    }, [])

    return (
        <InfoChipContainer>
            <ToolTipWrapper className='tool-tip-wrapper'
                            variants={containerVariant}
                            initial="initial"
                            // animate='animate'
                            animate={controller}
                            exit="exit"
            >

        <SmallPlanet ref={smallRef}>
          <svg width="100%" height="100%" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4.63361 18.745C1.38735 17.0209 0.315581 15.3161 0.00654334 11.0556C-0.0592433 9.19953 0.371987 7.35949 1.25712 5.72436C2.4878 3.3254 3.23604 2.62188 5.31999 1.89798C5.86696 1.74013 6.56702 1.55362 7.14544 1.39169C5.77802 2.22581 4.68416 3.50223 5.20515 4.70647C5.6017 5.60319 5.97474 5.3284 7.32438 3.45604C7.87718 2.57793 8.39693 1.7626 9.13356 1.03024C10.0836 1.14097 11.1532 1.25045 12.0776 1.65213L14.3847 3.47398L12.8902 5.81406C11.298 9.05077 10.535 12.6296 10.6695 16.2308C10.7256 17.0323 10.4724 17.5261 10.1634 17.3683C9.17474 16.8675 10.5065 8.94406 12.0776 5.71506C13.4943 2.94734 13.4969 2.63822 12.3087 3.74041C10.1208 5.57603 8.95439 8.31512 8.83269 12.049C8.78044 13.7836 8.45371 15.4997 7.86454 17.1331C6.8882 19.0381 7.28762 19.4749 9.36884 19.0599C12.972 18.4081 19.693 7.56152 16.3729 7.81462C15.8136 7.84183 15.8151 7.68678 16.2513 7.44321C16.6247 7.17106 16.57 6.36562 16.0791 5.6526C15.219 4.44155 15.0946 4.5339 13.7395 7.33291C12.383 10.2843 12.3829 10.2843 13.8871 8.41326C15.3912 6.54226 15.4514 6.57236 13.9745 9.00126C13.1541 10.445 12.7781 11.4928 13.0872 11.4942C13.4974 11.4669 13.2386 11.9581 12.6766 12.6017C11.6756 13.7978 11.6143 13.7666 11.7852 11.6084C12.0624 9.79671 12.598 8.03339 13.3756 6.37217C14.8251 3.54185 14.9494 3.45192 16.0571 4.47791C19.8462 8.02533 19.0492 14.904 14.6516 18.0187C13.0728 19.2401 11.1458 19.9336 9.14717 20C7.56092 19.9603 6.00976 19.5287 4.63227 18.745H4.63361ZM15.808 13.6422C14.834 15.2397 13.7226 16.7505 12.4856 18.1563C11.9523 18.7373 12.6688 18.2485 14.1662 17.149C15.8203 16.1312 17.0115 14.5132 17.4886 12.637C17.7621 11.5389 17.9164 10.9427 17.781 10.9427C17.0102 11.7555 16.3469 12.6625 15.8067 13.6422H15.808ZM8.8614 5.16359C7.70723 6.65693 7.07261 8.48349 7.05263 10.3673C7.04289 12.2073 6.88356 14.0436 6.57657 15.8581C6.28531 17.4909 6.34148 18.2961 6.68607 17.7736C7.39511 15.7183 7.85984 13.5873 8.07019 11.4244C8.62946 7.1381 9.07381 5.81593 10.3236 4.74368C12.2599 2.93799 12.3105 3.34487 10.9513 2.65634C9.65223 1.99775 8.38554 2.44676 7.0947 4.97091C6.59012 5.95471 5.96438 6.72045 5.59107 6.68644C5.06324 6.65242 4.32303 10.072 4.52678 11.9579C4.4691 12.6685 4.1554 13.3343 3.64343 13.8329C2.86126 14.5976 2.92311 14.6303 3.85842 14.1731C4.73084 13.6873 4.88259 13.9977 4.37254 15.7531C4.05257 16.9845 4.04664 17.9111 4.44866 17.8825C5.34979 17.7982 6.11422 15.0852 6.27011 10.9826C6.48206 7.52631 7.55682 4.97214 9.49036 3.47398C9.61372 3.34671 9.76581 3.25017 9.9337 3.19226C10.121 3.18954 9.76666 3.82739 8.86006 5.16226L8.8614 5.16359ZM1.62768 14.1226C1.34326 14.6764 1.37073 15.2304 1.67977 15.3896C1.9888 15.5488 2.51955 14.964 2.86825 14.1326C3.27847 13.3325 3.31279 12.6543 3.00512 12.6502C2.6619 12.7101 2.78908 12.3104 3.28956 11.7878C3.79003 11.2653 3.38776 11.2952 2.38818 11.8749C1.38859 12.4545 0.956282 12.5429 1.45676 12.0217C1.67866 11.6352 1.80751 11.2031 1.83266 10.7587C1.85782 10.3142 1.7792 9.86989 1.60231 9.46104C0.902194 7.63494 0.437025 7.62953 1.04279 9.48829C1.25611 10.1374 1.22156 10.5071 0.972685 10.3819C0.723815 10.2567 0.505396 10.8407 0.53001 11.7061C0.554623 12.5715 0.889775 13.2833 1.3506 13.2874C1.38613 13.2801 1.42247 13.2767 1.45876 13.2768C1.80198 13.2754 1.85604 13.6736 1.62768 14.1226ZM3.59602 4.04272C3.18186 4.27816 2.81921 4.59368 2.52973 4.97091C2.24025 5.34814 2.02931 5.77904 1.91012 6.23862C1.79093 6.6982 1.76545 7.177 1.83534 7.64652C1.90522 8.11604 2.06946 8.56722 2.3174 8.9727C2.86437 10.0245 3.45202 10.5553 3.64209 10.1879C4.10599 8.58594 4.05447 6.87906 3.49454 5.30777C3.22105 4.78117 3.31393 4.59891 3.86911 4.87922C4.30121 5.0983 4.64433 4.87937 4.58553 4.39087C4.58553 4.01259 4.46254 3.8301 4.2123 3.8301C3.99253 3.8503 3.78137 3.92347 3.59602 4.04272ZM7.80845 1.03024C8.74514 0.917302 8.11084 1.11825 7.14544 1.38903C7.36013 1.2584 7.58286 1.13774 7.80712 1.03024H7.80845Z"
                fill="url(#paint0_linear_184_70)"/>
            <defs>
                <linearGradient id="paint0_linear_184_70" x1="9.2398" y1="0.998169" x2="9.2398" y2="20"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00C99B"/>
                    <stop offset="0.510346" stopColor="#FF0EA1"/>
                    <stop offset="1" stopColor="#FFD392"/>
                </linearGradient>
            </defs>
          </svg>

        </SmallPlanet>
                <Excerpt variant='body2' className='tool-tip-excerpt' ref={toolTipTextNode}/>
            </ToolTipWrapper>
        </InfoChipContainer>
    )
}

export default ToolTip
