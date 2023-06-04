// type Engineer = {
//   name: string,
//   role: string
// }

// type Blogger = {
//   name: string,
//   follower: number
// }
interface Engineer {
  name: string,
  role: string,
}

interface Blogger {
  name: string,
  follower: number,
}

// type EngineerBlogger = Engineer & Blogger
interface EngineerBlogger extends Engineer, Blogger {}

const quill: EngineerBlogger = {
  name: 'Quill',
  role: 'front-end',
  follower: 1000
}

// stringかつnumberは存在しないのでnerverになる
// type tmp = string & number

type NumberBoolean = number | boolean
type Stringnumber = string | number
type Mix = NumberBoolean & Stringnumber

// 関数オーバーロード 上から順に適応
function toUpperCase(x: string): string
function toUpperCase(x: number): number
// 関数のオーバーロードをした場合下記部分は認識しなくなる
// typeガード
function toUpperCase(x: string | number): string | number {
  if (typeof x === 'string') {
    return x.toUpperCase()
  } else {
    return x
  }
}

// 関数オーバーロード
// const upperHello = toUpperCase('hello')
// const upperHello = toUpperCase
interface TmpFunc {
  (x: string): number
  (x: number): number
}
const upperHello: TmpFunc = function (x: string | number) { return 0 }

// interface FuncA {
//   (a: number, b: string): number
//   (a: string, b: number): number
// }
// interface FuncB {
//   (a: string): number
// }

// // オーバーロードされる順番が変わる
// let intersectinoFunc: FuncA & FuncB
// // let intersectinoFunc: FuncB & FuncA
// intersectinoFunc = function(a: number | string, b?: number | string) { return 0 }
interface FuncA {
  (a: number, b: string): number
}
interface FuncB {
  (a: string): string
}

let unionFunc: FuncA | FuncB
// ユニオン型だとどちらも入れれなくなる
unionFunc = function(a: string) { return 'hi'}
unionFunc()

type NomadWorker = Engineer | Blogger
function desribeProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name)
  if ('role' in nomadWorker) {
    console.log(nomadWorker.role)
  }
  if ('follower' in nomadWorker) {
    console.log(nomadWorker.follower)
  }
}

class Dog {
  kind: 'dog' = 'dog'
  speak() {
    console.log('bow-wow')
  }
}
class Bird {
  kind: 'bird' = 'bird'
  speak() {
    console.log('tweet-tweet')
  }
  fly() {
    console.log('flutter')
  }
}
type Pet = Dog | Bird
function havePet(pet: Pet) {
  pet.speak()
  switch (pet.kind) {
    case 'bird':
      pet.fly()
  }
  if (pet instanceof Bird) {
    pet.fly()
  }
}
havePet(new Bird())
// これではNG
// havePet({ speak() { console.log('hello') }, fly() { console.log('not bird') }})

// HTMLElementは抽象的
// 型アサーション
// jsxを使用している時はinput2のパターン
const input1 = <HTMLInputElement>document.getElementById('input')
const input2 = document.getElementById('input') as HTMLInputElement
input1.value = 'initial inpu value'
input2.value = 'initial inpu value'

// (<HTMLInputElement>document.getElementById('input')).value = 'initial inpu value'

// non-null assertion
const input3 = document.getElementById('input')!

interface Designer {
  name: string
  // インデックスシグネチャを使うと他の型もインデックスシグネチャで指定した型にしないといけない
  [index: string]: string
}
const designer: Designer = {
  name: 'Quill',
  role: 'web'
}
// 設定していないものも見れるようになってしまう
// console.log(designer.role)

interface DownloadeData {
  id: number,
  user?: {
    name?: {
      first: string,
      lase: string,
    }
  }
}
const downloadedData: DownloadeData = {
  id: 1
}
// optional chaining undefindが返る
console.log(downloadedData.user?.name?.first)
const userData = downloadedData.user ?? 'no-user'

type id = DownloadeData["id" | "user"]

// enumとnumberは互換性がある enum同士は互換性がない
enum Color {
  RED,
  BLUE
}

class AdvancedPerson {
  name: string = 'Peter'
  // NG
  // private age: number = 35
  age: number = 35
}
class AdvancedCar {
  name: string = 'Prius'
  age: number = 5
}

let target = new AdvancedPerson()
let source = new AdvancedCar()
target = source

// let target = function(a: string, b: string) {}
// let source = function(a: string) {}
// target = source
// target('hi', 'hello')

// OK
// let target = 100
// let source= Color.RED
// target = source

// OK
// let target = 'hello'
// let source: 'hello' = 'hello'
// target = source

// NG
// let target2: 'hello' = 'hello'
// let source2: string = 'hellohello'
// target2 = source2

