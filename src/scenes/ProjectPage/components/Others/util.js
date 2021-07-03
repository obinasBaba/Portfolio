export const lerp = (a,b,n) => (1 - n) * a + n * b;

export const distance = (x1,x2,y1,y2) => {
  let a = x1 - x2;
  let b = y1 - y2;
  return Math.hypot(a,b);
};


export const getMousePos = (e) => {

  return { x : e.clientX, y : e.clientY }
}

