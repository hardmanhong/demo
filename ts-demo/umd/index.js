(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "./a"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var a_1 = (0, tslib_1.__importDefault)(require("./a"));
    var isFn = function (f) { return typeof f === 'function'; };
    console.log('a', a_1.default);
    exports.default = isFn;
});
