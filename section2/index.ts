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
console.log(person.gender)

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
