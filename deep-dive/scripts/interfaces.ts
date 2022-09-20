// 型定義とインターフェースの比較
// Sample A
declare var yourPoint: { a: number; b: number; };
var yourPoint = {a: 1, b: 10};

// Sample B
interface YourInterfacePoint {
    a: number; b: number;
}
declare var yourInterfacePoint: YourInterfacePoint;
var yourInterfacePoint = {a: 1, b: 10};

console.log(yourPoint.a === yourInterfacePoint.a);
console.log(yourPoint.b === yourInterfacePoint.b);
console.log(typeof(yourPoint)); // object

console.log('-------------------------------');
// // Lib a.d.ts
interface MyPoint {
    x: number; y: number;
}
declare var myPoint: MyPoint;

// Lib b.d.ts
interface MyPoint {
    z: number;
}

var myPoint = {x: 10, y: 20, z: 30};
console.log(myPoint.z);

// 互換性を保証するためにimplementsキーワードを使うことができます

interface InterfaceClass {
    userId: number; 
    age: number;
}

class MyInterfaceClass implements InterfaceClass {
    userId: number = 10;
    age: number = 20;
}

var age: InterfaceClass = new MyInterfaceClass();
console.log(age);