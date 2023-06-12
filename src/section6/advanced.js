"use strict";
// type Engineer = {
//   name: string,
//   role: string
// }
var _a, _b, _c;
const quill = {
    name: 'Quill',
    role: 'front-end',
    follower: 1000
};
// 関数のオーバーロードをした場合下記部分は認識しなくなる
// typeガード
function toUpperCase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    else {
        return x;
    }
}
const upperHello = function (x) { return 0; };
let unionFunc;
// ユニオン型だとどちらも入れれなくなる
unionFunc = function (a) { return 'hi'; };
function desribeProfile(nomadWorker) {
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ('follower' in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
class Dog {
    constructor() {
        this.kind = 'dog';
    }
    speak() {
        console.log('bow-wow');
    }
}
class Bird {
    constructor() {
        this.kind = 'bird';
    }
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}
function havePet(pet) {
    pet.speak();
    switch (pet.kind) {
        case 'bird':
            pet.fly();
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());
// これではNG
// havePet({ speak() { console.log('hello') }, fly() { console.log('not bird') }})
// HTMLElementは抽象的
// 型アサーション
// jsxを使用している時はinput2のパターン
const input1 = document.getElementById('input');
const input2 = document.getElementById('input');
input1.value = 'initial inpu value';
input2.value = 'initial inpu value';
// (<HTMLInputElement>document.getElementById('input')).value = 'initial inpu value'
// non-null assertion
const input3 = document.getElementById('input');
const designer = {
    name: 'Quill',
    role: 'web'
};
const downloadedData = {
    id: 1
};
// optional chaining undefindが返る
console.log((_b = (_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
const userData = (_c = downloadedData.user) !== null && _c !== void 0 ? _c : 'no-user';
// enumとnumberは互換性がある enum同士は互換性がない
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLUE"] = 1] = "BLUE";
})(Color || (Color = {}));
class AdvancedPerson {
    constructor() {
        this.name = 'Peter';
        // NG
        // private age: number = 35
        this.age = 35;
    }
}
class AdvancedCar {
    constructor() {
        this.name = 'Prius';
        this.age = 5;
    }
}
let target = new AdvancedPerson();
let source = new AdvancedCar();
target = source;
// let target = function(a: string, b: string) {}
// let source = function(a: string) {}
// target = source
// target('hi', 'hello')
// OK
// let target = 100
// let source= Color.RED
// target = source
// OK
// let target = 'hello'
// let source: 'hello' = 'hello'
// target = source
// NG
// let target2: 'hello' = 'hello'
// let source2: string = 'hellohello'
// target2 = source2
// レストパラメーターにタプル型
// function advancedFn(...args: readonly [number, string, boolean?, ...number[]]) {
// }
function advancedFn(...args) {
}
advancedFn(0, 1);
const milk = 'milk';
let drink = milk;
const array = [10, 20];
const perter = {
    name: 'Perter',
    age: 38
};
