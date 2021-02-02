/* ================== TYPE BASICS ======== */
console.log('abc');
// let character = 'mario'
// let age = 30
// let isBlackBelt = false
// // character = 20
// character = 'luigi'
// // age = 'abc'
// age = 40
// // isBlackBelt = 'yes'
// isBlackBelt = true
// const circ = (diameter: number) => {
//   return diameter * Math.PI
// }
// console.log(circ(7.5))
/* ============== ARRAY AND OBJECTS =============== */
// ARRAY
// let names = ['luigi', 'mario', 'yoshi']
// names.push('toad')
// // names.push(4)
// // names[0] = 4
// let numbers = [10, 20, 30, 40]
// numbers.push(50)
// // numbers.push('henry')
// // numbers[1] = 'henry'
// let mixed = ['ken', 4, 'chun', 8, 9, true]
// mixed.push('ryu')
// mixed.push(10)
// mixed[0] = 3
// // OBJECT
// let ninja = {
//   name: 'mario',
//   belt: 'black',
//   age: 30
// }
// ninja.age = 40
// ninja.name = 'ryu'
// // ninja.age = '30'
// // ninja.skills = ['fighting', 'sneaking']
// ninja = {
//   name: 'yoshi',
//   belt: 'orange',
//   age: 40,
//   // skills: []
// }
/* ===================== EXPLICIT TYPES =============== */
// EXPLICIT TYPES
// let character: string
// let age: number
// let isLoggedIn: boolean
// // age = 'luigi'
// age = 30
// // isLoggedIn = 23
// isLoggedIn = true
// // ARRAYS
// let ninjas: string[] = []
// // ninjas = ['yoshi', 'mario']
// ninjas.push('abc')
// // UNION TYPES
// let mixed: (string | number | boolean)[] = []
// // mixed = ['hello', 'goodbye']
// mixed.push('hello')
// mixed.push(3)
// mixed.push(false)
// console.log(mixed)
// let uid: string | number
// uid = '123'
// uid = 123
// // OBJECTS
// let ninjaOne: object
// ninjaOne = { name: 'yoshi', age: 30 }
// ninjaOne = []
// let ninjaTwo: {
//   name: string
//   age: number
//   beltColour: string
// }
// ninjaTwo = {
//   name: 'mario',
//   age: 20,
//   beltColour: 'black'
// }
/* =================== DYNAMIC (ANY) TYPES ==================== */
// let age: any = 25
// age = true
// console.log(age)
// age = 'hello'
// console.log(age)
// age = { name: 'luigi' }
// console.log(age)
// let mixed: any[] = []
// mixed.push(5)
// mixed.push('mario')
// mixed.push(false)
// console.log(mixed)
// let ninja: { name: any; age: any }
// ninja = { name: 25, age: 'yoshi' }
// console.log(ninja)
/* ============== BETTER WORKFLOW & TSCONFIG =============== */
// console.log('test')
/* ============= FUNCTION BASICS & VOID =========== */
// let greet: Function
// // greet = 'hello'
// greet = () => {
//   console.log('hello world')
// }
// const add = (a: number, b: number, c?: number | string) => {
//   console.log('start add')
//   console.log(a + b)
//   console.log(c)
// }
// add(5, 10)
// add(5, 10, 2)
// // add(5, '10')
// const addDefault = (a: number, b: number, c: number | string = 10) => {
//   console.log('start addDefault')
//   console.log(a + b)
//   console.log(c)
// }
// addDefault(2, 3)
// addDefault(2, 3, '60')
// const minus = (a: number, b: number): number => a - b
// let resultMinus = minus(10, 7)
// // result = 'something'
/* ======================= TYPE ALIASES ================ */
// type StringOrNumber = string | number
// type objWithName = { name: string; uid: StringOrNumber }
// const logDetails = (uid: StringOrNumber, item: string) => {
//   console.log(`${item} has a uid of ${uid}`)
// }
// const greet = (user: objWithName) => {
//   console.log(`${user.name} says hello`)
// }
/* ============================ FUNCTION SIGNATURES =============== */
// let greet: Function
// Example 1
// let greet: (a: string, b: string) => void
// greet = (name: string, greeting: string) => {
//   console.log(`${name} says ${greeting}`)
// }
// // Example 2
// let calculation: (a: number, b: number, c: string) => number
// calculation = (numOne: number, numTwo: number, action: string) =>
//   action === 'add' ? numOne + numTwo : numOne - numTwo
// // Example 3
// let logDetails: (someObj: { name: string; age: number }) => void
// type person = { name: string; age: number }
// logDetails = (ninja: person) => {
//   console.log(`${ninja.name} is ${ninja.age} years old`)
// }
// const henry = {
//   name: 'henry',
//   age: 30
// }
// logDetails(henry)
/* ========= THE DOM & TYPE CASTING =========== */
