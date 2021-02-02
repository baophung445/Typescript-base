import { Invoice, Payment } from './13-classImplementsInterface.js'
import { HasFormatter } from './12-interfaceWithClass.js'

let docOne: HasFormatter
let docTwo: HasFormatter

docOne = new Invoice('yoshi', 'web work', 200) // this is ok because Invoice implements HasFormatter
docTwo = new Payment('luigi', 'road work', 400)

let docs: HasFormatter[] = [] // an array of anything implementing HasFormatter interface
docs.push(docOne)
docs.push(docTwo)
