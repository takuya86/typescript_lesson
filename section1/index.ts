let hello2: string = 'hello'
console.log(hello)

// jsの場合 コメントに残しても合っているのか不明
// function addJs(a, b) {
//   return a + b
// }

// tsの場合何をしているか明確 ドキュメントとして使える
function addTs(a: number, b: number): number {
  return a + b
}

