import React, { useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { Typography } from '@material-ui/core'
import { motion, useAnimation, useMotionValue } from 'framer-motion'
import { spacing, text, } from '../../../../../styles/mixins'
import LottiIcon from './LottiIcon'
import { mediumUp, xxLargeUp } from "../../../../../styles/mixins/breakpoints";

const StyledCard = styled( motion.div )`
  position: relative;
  max-width: 54ch;
  border-radius: 20px;
  box-shadow: 0 40px 49px 0 rgba(0 0 0/ 16%);
  color: #02021e;

  background-image: var(--gray_gradient);

  display: flex;
  flex-flow: column;

  ${spacing( 'ph', 5 )};
  ${spacing( 'pt', 8 )};
  ${spacing( 'pb', 7 )};
  ${spacing( 'mt', 8 )};

  ${mediumUp( css`
    ${spacing( 'pt', 6 )};
    ${spacing( 'pb', 4 )};
  ` )};

  ${xxLargeUp( css`
    max-width: 60ch;
  ` )};

  & > * {
    //border: thin solid blueviolet;
  }

  & .card-titleTxt {
    z-index: 1;
    letter-spacing: -1px;
    font-weight: 900;

    ${spacing( 'mb', 1.6 )};
  }

  .approach-desc {
    ${text( 1 )};
    color: #1e213d;
  }

  & svg {
    margin-left: -30px;
  }
`

const Num = styled( motion.div )`
  //content: '0${( { no } ) => no}';
  position: absolute;
  top: -24%;
  right: -4%;
  font-weight: 900;
  letter-spacing: -3px;
  -webkit-text-stroke: 2.5px #566373;
  color: transparent;
  ${text( 7 )};

  ${mediumUp( css`
    ${text( 11 )};
    right: -18%;
    top: -40%;
  ` )};
`

const Keys = styled( motion.div )`
  display: flex;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  align-self: flex-end;
  font-weight: lighter;
  opacity: 0.8;
  text-shadow: 0 3px 3px rgba(0, 0, 0, 0.51);
  position: absolute;
  right: 0;
  bottom: 0;
  color: #1e213d;

  ${text( 0.7 )};
  ${spacing( 'mt', 2 )};
  ${spacing( 'mb', 1 )};
  ${spacing( 'mr', 3 )};
`

const keysVariants = {
    initial: {
        y: '23%',
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
    },

    transition: {
        ease: [0.6, 0.01, 0, 0.9],
        duration: 1.3,
    },
}


function Card( { txt, titleTxt, methodologies, index, path } ){
    const cardRef = useRef( null )
    // let intersecting = useOnScreen(cardRef, 0, '0% -42% 0% 0%')
    // const [inView, setInView] = useState(false)
    const controller = useAnimation()
    let firstTimeOnly = false;

    const inView = useMotionValue( false )

    useEffect( () => {
        inView.onChange( v => {
            if ( firstTimeOnly ) return
            firstTimeOnly = true
            if ( v ) controller.start( 'animate' )
        } )
    }, [] )

    return (
        <StyledCard
            no={index + 1}
            className={`card card-${index}`}
            ref={cardRef}
            onViewportEnter={_ => {
                inView.set( true )
                // lottiRef.current && lottiRef.current.play()
            }}
            onViewportLeave={_ => {
                inView.set( false )
                // lottiRef.current && lottiRef.current.pause()
            }}
        >
            <Num
                variants={keysVariants}
                initial="initial"
                animate={controller}
                transition={{ ...keysVariants.transition, delay: 0.3 }}
            >
                0{index + 1}
            </Num>

            {
                path &&
                <LottiIcon
                    inView={inView}
                    path={path}
                    rocket={index === 4}
                    design={index === 1}
                />
            }

            <Typography variant="h3" className="card-titleTxt">{titleTxt}</Typography>

            <Typography className="approach-desc">{txt}</Typography>

            <Keys
                variants={keysVariants}
                initial="initial"
                animate={controller}
                transition={keysVariants.transition}
                exit="exit"
            >
                {methodologies}
            </Keys>
        </StyledCard>
    )
}

export default Card
