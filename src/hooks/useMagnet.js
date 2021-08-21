import MagnetElement from '../helpers/MagnetElement'
import { useEffect } from 'react'

const useMagnet = (
  clsName = '',
  stop = 1,
  distance = 0.32,
  dependency = [],
) => {
  useEffect(() => {
    const magnet = new MagnetElement({
      element: document.querySelector(clsName),
      stop,
      distance,
    })

    return () => magnet.destroy()
  }, dependency)
}

export default useMagnet
