"use strict";
let hello;
function move(distance, direction) {
    // ...
}
move(1, "North"); // Okay
// 推論
// 一つ下のfunctionとconstの名前が一致するため、コメントアウト
// function iTakeFoo(foo: 'foo') { }
// const test = {
//     someProp: 'foo'
// };
// testが{someProp: string}型であると推定されるためエラーになる
// iTakeFoo(test.someProp); // Error: 型 'string' の引数を型 '"foo"' のパラメーターに割り当てることはできません。
function iTakeFoo(foo) { }
const test = {
    someProp: 'foo'
};
iTakeFoo(test.someProp); // Okay!
//# sourceMappingURL=literal-types.js.map