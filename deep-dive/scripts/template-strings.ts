var a = '絶対にあきらめない';
var aHtml = '<div>' + a + '</div>';
console.log(aHtml);

var b = '絶対にあきらめない';
var bHtml = `<div>${b}</div>`;
console.log(bHtml);

console.log(aHtml === bHtml); // true

// 補間(${と})の内側のプレースホルダは、JavaScriptの式として評価される点に注目してください。例えば、何らかの計算をすることができます。
console.log(`1 and 1 make ${1 + 1}`);

console.log('-----------------------------')
// テンプレートリテラルとの使い方 - 改行の使い方
// 通常
var common = "絶対にあきらめない \
\n絶対にがっかりさせない";
console.log(common);

// テンプレートリテラル
// バッククォート(`)を使っていることに注意
var templateLiteral = `絶対にあきらめない
絶対にがっかりさせない`;
console.log(templateLiteral)