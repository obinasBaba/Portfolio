import React from 'react'
import styled from 'styled-components'
import {motionValue, motion} from "framer-motion";

const Container = styled.div`
  margin: auto;
  margin-top: 10rem;

  border: thin solid red;
  
  svg{
    g#solid{
      //display: none;
    }
    
    g#items{
      //display: none;
    }
  }
  
  
  
`
const transition = {
    duration: 1,
    ease: [0.6, 0.01, 0, 0.9],

}

const maskPathVariants = {
    initial: { pathLength: .5},
    animate: {
        // pathLength: [0, 1],
        transition: {
            // duration: 2,
            // repeat: Infinity,
        },
    },
}

const wheelVariants = {
    initial: {},
    animate: {
        y: [ '0%', '20%', '40%', '6%', '0%'],
        scale: [ 1, .65, .1, 0, 1],
        opacity: [1, 1, 0, .4, 1],

        transition: {
            // ...transition,
            ease: 'linear',
            duration: 3,
            repeat: Infinity,
        },
    },

}



const MyComponent = () => {
    return (
        <Container>
            <motion.svg
                width="148"
                height="196"
                viewBox="0 0 48 96"
                fill="none"
                variants={{
                    animate: {
                        transition: {
                            // ease: 'linear'
                        }
                    }
                }}
                initial='initial'
                animate='animate'
            >
                <motion.g id="mouse">
                    <motion.g id="solid">
                        <path
                            d="M24 0.00377006C23.8669 0.00125998 23.7336 0 23.6 0C10.5661 0 0 11.9931 0 26.7874V52.2126C0 67.0069 10.5661 79 23.6 79C23.7336 79 23.8669 78.9987 24 78.9962V77.1799C23.867 77.1826 23.7336 77.1839 23.6 77.1839C11.4497 77.1839 1.6 66.0039 1.6 52.2126V26.7874C1.6 12.9961 11.4497 1.81609 23.6 1.81609C23.7336 1.81609 23.867 1.81744 24 1.82014V0.00377006Z"
                            fill="red"

                        />
                        <path
                            d="M24 0.00377006C24.1331 0.00125998 24.2664 0 24.4 0C37.4339 0 48 11.9931 48 26.7874V52.2126C48 67.0069 37.4339 79 24.4 79C24.2664 79 24.1331 78.9987 24 78.9962V77.1799C24.133 77.1826 24.2664 77.1839 24.4 77.1839C36.5503 77.1839 46.4 66.0039 46.4 52.2126V26.7874C46.4 12.9961 36.5503 1.81609 24.4 1.81609C24.2664 1.81609 24.133 1.81744 24 1.82014V0.00377006Z"
                            fill="red"
                        />
                    </motion.g>
                    <motion.g id="items">
                        <motion.path
                            variants={maskPathVariants}
                            id="left"
                            d="M24 0.00377006C23.8669 0.00125998 23.7336 0 23.6 0C10.5661 0 0 11.9931 0 26.7874V52.2126C0 67.0069 10.5661 79 23.6 79C23.7336 79 23.8669 78.9987 24 78.9962V77.1799C23.867 77.1826 23.7336 77.1839 23.6 77.1839C11.4497 77.1839 1.6 66.0039 1.6 52.2126V26.7874C1.6 12.9961 11.4497 1.81609 23.6 1.81609C23.7336 1.81609 23.867 1.81744 24 1.82014V0.00377006Z"
                            // fill="white"
                            fill="none"
                            stroke="#fff"
                            stroke-width="2"
                        />
                        <motion.path
                            variants={maskPathVariants}
                            id="right"
                            d="M24 0.00377006C24.1331 0.00125998 24.2664 0 24.4 0C37.4339 0 48 11.9931 48 26.7874V52.2126C48 67.0069 37.4339 79 24.4 79C24.2664 79 24.1331 78.9987 24 78.9962V77.1799C24.133 77.1826 24.2664 77.1839 24.4 77.1839C36.5503 77.1839 46.4 66.0039 46.4 52.2126V26.7874C46.4 12.9961 36.5503 1.81609 24.4 1.81609C24.2664 1.81609 24.133 1.81744 24 1.82014V0.00377006Z"
                            fill="white"
                        />
                        <motion.g id="Group 9">
                            <motion.path
                                variants={wheelVariants}
                                // transition={transition}
                                id="wheel"
                                d="M21 21C21 19.3431 22.3431 18 24 18C25.6569 18 27 19.3431 27 21C27 22.6569 25.6569 24 24 24C22.3431 24 21 22.6569 21 21Z"
                                fill="white"
                            />
                        </motion.g>
                    </motion.g>

                </motion.g>
            </motion.svg>
        </Container>
    )
}

export default MyComponent;
