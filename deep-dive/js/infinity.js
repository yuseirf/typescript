"use strict";
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(-Number.MAX_VALUE); // -1.7976931348623157e+308
// 無限の限界値まで来ると足してもtrueになる
console.log(Number.MAX_VALUE + 1 == Number.MAX_VALUE); // true!
console.log(-Number.MAX_VALUE - 1 == -Number.MAX_VALUE); // true!
// 特殊な値Infinityを返す
console.log(Number.MAX_VALUE + 10 ** 1000); // Infinity
console.log(-Number.MAX_VALUE - 10 ** 1000); // -Infinity
// Pythonではエラーが出るところもと特殊な値Infinityになる
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
// 正しく動く
console.log(Infinity > 1); // true
console.log(-Infinity < -1); // true
//# sourceMappingURL=infinity.js.map