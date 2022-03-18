import gsap from 'gsap'
import MagnetElement from '../helpers/MagnetElement'
import {useCallback, useContext, useEffect} from 'react'
import {AppStateContext,} from '../contexts/AppStateContext'
import {useMediaQuery} from "@material-ui/core";
import {useMotionValue} from "framer-motion";
import {MotionValueContext} from "../contexts/MotionStateWrapper";

export default function (selector) {
    const { refreshCursorEventListeners } = useContext( MotionValueContext )

    useEffect(() => {
        refreshCursorEventListeners.set(selector)
    }, [])
}