"use strict";
function iTakeItAll(first, second, ...allOthers) {
    console.log(allOthers);
}
console.log(iTakeItAll('foo', 'bar')); // []
console.log(iTakeItAll('foo', 'bar', 'bas', 'qux')); // ['bas','qux']
//# sourceMappingURL=rest-parameter.js.map