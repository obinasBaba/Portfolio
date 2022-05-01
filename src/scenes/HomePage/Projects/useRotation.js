import {useContext, useEffect, useState} from "react";
import {MotionValue, useSpring, useTransform} from "framer-motion";
import {map} from "../../../helpers/utils";
import {MotionValueContext} from "../../../contexts/MotionStateWrapper";
import {useMediaQuery, useTheme} from "@material-ui/core";

export default function () {

    const {
        moScroll: { y, limit },
    } = useContext(MotionValueContext);

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md'))

    const [refresh, setRefresh] = useState(false)

    const rotate = useTransform(y, latest => {
        return map(latest, 0, limit.get(), 0,   matches ? 360 : 50)
    })

    const x = useSpring( refresh ? rotate : new MotionValue(0) , {
        mass: 1,
        damping: 15,
        stiffness: 50,
    })

    useEffect(() => {
        setRefresh(!refresh)
    }, [])

    if (matches)
        return rotate

    return x;

}