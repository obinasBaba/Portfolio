import React, {useContext} from 'react'
import useLocoScroll from '../../../hooks/useLocoScroll'
import useToolTip from '../../../hooks/useToolTip'
import useRefreshMouseListeners from '../../../hooks/useRefreshMouseListeners'
import {BackgroundOverlayStateContext} from '../../../contexts/AppStateContext'
import CaseStudy from '../../../components/CaseStudy'
import useVigozaAssets from '../../../hooks/queries/useVigozaAssets'
import ComingSoon from '../../../components/CaseStudy/ComingSoon'
import useProject2Assets from "../../../hooks/queries/useProject2Assets";

const projectDataDefault = {
    title: 'Gebeya',
    subTitle: 'this is gebeya subtitle',
    about: {
        role: 'FrontEnd Developer',
        context: 'Design',
        period: 'End 2018',
    },
    intro: {},
    backUrl: '/projects#one',
    nextProject: {
        title: 'Atgebe',
        url: '/projects/project3',
        thumbnailUrl: '',
    }

}


const Project2 = () => {

    const {headlineImage} = useProject2Assets();

    const {
        backgroundOverlay
    } = useContext(BackgroundOverlayStateContext)

    projectDataDefault.headlineImage = headlineImage.publicURL

    const loco = useLocoScroll(!backgroundOverlay,)
    useToolTip('[data-tooltip-text]')
    useRefreshMouseListeners('[data-pointer]')

    return (
        <>
            {
                !backgroundOverlay &&
                <CaseStudy projectData={projectDataDefault}>

                    <ComingSoon/>


                </CaseStudy>
            }
        </>
    );
};

export default Project2;
