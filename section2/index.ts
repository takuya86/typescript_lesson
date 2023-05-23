let hasVAlue = true

let count = 10
let float = 3.14
let nefative = -0.12

let single = 'hello'
let duble = "hello"
let back = `hello`

let hello: string
hello = 'hello'

const person: {
  name: string
  age: number
} = {
  name: 'Jack',
  age: 21
}
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
}

const fruits: string[] = ['Apple', 'Banana', 'Grape']
const fruits2: any[] = ['Apple', 'Banana', 'Grape']
const fruits3 = ['Apple', 'Banana', 'Grape', 1]

// Tuple型 配列の中身の型の順番が決まっている場合
const book: [string, number, boolean] = ['business', 1500, false]

enum CoffeeSize  {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}

let anything: any = true
anything = 'hello'
anything = ['hello', 33, true]
anything = {}
anything.fjiafjaj = 'fjiafjaj'

let banana = 'banana'
banana = anything

let unionType: number | string = 10
// unionType.toUppercase()
// unionType = 'hello'
// unionType.toUppercase()
let unionTypes: (number | string)[] = [10, 'hello']

type ClothSize = 'small' | 'medium' | 'large'
const apple = 'apple'

let colothSize: ClothSize = 'large'

const cloth: {
  color: string,
  size: ClothSize
} = {
  color: 'white',
  size: 'medium'
}

function add(num1: number, num2: number): number {
  return num1 + num2
}

// 何も返さない場合void returnがある場合は明示的に返すことになるのでundefinedが使用可能
function sayHello(): void {
  console.log('Hello!')
  return
}

console.log(sayHello())

// undefind型はundefinedとnullを扱う
let tmp: undefined

// どちらにつけても良い
const anotherAdd: (n1: number, n2: number) => number = function (num1: number, num2: number): number {
  return num1 + num2
}

// const doublenumber = (number: number): number => number * 2
const doublenumber: (num: number) => number  = num => num * 2