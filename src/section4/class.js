"use strict";
// abstractクラスはインスタンスを生成できない
class Person {
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    // protectedは継承先でも使えるがそのほかでは使えない
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello±! My name is ${this.name}、 I am ${this.age} yeras old`);
        this.explainJob();
    }
}
Person.species = 'Homo sapiens';
// extendsでPersonを継承している
class Teacher extends Person {
    explainJob() {
        console.log('I am teacer and I teach');
    }
    get subject() {
        if (!this._subject) {
            throw new Error('There is no subject.');
        }
        return 'Music';
    }
    set subject(value) {
        if (!value) {
            throw new Error('There is no subject.');
        }
        this._subject = value;
    }
    // 継承元に何か付け加えるなら必要
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    greeting() {
        console.log(`Hello±! My name is ${this.name}、 I am ${this.age} yeras old. I teach ${this.subject}`);
    }
    //constructorにprivateをつけたので作成できない privateクラス内であれば生成できる
    static getInstance() {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher('Quill', 38, 'Math');
        return Teacher.instance;
    }
}
//constructorにprivateをつけたので作成できない privateクラス内であれば生成できる
// const teacher = new Teacher('Quill', 38, 'Math')
// teacher.greeting()
