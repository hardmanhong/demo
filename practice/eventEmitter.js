class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(type, cb) {
    if (!this.events[type]) {
      this.events[type] = [cb];
    } else {
      this.events[type].push(cb);
    }
  }
  once(type, cb) {
    const fn = (...args) => {
      cb.apply(this, args);
      this.off(type, fn);
    };
    this.on(type, fn);
  }
  off(type, cb) {
    const index = this.events[type].indexOf(cb);
    if (index >= 0) {
      this.events[type].splice(index, 1);
    }
  }
  emit(type, ...args) {
    if (this.events[type]) {
      this.events[type].forEach((cb) => cb.apply(this, args));
    }
  }
}
