const addUID = (someObj: object) => {
  let uid = Math.floor(Math.random() * 100)
  return {
    ...someObj,
    uid
  }
}

let docOne = addUID({ name: 'yoshi', age: 40 })
console.log(docOne) // all good

// console.log(docOne.name) // it doesn't know if it has a `name` property. The function doesn't capture that.

// So...
// T is by convention. T captures what ever item passed in. extends to force it to be object
const addUIDCapture = <T extends object>(someObj: T) => {
  let uid = Math.floor(Math.random() * 100)
  return {
    ...someObj,
    uid
  }
}

let docTwo = addUIDCapture({ name: 'yoshi', age: 40 })
// let docThree = addUIDCapture('hello') // fail because not an object, it would work without 'extends object'

console.log(docTwo) // all goodbye
console.log(docTwo.name) // now it's good

// Even better
const addUIDCaptureForceObjectProperties = <T extends { name: string }>(
  someObj: T
) => {
  let uid = Math.floor(Math.random() * 100)
  return {
    ...someObj,
    uid
  }
}

// const docFour = addUIDCaptureForceObjectProperties({ age: 20 }) // fail because must have property name
