import { TemplateStatus } from "../enums/template-status.enum"
import { User } from "./user"

export class Template {
    private readonly id?:number
    private command: string
    private name: string
    private description: string
    private status: TemplateStatus
    private price: number
    private owner: User
    private users: User[]

    constructor(command: string, name: string, description : string, status: TemplateStatus, price: number, owner: User, users: User[], id?: number){
        this.id = id
        this.command = command
        this.name = name
        this.description = description
        this.status = status
        this.price = price
        this.owner = owner
        this.users = users
    }
}