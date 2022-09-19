"use strict";
// for...inとfor...ofとの比較
var someArray = [9, 2, 5];
for (var item in someArray) {
    // itemはstring
    console.log(typeof (item));
    console.log(item); // 0,1,2
}
var someArray = [9, 2, 5];
for (var num of someArray) {
    console.log(num); // 9,2,5
}
// 辞書型にすると
const xDictionary = {};
xDictionary['a'] = 10;
xDictionary['b'] = 20;
for (var x in xDictionary) {
    console.log(x);
}
//# sourceMappingURL=for-of.js.map