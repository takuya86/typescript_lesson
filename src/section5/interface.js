"use strict";
let addFunc;
addFunc = (n1, n2) => {
    return n1 + n2;
};
const nameable = {
    name: 'Quill',
    nickName: 'Quilla'
};
const human = {
    name: 'Quill',
    age: 38,
    greeting(message = 'hell') {
        console.log(message);
    }
};
class Developer {
    // constructor(public name: string, public age: number, public experience: number) {}
    // name?: string
    // 必須なパラメーターから書く
    // constructor(public age: number, public experience: number, initName?: string) {
    constructor(age, experience, name) {
        this.age = age;
        this.experience = experience;
        // if (initName) {
        //   this.name = initName
        // }
    }
    greeting(message) {
        console.log('Hello');
    }
}
// 変数にしたらexperienceを指定できる
const tmpDeveloper = {
    name: 'Quill',
    age: 38,
    experience: 3,
    greeting(message) {
        console.log(message);
    }
};
// Humanにはexperienceがないが指定することができる
// const user: Human = new Developer('Quill', 38, 3)
const user = tmpDeveloper;
