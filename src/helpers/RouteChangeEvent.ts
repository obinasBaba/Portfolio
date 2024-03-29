import { EventEmitter } from "events";

export default class RouteChangeEvent extends EventEmitter {
  private static Instance: RouteChangeEvent;

  static GetInstance() {
    if (!this.Instance) {
      this.Instance = new RouteChangeEvent();
      return this.Instance;
    } else {
      return this.Instance;
    }
  }
}
