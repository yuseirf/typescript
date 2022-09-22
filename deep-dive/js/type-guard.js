"use strict";
// instance of
class InstanceFoo {
    constructor() {
        this.foo = 123;
        this.common = '123';
    }
}
class InstanceBar {
    constructor() {
        this.bar = 123;
        this.common = '123';
    }
}
function doStuff(arg) {
    if (arg instanceof InstanceFoo) {
        console.log(arg.foo); // OK
        // console.log(arg.bar); // Error! 存在しない
    }
    if (arg instanceof InstanceBar) {
        // console.log(arg.foo); // Error! 存在しない
        console.log(arg.bar); // OK
    }
    console.log(arg.common); // OK
    // console.log(arg.foo); // Error!存在しない
    // console.log(arg.bar); // Error!存在しない
}
doStuff(new InstanceFoo());
doStuff(new InstanceBar());
//# sourceMappingURL=type-guard.js.map