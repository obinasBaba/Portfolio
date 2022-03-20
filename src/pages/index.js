import React, {useContext, useEffect} from 'react'
import HomePage from '../scenes/HomePage'
import {AppStateContext} from '../contexts/AppStateContext'
import useLocoScroll from '../hooks/useLocoScroll'
import useToolTip from '../hooks/useToolTip'
import useRefreshMouseListeners from '../hooks/useRefreshMouseListeners'
import Seo from '../components/seo'
import {MotionValueContext} from '../contexts/MotionStateWrapper'
import useUpdatePath from "../hooks/useUpdatePath";

const IndexPage = ({path}) => {

    const loco = useLocoScroll()

    useUpdatePath(path);

    useToolTip('[data-tooltip-text]')
    useRefreshMouseListeners('.homepage-container [data-pointer]')

    return (
        <>
            <Seo
                title="homepage"
            />
            <HomePage/>
        </>
    )
}

export default IndexPage
