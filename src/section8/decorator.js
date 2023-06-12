"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logging(message) {
    return function Logging(constructor) {
        console.log(message);
        console.log(constructor);
    };
}
function Componet(template, selector) {
    // newができるコンストラクタ関数 constructorに new(): Objectを指定する newは予約語
    return function (constructor) {
        const mountedElement = document.querySelector(selector);
        const instance = new constructor();
        if (mountedElement) {
            mountedElement.innerHTML = template;
            mountedElement.querySelector('h1').textContent = instance.name;
        }
    };
}
// 色々なclassを取りたい
// Functionは内蔵されているコンストラクタ関数
// function Logging(constructor: Function) {
//   console.log('Logging...')
//   console.log(constructor)
// }
let User = class User {
    constructor() {
        this.name = 'Quill';
        console.log('User was created!');
    }
};
User = __decorate([
    Componet('<h1.{{ name }} </h1>', '#app')
    // class定義時に実行されている
    ,
    Logging('Logging User')
], User);
const user1 = new User();
const user2 = new User();
const user3 = new User();
