import React, {useContext} from 'react'
import useLocoScroll from '../../../hooks/useLocoScroll'
import useToolTip from '../../../hooks/useToolTip'
import useRefreshMouseListeners from '../../../hooks/useRefreshMouseListeners'
import {BackgroundOverlayStateContext} from '../../../contexts/AppStateContext'
import CaseStudy from '../../../components/CaseStudy'
import useVigozaAssets from '../../../hooks/queries/useVigozaAssets'
import ComingSoon from '../../../components/CaseStudy/ComingSoon'
import useProject2Assets from "../../../hooks/queries/useProject2Assets";
import useProject3Assets from "../../../hooks/queries/useProject3Assets";
import useUpdatePath from "../../../hooks/useUpdatePath";

const projectDataDefault = {
    title: 'Atgbe Food Delivery',
    subTitle: 'this is gebeya subtitle',
    about: {
        role: 'FrontEnd Developer',
        context: 'Design',
        period: 'End 2018',
    },
    intro: {},
    backUrl: '/projects#three',
    nextProject: {
        title: 'Vigoza',
        url: '/projects/vigoza',
        thumbnailUrl: '',
    }

}


const Project3 = ({location}) => {

    const {headlineImage} = useProject3Assets();

    useUpdatePath(location.pathname)


    projectDataDefault.headlineImage = headlineImage.publicURL

    const loco = useLocoScroll()
    useToolTip('[data-tooltip-text]')
    useRefreshMouseListeners('[data-pointer]')

    return (

                <CaseStudy projectData={projectDataDefault}>

                    <ComingSoon/>


                </CaseStudy>

    );
};

export default Project3;
