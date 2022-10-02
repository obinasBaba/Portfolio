import { MotionValue, useSpring, useTransform } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { map } from "../../helpers/utils";
import { MotionValueContext } from "../../contexts/MotionStateWrapper";

export default () => {
  const { moScroll } = useContext(MotionValueContext);

  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    setRefresh(!refresh);
  }, []);

  // [0, attach ? moScroll.limit.get() : 0], [0, -100]

  const mapped = useTransform(
    refresh ? moScroll.y : new MotionValue(0),
    (v) => {
      return map(v, 0, moScroll.limit.get(), 0, -100);
    }
  );

  const x = useSpring(refresh ? mapped : new MotionValue(0), {
    mass: 0.5,
    damping: 15,
    stiffness: 50,
  });

  // const tem = useMotionTemplate`${x}%`

  return x;
};
