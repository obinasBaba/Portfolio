import {MotionValue, useMotionTemplate, useSpring, useTransform} from 'framer-motion'
import { map } from '../../helpers/utils'
import {useContext, useEffect, useState} from 'react'
import { MotionValueContext } from '../../contexts/MotionStateWrapper'

export default start => {
  console.log('suseMo ...')

  const { moScroll } = useContext(MotionValueContext)


  const [refresh, setRefresh] = useState(false)
  useEffect(() => {
    setRefresh(!refresh)
  }, [])

      // [0, refresh ? moScroll.limit.get() : 0], [0, -100]

  const mapped = useTransform(refresh ? moScroll.y : new MotionValue(0),  v => {
      return map(v, 0, moScroll.limit.get(), 0, -100)
  } )

  const x = useSpring( refresh ? mapped : new MotionValue(0) , {
    mass: 0.5,
    damping: 10,
    stiffness: 50,
  })


  // const tem = useMotionTemplate`${x}%`

  return x;
}