var list = [1, 2];
list = [...list, 3, 4];
console.log(list); // [1,2,3,4]

var list = [1, 2];
list = [0, ...list, 4];
console.log(list); // [0,1,2,4]

// 以下のように肩を変えるとエラーが出るので注意
// var list = [1, 2];
// list = ['suzuki', ...list];
// console.log(list);

// 最初に来るものは、後で来るものによって上書きされる
const point2D = {x: 1, y: 2};
const anotherPoint3D = {x: 5, z: 4, ...point2D}; // debug anywayで見れます
console.log(anotherPoint3D); // {x: 1, y: 2, z: 4}

const yetAnotherPoint3D = {...point2D, x: 5, z: 4}
console.log(yetAnotherPoint3D); // {x: 5, y: 2, z: 4}