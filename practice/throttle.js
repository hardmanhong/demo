/**
 *
 * https://github.com/mqyqingfeng/Blog/issues/26
 */
function throllte(fn, wait) {
  let lastTime = 0;
  return function (...args) {
    const nowTime = +new Date();
    if (nowTime - lastTime >= wait) {
      lastTime = nowTime;
      fn.apply(this, args);
    }
  };
}
