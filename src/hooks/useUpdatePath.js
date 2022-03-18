import {useContext, useEffect} from "react";
import {AppStateContext} from "../contexts/AppStateContext";
import {MotionValueContext} from '../contexts/MotionStateWrapper'


export default function (path) {

    const {
        setCurrentPath
    } = useContext( AppStateContext )


    useEffect(() => {
        setCurrentPath(path);

    }, [])
}