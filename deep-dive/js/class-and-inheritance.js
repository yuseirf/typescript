"use strict";
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}
var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p3 = p1.add(p2); // {x:10,y:30}
console.log(p1);
console.log(p2);
console.log(p3);
class Point3D extends Point {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    add(point) {
        var point2D = super.add(point);
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    }
}
var p3d1 = new Point3D(p1.x, p1.y, 10);
// Pointクラスからのでp1のxとyを継承
console.log(p3d1);
//# sourceMappingURL=class-and-inheritance.js.map