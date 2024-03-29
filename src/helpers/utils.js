/** @format */

function isValidEmail(email) {
  const regexp = new RegExp(/[^@]+@[^.]+\..+/g);
  return regexp.test(email);
}

// this function takes an element on at the time of finding which callback will be returned
export function scrollHandler(ref, callback) {
  return function () {
    const pos = ref.getBoundingClientRect();
    if (pos.y <= 0 && -pos.y < pos.height) {
      return callback(true);
    }
    callback(false);
  };
}

/* export function useEffectScroll(ref, func) {
  const handler = scrollHandler(ref.current, func);
  window.addEventListener('scroll', handler);
  return () => window.removeEventListener('scroll', handler);
} */

export default isValidEmail;

// Linear interpolation
export const lerp = (a, b, n) => (1 - n) * a + n * b;

export const calcWinsize = () => ({
  width: window ? window.innerWidth : 0,
  height: window ? window.innerHeight : 0,
});

// Gets the mouse position
export const getMousePos = (e) =>
  // console.log(e.clientX, e.clientY)

  ({
    x: e.clientX,
    y: e.clientY,
  });

export const distance = (x1, y1, x2, y2) => {
  const a = x1 - x2;
  const b = y1 - y2;

  return Math.hypot(a, b);
};

export const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const map = (value, in_min, in_max, out_min, out_max) =>
  ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
