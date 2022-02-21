"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _a = _interopRequireDefault(require("./a"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isFn = function isFn(f) {
  return typeof f === 'function';
};

console.log('a', _a["default"]);
var _default = isFn;
exports["default"] = _default;