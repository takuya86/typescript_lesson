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

console.log(stringLightDatabase)