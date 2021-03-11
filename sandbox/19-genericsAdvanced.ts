type arr = Array<string>
type numArray = Array<number>
type strArray = Array<string>

// === arr: number[]
const last = (arr: Array<number>) => arr[arr.length - 1]

const l = last([1, 2, 3])
const l2 = last(['a', 'b', 'c']) // Error because arr is an array of number

// You can fix by change Array<any>, but then l and l2 has type any. We want it to know if the last value is number or string

// I don't know the type in advance, please capture it
// === arr: T[]
const lastT = <T>(arr: Array<T>) => arr[arr.length - 1]

const l3 = lastT([1, 2, 3]) // now l3 has type number
const l4 = lastT(['a', 'b', 'c']) // l4 has type string
const l5 = lastT<string>(['d', 'e', 'f']) // you can explicitly specify what the data type is

const makeArr = (x: number) => [x]

const v = makeArr(5)
const v2 = makeArr('a') // fail

// you can explicitly say it returns an array of T

const makeArrT = <T>(x: T): [T] => [x]

const v3 = makeArrT('b')

// multiple

const makeArrTY = <T, Y>(x: T, y: Y) => [x, y]

const v4 = makeArrTY(5, 6)
const v5 = makeArrTY('a', 'b')
const v6 = makeArrTY(5, 'b')

// The mixed array above actually looks like a tuple, so we can do

// const makeArrTY = <T, Y>(x: T, y: Y) => [x, y] as const.
// OR:
const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y]

const v7 = makeTuple('a', 5)
const v8 = makeTuple('a', 'b')
const v9 = makeTuple<number, string>(5, 'b') // you can explicitly declare in advance to make it check values in params if they match specification
const v10 = makeTuple<string | null, number>(null, 5)

// What if explicitly, but you only specify one generic type
const v11 = makeTuple<string | null>('a', 6) // error, expect 2 arguments

// then you can specify default generic type, just like default variable
const makeTupleWithDefault = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y]

const v12 = makeTupleWithDefault<string | null>('a', 6) // error, expect 2 arguments

// ============= EXTENDS (constraints on what can be passed to the param in a function)

const makeFullName = obj => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`
})

// if you want to make some constraints to make obj have these two properties, you can hover over the function to see it's better

const makeFullNameConstraint1 = (obj: {
  firstName: string
  lastName: string
}) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`
})

const n1 = makeFullNameConstraint1({ firstName: 'Henry', lastName: 'Nguyen' })

// but what if we want to pass in an object with not only those two properties, but also some more, like age: 30
const n2 = makeFullNameConstraint1({
  firstName: 'Henry',
  lastName: 'Nguyen',
  age: 30
}) // error

// We can have constraint, but now it's gonna be "at least two properties: firstName and lastName"

const makeFullNameConstraint2 = <
  T extends { firstName: string; lastName: string }
>(
  obj: T
) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`
})

const n3 = makeFullNameConstraint2({
  firstName: 'Henry',
  lastName: 'Nguyen',
  age: 30
}) // hover over n3!!!

// ============== INTERFACE

interface Tab<T> {
  id: string
  position: number
  data: T
}

type NumberTab = Tab<number>

// the one above equals to

type NumberTab2 = {
  id: string
  position: number
  data: number
}

type StringTab = Tab<string>
