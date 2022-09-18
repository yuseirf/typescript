"use strict";
/// `foo.bar == undefined` のようなコードを書いたときに、何が起きるか想像してみてください:
console.log(undefined == undefined); // true
console.log(null == undefined); // true
// このようなチェックをすれば、falsyな値について心配する必要はありません
console.log(0 == undefined); // false
console.log('' == undefined); // false
console.log(false == undefined); // false
console.log(0 == null); // false
console.log('' == undefined); // false
//# sourceMappingURL=undefined-and-null.js.map