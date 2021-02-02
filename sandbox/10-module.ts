import { Invoice } from './9-class.js' // at the end of the day, it's generated as js

const invoiceOne = new Invoice('mario', 'work on mario website', 200)
const invoiceTwo = new Invoice('luigi', 'work on luigi website', 400)

let invoices: Invoice[] = []
invoices.push(invoiceOne)
invoices.push(invoiceTwo)

// public property :(
console.log(invoiceOne.client) // readonly -> readable
// invoiceOne.client = 'yoshi' // but cannot change
invoiceTwo.amount = 300

invoices.forEach(invoice => {
  // details is not accessible if in class, it's private property
  // console.log(invoice.client, invoice.details, invoice.amount, invoice.format())
  console.log(invoice.client, invoice.amount, invoice.format())
})
