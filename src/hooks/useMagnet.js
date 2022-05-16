import {useContext, useEffect} from 'react'
import MagnetElement from '../helpers/MagnetElement'
import {AppStateContext} from '../contexts/AppStateContext'



const useMagnet = (
  clsName = '',
  stop = 1,
  distance = 0.32,
  dependency = [],
) => {

  const { setCursorScaled } = useContext(AppStateContext)


  useEffect(() => {
    const magnet = new MagnetElement({
      element: document.querySelector(clsName),
      stop,
      distance,
      onEnter: () => setCursorScaled(true),
      onLeave: () => setCursorScaled(false)
    })

    return () => magnet.destroy()
  }, dependency)
}

export default useMagnet
