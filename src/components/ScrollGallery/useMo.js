import { useMotionTemplate, useSpring, useTransform } from 'framer-motion'
import { map } from '../../helpers/utils'
import { useContext } from 'react'
import { MotionValueContext } from '../../contexts/MotionStateWrapper'

export default start => {
  const { moScroll } = useContext(MotionValueContext)

  const mapped = useTransform(moScroll.y, v => {
    return map(v, 0, moScroll.limit.get(), 0, -100)
  })

  const x = useSpring(start ? mapped : 0, {
    mass: 0.5,
    damping: 10,
    stiffness: 50,
  })

  return useMotionTemplate`${x}%`
}