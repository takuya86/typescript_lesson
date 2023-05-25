let globalHello = 'hello'
function echo(message: string): string | null {
  if (message) {
    return message
  }
}

let implicitAny
implicitAny = 'implicitAny'

let nulllabelMssage = echo('hi')
let undefinedableMessage: string | undefined = undefined
let onlyNull: null = null
let onlyUndefined: undefined = undefined

if (nulllabelMssage) {
  nulllabelMssage.toUpperCase()
}

echo.call(null, 'hi')