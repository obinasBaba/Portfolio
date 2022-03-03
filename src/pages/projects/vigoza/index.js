import React, {useContext, useEffect} from 'react';
import useLocoScroll from "../../../hooks/useLocoScroll";
import useToolTip from "../../../hooks/useToolTip";
import useRefreshMouseListeners from "../../../hooks/useRefreshMouseListeners";
import {AppStateContext, BackgroundOverlayStateContext} from "../../../contexts/AppStateContext";
import CaseStudy from "../../../components/CaseStudy";
import MetaTxt from "../../../components/CaseStudy/MetaTxt";
import Intro from "../../../components/CaseStudy/Intro";
import AnalysisPreparation from "../../../components/CaseStudy/AnalysisPreparation";
import ColorPalette from "../../../components/CaseStudy/Colors";
import FontUsed from "../../../components/CaseStudy/FontUsed";
import Concept from "../../../components/CaseStudy/Concept";
import Development from "../../../components/CaseStudy/Development";
import useVigozaAssets from "../../../hooks/queries/useVigozaAssets";
import NextProject from "../../../components/CaseStudy/NextProject";

const projectDataDefault = {
    title: 'Vigoza Digital Agency',
    subTitle: 'this is vigoza subtitle',
    about: {
        role: 'FrontEnd Developer',
        context: 'Design',
        period: 'End 2018',
    },
    intro: {
        color: '#02021e',
        themeColor: '#973c22',
        logoUrl: '/projects/vigoza-logo.svg',
        // imageData: preview2,
        link: '/',
        title: 'The Project',
        desc:
            `
        Vigoza is a full-service digital agency that builds immersive user experience.
        The Team create an exceptional visualization and thought-out functionality.
        The studio develops the products people appreciate all around the world.
        This project is made to make it easy to witness and follow-up their work and to keep their clients
        more close
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

                    <NextProject/>

                </CaseStudy>
            }
        </>
    );
};

export default Vigoza;