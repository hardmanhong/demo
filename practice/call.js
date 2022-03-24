function getGlobalObject() {
  return this;
}

Function.prototype.call2 = function (context) {
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
  const args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  const result = new Function(getFuncionBody(args.length))(context, __fn, args);
  delete context[__fn];
  return result;
};
var foo = {
  value: 1
};

function bar(a, b, c) {
  console.log(this.value, a, b, c);
}

bar.call2(null, 2, 3, 4); // 1
