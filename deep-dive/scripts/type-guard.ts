// instance of
class InstanceFoo {
    foo = 123;
    common = '123';
}

class InstanceBar {
    bar = 123;
    common = '123';
}

function doStuff(arg: InstanceFoo | InstanceBar) {
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


