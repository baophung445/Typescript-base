/* ===================== EXPLICIT TYPES =============== */
// EXPLICIT TYPES
let character: string
let age: number
let isLoggedIn: boolean

// age = 'luigi'
age = 30

// isLoggedIn = 23
isLoggedIn = true

// ARRAYS
let ninjas: string[] = []

// ninjas = ['yoshi', 'mario']
ninjas.push('abc')

// UNION TYPES
let mixed: (string | number | boolean)[] = []
// mixed = ['hello', 'goodbye']
mixed.push('hello')
mixed.push(3)
mixed.push(false)
console.log(mixed)

let uid: string | number
uid = '123'
uid = 123

let medium: 'book' | 'movie'
// medium = 'song'
medium = 'book'

// OBJECTS
let ninjaOne: object
ninjaOne = { name: 'yoshi', age: 30 }
ninjaOne = []

let ninjaTwo: {
  name: string
  age: number
  beltColour: string
}

ninjaTwo = {
  name: 'mario',
  age: 20,
  beltColour: 'black'
}
