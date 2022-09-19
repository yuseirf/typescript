"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// 構造の作成
const obj = { "some property": "some value" };
// 分割
const { "some property": someProperty } = obj;
console.log(someProperty === "some value"); // true
// use rest prameter
// サンプル関数
function goto(point2D) {
    // 余計なものが含まれたオブジェクトが渡されたら
    // 正しく動作しないようなコードを想像してください
}
// どこかから取得したPointのオブジェクト
const point3D = { x: 1, y: 2, z: 3 };
/** 余計なプロパティを取り除くための、面白いスプレッド演算子の使い方 */
const { z } = point3D, point2D = __rest(point3D, ["z"]);
console.log(goto(point2D));
//# sourceMappingURL=destructuring.js.map