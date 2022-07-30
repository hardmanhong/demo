Function.prototype.bind2 = function (context) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  var fNOP = function () {};
  var fBound = function () {
    // tip: 模拟多次调用传参
    // eg:
    // function bar(name, age) {
    //     console.log(this.value);
    //     console.log(name);
    //     console.log(age);
    // }
    // var bindFoo = bar.bind(foo, 'daisy');
    // bindFoo('18');
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(
      // tip: bind 返回的函数可以作为构造函数
      // eg:
      // var bindFoo = bar.bind(foo, 'daisy');
      // var obj = new bindFoo('18');
      this instanceof fBound ? this : context,
      args.concat(bindArgs)
    );
  };
  //   fix: 持有的是引用，如果改动 fBound ，原来的函数原型会受影响
  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
};
var foo = {
  value: 1
};
function bar(a, b, c) {
  console.log(this.value, a, b, c);
}
var f = bar.bind2(foo, 2, 3, 4);
f();
