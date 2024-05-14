import { Account } from "./account"

export type Template = {
    date: Date
    name: Template
    owner: Account
    status: number
    command: string
}