var hasVAlue = true;
var count = 10;
var float = 3.14;
var nefative = -0.12;
var single = 'hello';
var duble = "hello";
var back = "hello";
var hello;
hello = 'hello';
var person = {
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
var person3 = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
var fruits = ['Apple', 'Banana', 'Grape'];
var fruits2 = ['Apple', 'Banana', 'Grape'];
var fruits3 = ['Apple', 'Banana', 'Grape', 1];
// Tuple型 配列の中身の型の順番が決まっている場合
var book = ['business', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
var anything = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.fjiafjaj = 'fjiafjaj';
var banana = 'banana';
banana = anything;
var unionType = 10;
// unionType.toUppercase()
// unionType = 'hello'
// unionType.toUppercase()
var unionTypes = [10, 'hello'];
var apple = 'apple';
var colothSize = 'large';
var cloth = {
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
var tmp;
// どちらにつけても良い
var anotherAdd = function (num1, num2) {
    return num1 + num2;
};
// const doublenumber = (number: number): number => number * 2
var doublenumber = function (num) { return num * 2; };
// collback関数に型をつける
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(num * 2);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
var unknownInput;
var anyInput;
var text;
// textに入らない
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
text = unknownInput;
// any型だと入る
// anyInput = 'hello'
// anyInput = 21
// anyInput = true
// text = anyInput
if (typeof unknownInput === 'string') {
    unknownInput;
}
// nerver型
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error'));
