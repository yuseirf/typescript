"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bar = exports.foo = void 0;
const big_js_1 = require("big.js");
var num = '111.11111111111111111111';
exports.foo = new big_js_1.Big(num);
exports.bar = exports.foo.plus(new big_js_1.Big('0.00000000000000000001'));
// numberを得る方法
const x = Number(exports.bar.toString()); // 小数点以下の精度を失う
console.log('num:', num);
console.log('x:', x);
//# sourceMappingURL=usage-big-js.js.map