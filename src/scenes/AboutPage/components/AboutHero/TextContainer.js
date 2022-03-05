import React from 'react'
import styled, {css} from 'styled-components'
import {spacing, text} from '../../../../styles/mixins'
import {Typography} from '@material-ui/core'
import {mediumUp, xLargeUp} from '../../../../styles/mixins/breakpoints'
import {motion} from "framer-motion";

const TextWrapperContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  //width: 85%;
  padding: 0 8%;

  //border: thin solid red;

  ${spacing('gap', 4)};

  h1 {
    font-family: var(--eli);
    font-weight: normal;
    color: white;
    margin-bottom: 0;

    ${xLargeUp(css`
      ${text(7.8)};
    `)};
  }

  h4 {
    //line-height: 1.2;
    //word-spacing:1px;
  }

  & > :last-child {
    max-width: 32ch;
    color: #7b8a9b;

    ${text(1.1)};
  }

  ${mediumUp(css`
    padding: 0 0 0 22%;
    ${spacing('gap', 1)};

    h4 {
      ${spacing('ml', 5)};
    }

    & > :last-child {
      ${spacing('ml', 8.5)};
      ${spacing('mt', 3)};
    }
  `)};
`

const helloTxtVariants = {
    initial: {
        opacity: 0,
        y: -200
    },
    animate: {
        opacity: 1,
        y: 0,
        transitionEnd: {
            // opacity: 0,
        },
    },
    exit: {
        opacity: 0,
        y: -200
    },

    transition: {
        duration: 1
    }
}

const introTxtVariants = {
    initial: {
        opacity: 0,
        y: 200,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
    exit: {
        opacity: 0,
        y: 200
    },

    transition: {
        duration: 1
    }
}

const TextWrapper = () => {
    return (
        <TextWrapperContainer>
            {/*<motion.div variants={helloTxtVariants}>*/}
                <Typography variant="h1">Hello</Typography>
            {/*</motion.div>*/}

            {/*<motion.div className='motto-container' variants={introTxtVariants} transition={introTxtVariants.transition}>*/}

                <Typography variant="h4" gutterBottom={true}>
                    I create progress by designing and developing digital experiences,
                </Typography>

                <Typography variant='bodysdf'>
                    I believe that we can live in a world in which every product or service
                    has an easy to use experience on platforms and my mission is to
                    contribute to it to make it happen
                </Typography>
            {/*</motion.div>*/}

        </TextWrapperContainer>
    )
}

export default TextWrapper
