// U extends keyof T Tオブジェクトのユニオン型
function copy<T extends { name: string }, U extends keyof T>(value: T, key: U): T {
  value[key]
  return value
}

console.log(copy({ name: 'hello', age: 38 }, 'age'))

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
class LightDatabase<T extends string | number | boolean> {
  private data: T[] =[]
  add(item: T) {
    this.data.push(item)
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1)
  }
  get() {
    return this.data
  }
}

const stringLightDatabase = new LightDatabase<string>()
stringLightDatabase.add('Apple')
stringLightDatabase.add('Banana')
stringLightDatabase.add('Grape')
console.log(stringLightDatabase.get())

interface Todo {
  title: string
  text: string
}
// ユーティリティ型
type Todoable = Partial<Todo>
type ReadTodo = Readonly<Todo>

const featchData: Promise<string> = new Promise(resolve => {
  setTimeout(() => {
    resolve('hello')
  }, 3000)
})
featchData.then(data => {
  data
})

const cegetables: Array<string> = ['Tomato', 'Broccoli', 'Asparagus']

interface ResponseDAta<T extends { message: string } = any> {
  data: T
  status: number
}
let Genericstmp2: ResponseDAta
interface Vegetables {
  tomato: string
  pumpkin: string
}
let Genericstmp3: keyof Vegetables
type MappedTypes = {
  // [P in 'tomato' | 'pumpkin']: P
  // -readonlyはreadonlyが消える
  -readonly [P in keyof Vegetables]-?: string
}

// tomato方がstringに代入できるのであればnumber そうではなければboolean
type ConditionalTypes = 'tomato' extends string ? number : boolean

// inferはanyのようなもの
type ConditionalTypesInfer = { tomato: 'tomato' } extends { tomato: infer R } ? R : boolean
// ユニオン型になっているとき、どちらも判定して型推論する
// type DistributiveConstionalTypes = ('tomato' | 'pumpkin') extends 'tomato' ? number : boolean
type DistributiveConstionalTypes<T> = T extends 'tomato' ? number : boolean
let Genericstmp4: DistributiveConstionalTypes<'tomato' | 'pumpkin'>
let Genericstmp5: NonNullable<string | null>