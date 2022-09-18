console.log(Number.MAX_VALUE);  // 1.7976931348623157e+308
console.log(-Number.MAX_VALUE); // -1.7976931348623157e+308
console.log(Number.MAX_VALUE + 1 == Number.MAX_VALUE);   // true!
console.log(-Number.MAX_VALUE - 1 == -Number.MAX_VALUE); // true!
// 無限の限界値まで来ると足しても　true　になる

console.log(Number.MAX_VALUE + 10**1000);  // Infinity
console.log(-Number.MAX_VALUE - 10**1000); // -Infinity
// 特殊な値　Infinity　を返す

console.log( 1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
// python　ではエラーが出るところもと特殊な値Infinityになる

console.log( Infinity >  1); // true
console.log(-Infinity < -1); // true
// 正しく動く