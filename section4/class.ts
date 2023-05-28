class Person {

  // protectedは継承先でも使えるがそのほかでは使えない
  constructor(public readonly name: string, protected age: number) {
  }

  incrementAge() {
    this.age += 1
  }
  greeting(this: Person) {
    console.log(`Hello±! My name is ${this.name}、 I am ${this.age} yeras old`)
  }
}

class Teacher extends Person {
  // 継承元に何か付け加えるなら必要
  constructor(name: string, age: number, public subject: string) {
    super(name, age)
  }
  greeting() {
    console.log(`Hello±! My name is ${this.name}、 I am ${this.age} yeras old. I teach ${this.subject}`)
  }
}
const teacher = new Teacher('Quill', 38, 'Math')
teacher.greeting()