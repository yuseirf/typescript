function logIfHasName(something: { name?: string }) {
    if (something.name) {
        console.log(something.name);
    }
}
var person = { name: 'matt', job: 'being awesome' };
var animal = { name: 'cow', diet: 'vegan, but has milk of own species' };

logIfHasName(person); // okay
logIfHasName(animal); // okay
// Error: 型 '{ neme: string; }' の引数を型 '{ name?: string | undefined; }' のパラメーターに割り当てることはできません。
// オブジェクト リテラルは既知のプロパティのみ指定できます。'neme' は型 '{ name?: string | undefined; }' に存在しません。
// タイプミスを防止できる
// logIfHasName({neme: 'I just misspelled name to neme'}); 