function getGlobalObject() {
  return this;
}
/**
 * apply 第二个参数是数组，即要调用函数的参数集合
 */
Function.prototype.apply2 = function (context, arr) {
  const getFuncionBody = (length) => {
    var args = [];
    for (var i = 0; i < length; i++) {
      args.push('arguments[2][' + i + ']');
    }
    var code = 'return arguments[0][arguments[1]](' + args + ')';
    return code;
  };
  var context = context || getGlobalObject();
  var __fn = '__' + new Date().getTime();
  context[__fn] = this;

  const result = new Function(getFuncionBody(arr.length))(context, __fn, arr);
  delete context[__fn];
  return result;
};

var foo = {
  value: 1
};
function bar(a, b, c) {
  console.log(this.value, a, b, c);
}

// bar.call2(foo, 2, 3, 4); // 1
bar.apply2(foo, [2, 3, 4]); // 1
