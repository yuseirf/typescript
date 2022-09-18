import { Big } from 'big.js';

var num = '111.11111111111111111111'
export const foo = new Big(num);
export const bar = foo.plus(new Big('0.00000000000000000001'));

// numberを得る方法
const x: number = Number(bar.toString()); // 小数点以下の精度を失う

console.log('num:', num)
console.log('x:', x)