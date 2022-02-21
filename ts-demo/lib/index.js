"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var a_1 = (0, tslib_1.__importDefault)(require("./a"));
var query_string_1 = (0, tslib_1.__importDefault)(require("query-string"));
var isFn = function (f) { return typeof f === 'function'; };
console.log(a_1.default, query_string_1.default);
exports.default = isFn;
