// U extends keyof T Tオブジェクトのユニオン型
function copy<T extends { name: string }, U extends keyof T>(value: T, key: U): T {
  value[key]
  return value
}

console.log(copy({ name: 'hello', age: 38 }, 'age'))

// type K = keyof { name: string, age: number }