// Promise.resolve(123)
//     .then((res) => {
//         console.log(res); // 123
//         return 456;
//     })
//     .then((res) => {
//         console.log(res); // 456
//         return Promise.resolve(123); // resolveされたPromiseを返しています
//     })
//     .then((res) => {
//         console.log(res); // 123 : resolveされた値で`then`が呼び出されます
//         return 123;
//     })

console.log('-----------------------------------')

// このPromiseの結果が見たいときは、他のPromiseをコメント入れてね
// Promise.resolve()以外のreturnを除くと、
// Promise.resolve(123)
//     .then((res) => {
//         console.log(res); // 123
//     })
//     .then((res) => {
//         console.log(res); // undefined
//         return Promise.resolve(123); // resolveされたPromiseを返しています
//     })
//     .then((res) => {
//         console.log(res); // 123 : resolveされた値で`then`が呼び出されます
//     })

console.log('-----------------------------------')

// このPromiseの結果が見たいときは、他のPromiseをコメント入れてね
// rejectされたPromiseを作成する
// Promise.reject(new Error('何か悪いことが起きた'))
//     .then((res) => {
//         console.log(res); // 呼び出されない
//         return 456;
//     })
//     .catch((err) => {
//         console.log(err.message); // 何か悪いことが起きた
//         return 123;
//     })
//     .then((res) => {
//         console.log(res); // 123
//     })

console.log('-----------------------------------')

// rejectされたPromiseを作成する + resolve（）のPromiseを作成
Promise.reject(new Error('何か悪いことが起きた'))
    .then((res) => {
        console.log(res); // 呼び出されない
        return 456;
    })
    .catch((err) => {
        console.log(err.message); // 何か悪いことが起きた
        return Promise.resolve(789);
    })
    .then((res) => {
        console.log(res); // 789
    })