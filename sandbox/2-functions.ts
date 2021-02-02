const circ = (diameter: number) => {
  return diameter * Math.PI
}

console.log(circ(7.5))

/* ============= FUNCTION BASICS & VOID =========== */
let greet: Function

// greet = 'hello'
greet = () => {
  console.log('hello world')
}

const add = (a: number, b: number, c?: number | string) => {
  console.log('start add')
  console.log(a + b)
  console.log(c)
}

add(5, 10)
add(5, 10, 2)
// add(5, '10')

const addDefault = (a: number, b: number, c: number | string = 10) => {
  console.log('start addDefault')
  console.log(a + b)
  console.log(c)
}

addDefault(2, 3)
addDefault(2, 3, '60')

const minus = (a: number, b: number): number => a - b
let resultMinus = minus(10, 7)
// result = 'something'
