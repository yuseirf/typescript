let hello: 'Hello';
// hello = 'こんにちは'; // Error: 型 '"こんにちは"' を型 '"Hello"' に割り当てることはできません。

// 単独ではあまり使い所がありませんが、ユニオン型で結合して、強力な(そして便利な)抽象化を作成することができます。
type CardinalDirection =
    | "North"
    | "East"
    | "South"
    | "West";
​
function move(distance: number, direction: CardinalDirection) {
    // ...
}
​
move(1,"North"); // Okay
// つづりミスを弾き出せる、
// move(1,"Nurth"); // Error! 型 '"Nurth"' の引数を型 'CardinalDirection' のパラメーターに割り当てることはできません。

type OneToFive = 1 | 2 | 3 | 4 | 5;
type Bools = true | false;

// 推論
// 一つ下のfunctionとconstの名前が一致するため、コメントアウト
// function iTakeFoo(foo: 'foo') { }
// const test = {
//     someProp: 'foo'
// };
// testが{someProp: string}型であると推定されるためエラーになる
// iTakeFoo(test.someProp); // Error: 型 'string' の引数を型 '"foo"' のパラメーターに割り当てることはできません。

function iTakeFoo(foo: 'foo') { }
const test = {
    someProp: 'foo' as 'foo'
};
iTakeFoo(test.someProp); // Okay!
