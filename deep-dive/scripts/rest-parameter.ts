// 関数に渡された複数の引数をすぐに配列として取得できます
// ここでは3つ目以降は配列で受け取るようにしている
function iTakeItAll(first: string, second: string, ...allOthers:string[]) {
    console.log(allOthers);
}
console.log(iTakeItAll('foo', 'bar')); // []
console.log(iTakeItAll('foo', 'bar', 'bas', 'qux')); // ['bas','qux']