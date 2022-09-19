"use strict";
var funcs = [];
// iに3が入るまでループ
for (var i = 0; i < 3; i++) {
    funcs.push(function () {
        console.log('i: ', i);
    });
    // 上のfuncs.pushは関数を入れる作業をしていることがわかる　
    for (const a of funcs) {
        console.log('a:', a);
    }
}
// それらを呼び出す
// iを数字として入れているのではなく、最後の3を出す関数を入れていることから、iは3しか出力されない
for (var j = 0; j < 3; j++) {
    funcs[j]();
}
//# sourceMappingURL=let.js.map