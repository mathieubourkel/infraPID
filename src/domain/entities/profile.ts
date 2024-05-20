import { User } from "./user"

export class Profile {
    private readonly id?:number
    private readonly user: User
    private firstname: string
    private lastname: string
    private birthdayDate : Date
    private address: string
    private zip: string
    private country: string
    private phone: string

    constructor(user: User, firstname: string, lastname: string, birthdatDate: Date, address: string, zip: string, country: string, phone:string, id?:number){
        this.id = id
        this.user = user
        this.firstname = firstname
        this.lastname = lastname
        this.birthdayDate = birthdatDate
        this.address = address
        this.zip = zip
        this.country = country
        this.phone = phone
    }
}