"use strict";
// 平方根を出力する関数である sqrt() を使った時、負の数であるときは何も返さない
console.log(Math.sqrt(-1)); // NaN
// これはしないでください
console.log(NaN === NaN); // false!!
// こうしてください
console.log(Number.isNaN(NaN)); // true
//# sourceMappingURL=nan.js.map