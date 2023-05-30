// type Engineer = {
//   name: string,
//   role: string
// }

// type Blogger = {
//   name: string,
//   follower: number
// }
interface Engineer {
  kibd: 'engineer',
  name: string,
  role: string,
}

interface Blogger {
  kibd: 'blogger',
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

// typeガード
function toUpperCase(x: string | number) {
  if (typeof x === 'string') {
    return x.toUpperCase()
  } else {
    return ''
  }
}

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

