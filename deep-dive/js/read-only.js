"use strict";
function readOnly(config) {
    // 
}
let config = { bar: 123, bas: 456 };
readOnly(config);
console.log(config.bar);
// Initialization is okay
let TypeReadOnly = { typeBar: 123, typeBas: 456 };
// Mutation is not
// TypeReadOnly.typeBar = 456; // Error: 読み取り専用プロパティであるため、'typeBar' に代入することはできません。
//# sourceMappingURL=read-only.js.map