"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bar = void 0;
// fooはグローバル変数になる
var foo = 123;
// ローカルスコープ
// ちなみにfooを変数名に設定すると、 ERROR: マージされた宣言 'foo' の個々の宣言はすべてエクスポートされるか、すべてローカルであるかのどちらかである必要があります。
exports.bar = 123;
// ローカルスコープのインポート
// このファイル上では不要だが違うファイルで行なっていると想定
// import { bar } from "./bar"; // エラーになるのでコメントアウトしている
var importedBar = exports.bar; // 許可されます
//# sourceMappingURL=file-modules.js.map