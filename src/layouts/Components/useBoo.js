import {MotionValueContext} from '../../contexts/MotionStateWrapper'
import {BackgroundOverlayStateContext} from "../../contexts/AppStateContext";
import {useContext, useEffect} from "react";


export default function () {
    const {  backgroundOverlay } = useContext(BackgroundOverlayStateContext)
    const {
        variantsUtil: { isTop }, inView, largeUp, toolTipsData
    } = useContext(MotionValueContext);


    useEffect(() => {
        if (backgroundOverlay) return;

        toolTipsData.set({
            text: ['welcome to my space.', 'message 2', 'message 3'],
            timer: [2000, 3000, 4000],
            show: true,
        })
    }, [backgroundOverlay])
}