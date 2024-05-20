import { TransactionStatus } from "../enums/transaction-status.enum"
import { CreditCard } from "./credit-card"
import { User } from "./user"

export class Transaction {
    private readonly id?: number
    private readonly date: Date
    private readonly owner: User
    private readonly creditCard: CreditCard
    private readonly amount: number
    private readonly devise: string
    readonly status: TransactionStatus

    constructor( date: Date, owner: User, creditCard: CreditCard, amount: number, devise: string, status: TransactionStatus, id?: number,){
        this.id = id
        this.date = date
        this.owner = owner
        this.creditCard = creditCard
        this.amount = amount
        this.devise = devise
        this.status = status
    }
}