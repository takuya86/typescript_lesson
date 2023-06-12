"use strict";
let hasVAlue = true;
let count = 10;
let float = 3.14;
let nefative = -0.12;
let single = 'hello';
let duble = "hello";
let back = `hello`;
let hello;
hello = 'hello';
const person = {
    name: 'Jack',
    age: 21
};
// console.log(person.gender)
// objectでも定義できるが使わない
// const person2: object = {
//   name: 'Jack',
//   age: 21
// }
// Object.create();
const person3 = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
const fruits = ['Apple', 'Banana', 'Grape'];
const fruits2 = ['Apple', 'Banana', 'Grape'];
const fruits3 = ['Apple', 'Banana', 'Grape', 1];
// Tuple型 配列の中身の型の順番が決まっている場合
const book = ['business', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
let anything = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.fjiafjaj = 'fjiafjaj';
let banana = 'banana';
banana = anything;
let unionType = 10;
// unionType.toUppercase()
// unionType = 'hello'
// unionType.toUppercase()
let unionTypes = [10, 'hello'];
const apple = 'apple';
let colothSize = 'large';
const cloth = {
    color: 'white',
    size: 'medium'
};
function add(num1, num2) {
    return num1 + num2;
}
// 何も返さない場合void returnがある場合は明示的に返すことになるのでundefinedが使用可能
function sayHello() {
    console.log('Hello!');
    return;
}
console.log(sayHello());
// undefind型はundefinedとnullを扱う
let tmp;
// どちらにつけても良い
const anotherAdd = function (num1, num2) {
    return num1 + num2;
};
// const doublenumber = (number: number): number => number * 2
const doublenumber = num => num * 2;
// collback関数に型をつける
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(num * 2);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});
let unknownInput;
let anyInput;
let text;
// textに入らない
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
// text = unknownInput
// any型だと入る
// anyInput = 'hello'
// anyInput = 21
// anyInput = true
// text = anyInput
if (typeof unknownInput === 'string') {
    unknownInput;
}
// nerver型 ver.3から追加 消すとvoidになる
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error'));
