/* ============================ FUNCTION SIGNATURES =============== */
let greet: Function

// Example 1
let greet: (a: string, b: string) => void

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`)
}

// Example 2
let calculation: (a: number, b: number, c: string) => number

calculation = (numOne: number, numTwo: number, action: string) =>
  action === 'add' ? numOne + numTwo : numOne - numTwo

// Example 3
let logDetails: (someObj: { name: string; age: number }) => void

type Person = { name: string; age: number }

logDetails = (ninja: Person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`)
}

const henry = {
  name: 'henry',
  age: 30
}

logDetails(henry)
