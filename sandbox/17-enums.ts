enum ResourceType {
  BOOK, // index 0
  AUTHOR,
  FILM,
  PERSON
}

interface Resource<T> {
  uid: number
  type: ResourceType
  data: T
}

const docOne: Resource<object> = {
  uid: 1,
  type: ResourceType.BOOK, // when console.log(), will print 0
  data: { name: 'game of thrones' }
}

const docTwo: Resource<object> = {
  uid: 2,
  type: ResourceType.PERSON,
  data: { name: 'yoshi' }
}
