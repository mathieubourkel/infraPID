import { Account } from "./account"
import { CreditCard } from "./credit-card"

export type Transaction = {
    date: Date
    sender: Account
    creditCard: CreditCard
    amount: number
}