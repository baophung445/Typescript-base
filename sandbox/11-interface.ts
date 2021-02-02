interface IsPerson {
  name: string
  age: number
  speak(lang: string): void
  spend(amt: number): number
}

// me is of interface IsPerson
const me: IsPerson = {
  name: 'shaun',
  age: 30,
  speak(text: string): void {
    console.log(text)
  },
  spend(amount: number): number {
    return amount * 2
  }
}

console.log(me)

// let someone: IsPerson

const greetPerson = (somePerson: IsPerson) => {
  console.log(`hello ${somePerson.name}`)
}

greetPerson(me)
