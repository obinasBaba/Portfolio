import gsap from 'gsap'
import {useCallback, useContext, useEffect} from 'react'
import {useMediaQuery} from "@material-ui/core";
import {useMotionValue} from "framer-motion";
import {AppStateContext,} from '../contexts/AppStateContext'
import MagnetElement from '../helpers/MagnetElement'
import {MotionValueContext} from "../contexts/MotionStateWrapper";

export default function (selector = '[data-pointer]') {
    const { refreshCursorEventListeners } = useContext( MotionValueContext )

    useEffect(() => {
        console.log('refreshed run', selector)
        refreshCursorEventListeners.set(selector)
    }, [])
}