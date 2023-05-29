// abstractクラスはインスタンスを生成できない
abstract class Person {
  static species = 'Homo sapiens'
  static isAdult(age: number) {
    if (age> 17) return true
    return false
  }

  // protectedは継承先でも使えるがそのほかでは使えない
  constructor(public readonly name: string, protected age: number) {
  }

  incrementAge() {
    this.age += 1
  }
  greeting(this: Person) {
    console.log(`Hello±! My name is ${this.name}、 I am ${this.age} yeras old`)
    this.explainJob()
  }
  abstract explainJob(): void
}

// extendsでPersonを継承している
class Teacher extends Person {
  private static instance: Teacher
  explainJob() {
    console.log('I am teacer and I teach')
  }
  get subject(): string {
    if (!this._subject) {
      throw new Error('There is no subject.')
    }
    return 'Music'
  }
  set subject(value) {
    if (!value) {
      throw new Error('There is no subject.')
    }
    this._subject = value
  }
  // 継承元に何か付け加えるなら必要
  private constructor(name: string, age: number, private _subject: string) {
    super(name, age)
  }
  greeting() {
    console.log(`Hello±! My name is ${this.name}、 I am ${this.age} yeras old. I teach ${this.subject}`)
  }
  //constructorにprivateをつけたので作成できない privateクラス内であれば生成できる
  static getInstance() {
    if (Teacher.instance) return Teacher.instance
    Teacher.instance = new Teacher('Quill', 38, 'Math')
    return Teacher.instance
  }
}

//constructorにprivateをつけたので作成できない privateクラス内であれば生成できる
// const teacher = new Teacher('Quill', 38, 'Math')
// teacher.greeting()