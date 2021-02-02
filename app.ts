/* ======= INTERFACES ========== */
interface IsPerson {
  name: string
  age: number
  speak(a: string): void
  spend(a: number): number
}

const me: IsPerson = {
  name: 'henry',
  age: 30,
  speak(text: string): void {
    console.log(text)
  },
  spend(amount: number): number {
    console.log(`I spent ${amount}`)
    return amount
  }
}

const greetPerson = (person: IsPerson): void => {
  console.log('hello ', person.name)
}

greetPerson(me)

console.log(me)

/* ==== MODULE IMPORTING ========= */

import { Invoice } from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js'
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

/* ============ THE DOM & TYPE CASTING =============== */

const form = document.querySelector('.new-item-form') as HTMLFormElement // grabbing by class, TS doesn't know what kind of HTML element it is
// console.log(form.children)

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// list template instance
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  let values: [string, string, number]
  values = [tofrom.value, details.value, amount.valueAsNumber]

  /* ==== INTERFACES WITH CLASSES */

  let doc: HasFormatter

  doc =
    type.value === 'invoice'
      ? new Invoice(...values)
      : // : new Payment(tofrom.value, details.value, amount.valueAsNumber)
        new Payment(...values)

  // console.log(doc)

  list.render(doc, type.value, 'end')
})

/* ====== OBJECT ORIENTED =========== */

// let docOne: HasFormatter
// let docTwo: HasFormatter

// docOne = new Invoice('yoshi', 'web work', 250)
// docTwo = new Payment('mario', 'plumbing work', 200)

// let docs: HasFormatter[] = []
// docs.push(docOne)
// docs.push(docTwo)

// console.log(docs)

// const invoiceOne = new Invoice('mario', 'work on the mario website', 250)
// const invoiceTwo = new Invoice('luigi', 'work on the luigi website', 300)
// // console.log(invoiceOne, invoiceTwo)

// let invoices: Invoice[] = []
// invoices.push(invoiceOne)
// invoices.push(invoiceTwo)

// // invoiceOne.client = 'yoshi'
// // invoiceTwo.amount = 400

// invoices.forEach(invoice => {
//   console.log(invoice.client, invoice.amount, invoice.format())
// })

/* ======== PUBLIC, PRIVATE & READONLY ============= */

/* ========= GENERICS ============ */

// const addUID = <T extends { name: string }>(someObj: T) => {
//   let uid = Math.floor(Math.random() * 100)
//   return {
//     ...someObj,
//     uid
//   }
// }

// let docOne = addUID({ name: 'yoshi', age: 40 })
// // let docTwo = addUID('hello')

// console.log(docOne.name)

// interface Resource<T> {
//   uid: number
//   resourceName: string
//   data: T
// }

// const docThree: Resource<string> = {
//   uid: 1,
//   resourceName: 'person',
//   data: 'shaun'
// }

// const docFour: Resource<object> = {
//   uid: 1,
//   resourceName: 'person',
//   data: { name: 'henry' }
// }

// const docFive: Resource<string[]> = {
//   uid: 2,
//   resourceName: 'shopping list',
//   data: ['bread', 'milk']
// }

// console.log(docThree, docFour, docFive)

/* ========= ENUMS ========== */

// enum ResourceType {
//   BOOK,
//   AUTHOR,
//   FILM,
//   DIRECTOR,
//   PERSON
// }

// interface Resource<T> {
//   uid: number
//   resourceType: ResourceType
//   data: T
// }

// const docOne: Resource<object> = {
//   uid: 1,
//   resourceType: ResourceType.BOOK,
//   data: { title: 'name of the wind' }
// }

// const docTwo: Resource<object> = {
//   uid: 10,
//   resourceType: ResourceType.PERSON,
//   data: { name: 'yoshi' }
// }

// console.log(docOne, docTwo)

/* ========= TUPLES =========== */
let arr = ['ryu', 25, true]
arr[0] = false
arr[1] = 'yoshi'
arr = [30, false, 'yoshi']

let myTuple: [string, number, boolean] = ['ryu', 25, true]
myTuple[0] = 'ken'
myTuple[1] = 30

let student: [string, number]
student = ['chun-li', 234]
