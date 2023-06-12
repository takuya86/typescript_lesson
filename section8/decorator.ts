function Logging(message: string) {
  console.log('Logging Factor')
  return function Logging(constructor: Function) {
    console.log(message)
    console.log(constructor)
  }
}

function Componet(template: string, selector: string) {
  // newができるコンストラクタ関数 constructorに new(): Objectを指定する newは予約語
  console.log('Componet Factor')
  // return function (constructor: { new(...age: any[]): { name: string } }) {
  return function<T extends { new(...age: any[]): { name: string } }>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args)
        const mountedElement = document.querySelector(selector)
        const instance = new constructor()
        if (mountedElement) {
          mountedElement.innerHTML = template
          mountedElement.querySelector('h1')!.textContent = instance.name
        }
      }
    }
  }
}
// 色々なclassを取りたい
// Functionは内蔵されているコンストラクタ関数
// function Logging(constructor: Function) {
//   console.log('Logging...')
//   console.log(constructor)
// }

function PropertyLoggin(target: any, propertyKey: string) {
  console.log('propertyLoging')
  console.log(target)
  console.log(propertyKey)
  // returnではなにも返せない
}

@Componet('<h1.{{ name }} </h1>', '#app')
// class定義時に実行されている
@Logging('Logging User')
class User {
  @PropertyLoggin
  name = 'Quill'
  constructor(public age: number) {
    console.log('User was created!')
  }
  greeting() {
    console.log('hello')
  }
}
const user1 = new User(32)
const user2 = new User(32)
const user3 = new User(32)