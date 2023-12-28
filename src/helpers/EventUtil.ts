import { getMousePos } from './utils';

class EventUtil {
  private static Instance: EventUtil | null = null;
  public mousePos = {
    x: 0,
    y: 0,
  };

  static getInstance() {
    if (this.Instance === null) {
      this.Instance = new EventUtil();
      return this.Instance;
    } else {
      return this.Instance;
    }
  }

  updatePos(x: number, y: number) {
    this.mousePos = { x, y };
  }

  constructor() {
    window.addEventListener(
      'mousemove',
      (ev) => (this.mousePos = getMousePos(ev)),
    );
  }
}

export default EventUtil;
