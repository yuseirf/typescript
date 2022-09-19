"use strict";
// ジェネレータ関数は、呼び出した時には実行されません。単にジェネレータオブジェクトを作るだけです。
function* exampleGenerator() {
    console.log('Execution started');
    yield 0;
    console.log('Execution resumed');
    yield 1;
    console.log('Execution resumed');
}
var exampleIterator = exampleGenerator();
console.log('Starting iteration'); // これはジェネレータ関数の本体の前に実行されます
console.log(exampleIterator.next()); // { value: 0, done: false }
console.log(exampleIterator.next()); // { value: 1, done: false }
console.log(exampleIterator.next()); // { value: undefined, done: true }
// 普通の関数だと呼び出したときに実行されているので、varの定義時に以下のfuncitonは実行される
function normalGenerator() {
    console.log('normal started');
}
var normal = normalGenerator();
console.log('after normal started');
//# sourceMappingURL=generators.js.map