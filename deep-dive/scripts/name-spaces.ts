// このパターンは、グローバルな名前空間を汚染しないようにJavaScriptでよく使われるパターンです。
// ファイルモジュールの場合、グローバルの名前空間の汚染を心配する必要はありません。
namespace Utility {
    export function log(msg: string) {
        console.log(msg);
    }
    export function error(msg: string) {
        console.error(msg);
    }
}

// 使い方
Utility.log('Call me');
Utility.error('maybe!');