type Adder = (a: number, b: number) => number;
let fooByAdder: Adder = (a, b) => {
    a = 10;
    b = 20;
    return a + b;
}
console.log(fooByAdder);
// console.log(fooByAdder.a); プロパティ 'a' は型 'Adder' に存在しません。

let destructuring = {
    destructuringA: 123,
    destructuringB: 456
};
let {destructuringA} = destructuring;
// a = "hello"; // Would Error: cannot assign `string` to a `number`
console.log(destructuringA);