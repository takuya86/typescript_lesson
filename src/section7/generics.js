"use strict";
// U extends keyof T Tオブジェクトのユニオン型
function copy(value, key) {
    value[key];
    return value;
}
console.log(copy({ name: 'hello', age: 38 }, 'age'));
// type K = keyof { name: string, age: number }
// ユニオン型だと緩すぎてNG
// class LightDatabase {
//   private data: string[] | number[] | boolean[] = []
//   add(item: string | number | boolean) {
//     this.data.push(item)
//   }
//   remove(item: string | number | boolean) {
//     this.data.splice(this.data.indexOf(item), 1)
//   }
//   get() {
//     return this.data
//   }
// }
class LightDatabase {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase();
stringLightDatabase.add('Apple');
stringLightDatabase.add('Banana');
stringLightDatabase.add('Grape');
console.log(stringLightDatabase.get());
const featchData = new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 3000);
});
featchData.then(data => {
    data;
});
const cegetables = ['Tomato', 'Broccoli', 'Asparagus'];
let Genericstmp2;
let Genericstmp3;
let Genericstmp4;
let Genericstmp5;
