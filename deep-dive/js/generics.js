"use strict";
// class Queue {
//     private data: number[] = [];
//     push(item: number) { this.data.push(item); }
//     pop() { return this.data.shift(); }
// }
// const queue = new Queue();
// queue.push(0);
// queue.push("1"); // Oops a mistake
// // a developer walks into a bar
// console.log(queue.pop().toPrecision(1)); // オブジェクトは 'undefined' である可能性があります。
// console.log(queue.pop().toPrecision(1)); // オブジェクトは 'undefined' である可能性があります。
class QueueNumber {
    constructor() {
        this.data = [];
    }
    push(item) { this.data.push(item); }
    pop() { return this.data.shift(); }
}
const queue = new QueueNumber();
queue.push(0);
//# sourceMappingURL=generics.js.map