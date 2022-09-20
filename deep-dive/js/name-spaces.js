"use strict";
// このパターンは、グローバルな名前空間を汚染しないようにJavaScriptでよく使われるパターンです。
// ファイルモジュールの場合、グローバルの名前空間の汚染を心配する必要はありません。
var Utility;
(function (Utility) {
    function log(msg) {
        console.log(msg);
    }
    Utility.log = log;
    function error(msg) {
        console.error(msg);
    }
    Utility.error = error;
})(Utility || (Utility = {}));
// 使い方
Utility.log('Call me');
Utility.error('maybe!');
//# sourceMappingURL=name-spaces.js.map