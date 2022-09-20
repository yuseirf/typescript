"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCommandList = exports.name = void 0;
// Primitive Types
var num;
var str;
var bool;
num = 123;
num = 123.456;
// num = '123'; // Error: number型ではない
str = '123';
// str = 123; // Error: string型でない
bool = true;
bool = false;
// bool = 'false'; // Error: Boolean型でない
// 配列(Arrays)
var boolArray;
boolArray = [true, false];
console.log(boolArray[0]); // true
console.log(boolArray.length); // 2
boolArray[1] = true;
console.log(boolArray);
boolArray = [false, false];
console.log(boolArray);
exports.name = {
    first: 'John',
    second: 'Doe'
};
// name = {           // Error : `second` is missing, プロパティ 'second' は型 '{ first: string; }' にありませんが、型 'Name' では必須です。
//     first: 'John'
// };
// name = {           // Error : `second` is the wrong type 型 'number' を型 'string' に割り当てることはできません。
//     first: 'John',
//     second: 1337
// };
// Generics
function reverse(items) {
    var toreturn = [];
    for (let i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i]);
    }
    return toreturn;
}
var sample = [1, 2, 3];
var reversed = reverse(sample);
console.log(reversed); // 3,2,1
// 投げた型と同じ型が返ってくるので型安全性が高い
// reversed[0] = '1';     // Error! 型 'string' を型 'number' に割り当てることはできません。
// reversed = ['1', '2']; // Error! 型 'string' を型 'number' に割り当てることはできません。
reversed[0] = 1; // Okay
reversed = [1, 2]; // Okay
// union type
function formatCommandline(command) {
    var line = '';
    if (typeof command === 'string') {
        line = command.trim();
    }
    else {
        line = command.join(' ').trim();
    }
    // Do stuff with line: string
}
exports.formatCommandList = formatCommandline('foo');
// intersaction type
function extend(first, second) {
    return Object.assign(Object.assign({}, first), second);
}
const x = extend({ a: "hello" }, { b: 42 });
// x now has both `a` and `b`
const a = x.a;
console.log(a);
const b = x.b;
console.log(b);
// タプル
var nameNumber;
// Okay
nameNumber = ['Jenny', 8675309];
//# sourceMappingURL=type-system.js.map