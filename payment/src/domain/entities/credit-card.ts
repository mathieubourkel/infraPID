import { CreditCardStatus } from "../enums/credit-card-status.enum"
import { User } from "./user"

export class CreditCard {
    private readonly id?:number
    private number: number
    private name: string
    private expiryDate: string
    private readonly owner: User
    private status: CreditCardStatus

    constructor(number: number, name: string, expiryDate: string, owner: User, status: CreditCardStatus, id?:number){
        this.id = id
        this.number = number
        this.name = name
        this.expiryDate = expiryDate
        this.owner = owner
        this.status = status
    }

    get _status(){
        return this.status
    }
}