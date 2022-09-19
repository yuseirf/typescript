// 構造の作成
const obj = {"some property": "some value"};

// 分割
const {"some property": someProperty} = obj;
console.log(someProperty === "some value"); // true