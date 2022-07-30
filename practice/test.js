function clone(data) {
  if (Array.isArray(data)) {
    return data.map(clone);
  } else if (typeof data === 'object' && data) {
    const keys = Object.keys(data);
    const result = {};
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      result[key] = clone(data[key]);
    }
    return result;
  } else {
    return result;
  }
}
function newFn() {
  const ctor = [].shift.call(arguments);
  const obj = Object.create(ctor.prototype);
  const result = ctor.apply(obj, arguments);
  if ((result && typeof result === 'function') || typeof result === 'object') {
    return result;
  } else {
    return obj;
  }
}

Function.prototype.apply2 = function (context, args) {
  context = context || window;
  const _fn = +new Date();
  context[_fn] = this;
  const result = context[_fn](...args);
  delete context[_fn];
  return result;
};
Function.prototype.call2 = function (context, ...args) {
  context = context || window;
  const _fn = +new Date();
  context[_fn] = this;
  const result = context[_fn](...args);
  delete context[_fn];
  return result;
};
Function.prototype.bind2 = function (context, ...args) {
  const self = this;
  const fn = function (...bindArgs) {
    const result = self.apply(
      this instanceof fn ? this : context,
      args.concat(bindArgs)
    );
    return result;
  };
  return fn;
};
function debounce(func, wait, immediate) {
  let timer, result;
  const fn = function () {
    if (immediate) {
      if (!timer) result = func.apply(this, arguments);
      timer = setTimeout(() => {
        timer = null;
      }, wait);
    } else {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        result = func.apply(this, arguments);
      }, wait);
    }

    return result;
  };
  return fn;
}
function throttle(func, wait) {
  let lastTime = 0;
  let result;
  const fn = function () {
    const nowTime = +new Date();
    if (nowTime - lastTime >= wait) {
      result = func.apply(this, arguments);
      lastTime = nowTime;
    }
    return result;
  };
  return fn;
}
