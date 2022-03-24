/**
 * 模拟 new 实现
 * 1. 创建一个对象
 * 2. 该对象原型链访问到构造函数的原型
 * 3. 执行构造函数并改变 this 为该对象
 * 4. 若构造函数返回一个对象则返回，否则返回 this
 */
function newFn() {
  const Constructor = [].shift.call(arguments);
  const obj = Object.create(Constructor.prototype);
  Constructor.apply(obj, arguments);
  return typeof result === 'object' ? result : obj;
}
function Foo(name) {
  this.name = name;
}
Foo.prototype.log = function () {
  console.log('Foo log');
};
const f1 = newFn(Foo, 'f1');
