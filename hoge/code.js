"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bar = exports.foo = void 0;
console.log({ max: Number.MAX_SAFE_INTEGER, min: Number.MIN_SAFE_INTEGER });
// {max: 9007199254740991, min: -9007199254740991}
var max_number = Number.MAX_SAFE_INTEGER;
console.log(max_number);
// 9007199254740991
console.log(max_number + 1); // 9007199254740992
console.log(max_number + 2); // 9007199254740992 誤差あり
console.log(max_number + 3); // 9007199254740994
console.log(max_number + 4); // 9007199254740996 誤差あり
console.log(max_number + 5); // 9007199254740996
console.log(max_number + 6); // 9007199254740996 誤差あり
// 安全性をチェックするには、ES6のNumber.isSafeIntegerを使用します：
// 安全な値
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true
// 危険な値
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // false
// なぜならオーバーフローによって値が丸められている可能性があるからです
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 10)); // false
const big_js_1 = require("big.js");
var num = '111.11111111111111111111';
exports.foo = new big_js_1.Big(num);
exports.bar = exports.foo.plus(new big_js_1.Big('0.00000000000000000001'));
// numberを得る方法
const x = Number(exports.bar.toString()); // 小数点以下の精度を失う
console.log('num:', num);
console.log('x:', x);
//# sourceMappingURL=code.js.map