import { CloudCredStatus } from "../enums/cloud-cred-status.enum"
import { User } from "./user"

export class CloudCred {
    private readonly id?:number
    private email: string
    private password: string
    private key:string
    private readonly owner: User
    private status: CloudCredStatus

    constructor(email: string, password: string, key: string, owner:User, status:CloudCredStatus, id?:number){
        this.id = id
        this.email = email
        this.password = password
        this.key = key
        this.owner = owner
        this.status = status
    }
}