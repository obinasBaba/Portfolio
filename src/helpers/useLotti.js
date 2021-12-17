import {useEffect, useRef} from 'react'
import lotti from 'lottie-web'

const useLotti = (
    path,
    ref,
    loopReverse = false,
    autoPlay = false,
    inView = true
) => {
    const lottiRef = useRef(null)

    useEffect(() => {
        if (!inView) return

        lotti.destroy(path)

        setTimeout(() => {
            lottiRef.current = lotti.loadAnimation({
                name: path,
                container: ref.current,
                renderer: 'svg',
                loop: loopReverse,
                autoplay: autoPlay,
                path: path,
            })

            let r = 1
            // l.addEventListener('data_ready', () => {})
            if (!loopReverse) {
                lottiRef.current.addEventListener('complete', () => {
                    1 === r ? (r = -1) : -1 === r && (r = 1)
                    lottiRef.current.setDirection(r)
                    lottiRef.current.play()
                })
            }
        })

        // return ( ) => lotti.destroy(path)
    }, [inView])

    return lottiRef
}

export default useLotti;