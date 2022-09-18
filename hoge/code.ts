console.log({max: Number.MAX_SAFE_INTEGER, min: Number.MIN_SAFE_INTEGER});
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