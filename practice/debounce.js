/**
 * https://github.com/mqyqingfeng/Blog/issues/22
 *
 */
function debounce(func, wait) {
  let timer;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, wait);
  };
}

/**
 * 绑定 this 参数
 */
function debounce(func, wait) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

/**
 * 立即执行 返回值
 */
function debounce(func, wait, immediate = false) {
  let timer, result;
  return function (...args) {
    if (timer) clearTimeout(timer);
    if (immediate) {
      if (!timer) result = func.apply(this, args);
      timer = setTimeout(() => {
        timer = null;
      }, wait);
    } else {
      timer = setTimeout(() => {
        result = func.apply(this, args);
      }, wait);
    }
    return result;
  };
}

/**
 * 取消功能
 */
function debounce(func, wait, immediate = false) {
  let timer, result;
  const fn = function (...args) {
    if (timer) clearTimeout(timer);
    if (immediate) {
      if (!timer) result = func.apply(this, args);
      timer = setTimeout(() => {
        timer = null;
      }, wait);
    } else {
      timer = setTimeout(() => {
        result = func.apply(this, args);
      }, wait);
    }
    fn.cancel = function () {
      clearTimeout(timer);
      timer = null;
    };
    return result;
  };
  return fn;
}
