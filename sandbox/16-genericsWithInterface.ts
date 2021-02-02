// data will be whatever type T we pass in when we implement this interface
interface Resource<T> {
  uid: number
  resourceName: string
  data: T
}

const docOne: Resource<string> = {
  uid: 1,
  resourceName: 'person',
  data: 'hello'
}

const docTwo: Resource<object> = {
  uid: 2,
  resourceName: 'movie',
  data: { name: 'Shawshank' }
}

const docThree: Resource<string[]> = {
  uid: 3,
  resourceName: 'list',
  data: ['bread', 'milk']
}
