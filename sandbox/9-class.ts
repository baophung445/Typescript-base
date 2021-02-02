export class Invoice {
  // Cach 1

  // readonly client: string // accessible but cannot change
  // private details: string // cannot be accessed new Invoice().details, outside of this class
  // amount: number // default - equal to public amount: number

  // constructor(c: string, d: string, a: number) {
  //   this.client = c
  //   this.details = d
  //   this.amount = a
  // }

  // Cach 2

  constructor(
    // automatically assign parameters to properties
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes ${this.amount} dollar(s) for ${this.details}`
  }
}
