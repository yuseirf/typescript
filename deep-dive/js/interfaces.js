"use strict";
var yourPoint = { a: 1, b: 10 };
var yourInterfacePoint = { a: 1, b: 10 };
console.log(yourPoint.a === yourInterfacePoint.a);
console.log(yourPoint.b === yourInterfacePoint.b);
console.log(typeof (yourPoint)); // object
console.log('-------------------------------');
var myPoint = { x: 10, y: 20, z: 30 };
console.log(myPoint.z);
class MyInterfaceClass {
    constructor() {
        this.userId = 10;
        this.age = 20;
    }
}
var age = new MyInterfaceClass();
console.log(age);
//# sourceMappingURL=interfaces.js.map