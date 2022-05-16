import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import AboutPage from '../scenes/AboutPage'
import useLocoScroll from '../hooks/useLocoScroll'
import useToolTip from "../hooks/useToolTip";
import useRefreshMouseListeners from "../hooks/useRefreshMouseListeners";
import Seo from "../components/seo";
import useUpdatePath from "../hooks/useUpdatePath";


gsap.registerPlugin( ScrollTrigger )

function About( { path } ){

    useUpdatePath( path )

    useLocoScroll();

    useToolTip( '[data-tooltip-text]' );
    useRefreshMouseListeners( '#about [data-pointer]' );


    return (
        <>
            <Seo title='About' description='let me tell you about me, my skills and my process of getting work done'/>
            <AboutPage/>
        </>
    )
}

export default About
