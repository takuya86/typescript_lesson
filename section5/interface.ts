// type addFunc = (num1: number, num2: number) => number
interface addFunc {
  (num1: number, num2: number): number
}
let addFunc: addFunc
addFunc = (n1: number, n2: number) => {
  return n1 + n2
}

type Nameable = {
  name?: string,
  nickName?: string //?をつけると必須ではなくなる
}
const nameable: Nameable= {
  name: 'Quill',
  nickName: 'Quilla'
}
// type Nameable = {
//   name: string,
// }
// interfaceのメリットはオブジェクトのみ extendsはtypeもOK
interface Human extends Nameable {
  // name: string, // 条件もあるが上書きできる
  age: number,
  greeting(message: string): void
}

const human: Human = {
  name: 'Quill',
  age: 38,
  greeting(message: string = 'hell') {
    console.log(message)
  }
}

class Developer implements Human {
  // constructor(public name: string, public age: number, public experience: number) {}
  // name?: string
  // 必須なパラメーターから書く
  // constructor(public age: number, public experience: number, initName?: string) {
  constructor(public age: number, public experience: number, name?: string) {
    // if (initName) {
    //   this.name = initName
    // }
  }
  greeting(message: string) {
    console.log('Hello')
  }
}

// 変数にしたらexperienceを指定できる
const tmpDeveloper = {
  name: 'Quill',
  age: 38,
  experience: 3,
  greeting(message: string) {
    console.log(message)
  }
}
// Humanにはexperienceがないが指定することができる
// const user: Human = new Developer('Quill', 38, 3)
const user: Human = tmpDeveloper