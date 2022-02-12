import React, {useContext, useEffect} from 'react';
import useLocoScroll from "../../../hooks/useLocoScroll";
import useToolTip from "../../../hooks/useToolTip";
import useRefreshMouseListeners from "../../../hooks/useRefreshMouseListeners";
import {AppStateContext, BackgroundOverlayStateContext} from "../../../contexts/AppStateContext";
import CaseStudy from "../../../CaseStudy";
import MetaTxt from "../../../CaseStudy/MetaTxt";
import Intro from "../../../CaseStudy/Intro";
import AnalysisPreparation from "../../../CaseStudy/AnalysisPreparation";
import ColorPalette from "../../../CaseStudy/Colors";
import FontUsed from "../../../CaseStudy/FontUsed";
import Concept from "../../../CaseStudy/Concept";
import Development from "../../../CaseStudy/Development";
import useVigozaAssets from "../../../hooks/queries/useVigozaAssets";

const projectDataDefault = {
    title: 'Vigoza Digital Agency',
    subTitle: 'this is vigoza subtitle',
    about: {
        role: 'FrontEnd Developer',
        context: 'Design',
        period: 'End 2018',
    },
    intro: {
        themeColor: '#f1c9b3',
        color: '#02021e',
        logoUrl: '/projects/honey-logo.png',
        // imageData: preview2,
        link: 'https://www.prosapient.com',
        title: 'The Project',
        desc:
            `
        Honey is an outstanding Beauty and Hair space in Addis Abeba, Ethiopia.
        They include a variety of services including professional hair cutting and
        styling, manicures , pedicures, cosmetics, makeup and makeovers to say a few.
        This WebApp(PWA) makes their client to keep up and admire their daily post as
        well us to easily make an appointment despite the massive no of client.   
        `,
    },
    backUrl: '/projects#two'
}


const Vigoza = ({location}) => {

    // console.log('vigozaArg: ', arg)

    const { headlineImage } = useVigozaAssets();

    const {
        backgroundOverlay
    } = useContext(BackgroundOverlayStateContext)

    const {
        setCurrentPath,
    } = useContext(AppStateContext)
    useEffect(() => {
        // console.log('fromProject : ', location, path)
        setCurrentPath(location.pathname)
    }, [])

    projectDataDefault.headlineImage = headlineImage.publicURL
    projectDataDefault.location = location;

    const loco =  useLocoScroll(!backgroundOverlay, )
    useToolTip('[data-tooltip-text]')
    useRefreshMouseListeners('[data-pointer]')

    return (
        <>
            {
                !backgroundOverlay &&
                <CaseStudy projectData={projectDataDefault} >

                    <MetaTxt />


                    <div className="line" />

                    <Intro intro={projectDataDefault.intro}/>


                    <AnalysisPreparation />

                    <ColorPalette />

                    <FontUsed />

                    <Concept />

                    <Development />

                </CaseStudy>
            }
        </>
    );
};

export default Vigoza;
