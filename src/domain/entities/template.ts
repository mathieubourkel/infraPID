import { Account } from "./account"

export type Template = {
    id:string
    date: Date
    name: string
    owner: Account
    status: number
    command: string
}