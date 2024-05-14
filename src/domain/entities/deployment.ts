import { Account } from "./account"
import { Template } from "./template"

export type Deployment = {
    id: string
    date: Date
    template: Template
    account: Account
    status: number
}
