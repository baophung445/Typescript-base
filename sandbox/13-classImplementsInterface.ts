import { HasFormatter } from './12-interfaceWithClass.js'

export class Invoice implements HasFormatter {
  constructor(
    // automatically assign parameters to properties
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  // This format() function follows the structure of HasFormatter interface so it's good
  format() {
    return `${this.client} owes ${this.amount} dollar(s) for ${this.details}`
  }
}

export class Payment implements HasFormatter {
  constructor(
    // automatically assign parameters to properties
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  // This format() function follows the structure of HasFormatter interface so it's good
  format() {
    return `You owe ${this.recipient} ${this.amount} dollar(s) for ${this.details}`
  }
}
