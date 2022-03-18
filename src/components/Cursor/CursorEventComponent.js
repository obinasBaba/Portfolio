import React, {useCallback, useContext, useEffect} from 'react';
import {AppStateContext} from "../../contexts/AppStateContext";
import gsap from "gsap";
import MagnetElement from "../../helpers/MagnetElement";
import {useMediaQuery, useTheme} from "@material-ui/core";
import {useMotionValue} from "framer-motion";
import {MotionStateWrapper, MotionValueContext} from "../../contexts/MotionStateWrapper";

const CursorEventComponent = () => {

    const {currentPath} = useContext(AppStateContext)
    const { refreshCursorEventListeners } = useContext( MotionValueContext )

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const animateFocus = (isFocused, color) => {
        gsap.to('.pointer.inner > *', {
            color: isFocused ? color || '#a4b5c0' : 'var(--theme)',
            duration: gsap.defaults().duration,
        })

        gsap.to('.pointer.inner', {
            scale: isFocused ? 1.2 : 1,
        })

        gsap.to('.pointer.outer', {
            scale: isFocused ? 0 : 1,
            opacity: isFocused ? 0 : 1,
        })
    }

    const animatePointed = (isPointed, pointedColor) => {

        gsap.to('.pointer.inner', {
            scale: isPointed ? 3.17 : 1,
        })

        gsap.to('.pointer.inner > *', {
            color: isPointed ? pointedColor || '#a4b5c0' : 'var(--theme)',
            duration: gsap.defaults().duration,
        })

        gsap.to('.pointer.outer', {
            scale: isPointed ? 0.84 : 1,
            duration: 0.5,
        })

        gsap.to('.cursor-container', {
            zIndex: isPointed ? 8 : 30,
        })
    }

    const handleHover = e => {
        let type = e.currentTarget.dataset.pointer
        let color = e.currentTarget.dataset.pointerColor

        if (type === 'focus')
            animateFocus(true, color)
        else
            animatePointed(true, color)
    }

    const handleLeave = () => {
        animateFocus(false)
        animatePointed(false)
    }

    const refreshEventListeners = selector => {

            const pointerElements = document.querySelectorAll(selector)

            pointerElements.forEach(element => {
                element.removeEventListener('mouseenter', handleHover)
                element.removeEventListener('mouseleave', handleLeave)

                const type = element.dataset.pointer

                if (type === 'magnet') {
                    const attraction = element.dataset.magnetAttraction ?? 1;
                    const distance = element.dataset.magnetDistance ?? 0.7;

                    element.addEventListener('mouseenter', handleHover)

                    new MagnetElement({
                        element: element,
                        stop: attraction,
                        distance: distance,
                    }).on('leave', () => {
                        //if it is magnet no mouseleave needed
                        animatePointed(false)
                    })
                } else if (type === 'focus') {
                    //only for pointer and focused add mouseleave
                    element.addEventListener('mouseenter', handleHover)

                    element.addEventListener('mouseleave', handleLeave)
                }
            })
        }

    useEffect(() => {
        animateFocus(false)
        animatePointed(false)
    }, [currentPath])

    useEffect(() => {
        if (isMobile) return;

        const unsub = refreshCursorEventListeners.onChange(selector => {
            refreshEventListeners(selector)
        })

        refreshEventListeners(refreshCursorEventListeners.get())

        return () => unsub()

    }, [isMobile])

    return <></>;
};

export default CursorEventComponent;
