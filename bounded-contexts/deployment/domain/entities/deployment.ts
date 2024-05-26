
import { User } from "../../../authent/domain/entities/user"
import { DeploymentStatus } from "../enums/deployment-status.enum"

export class Deployment {
    private readonly id?: number
    private readonly date: Date
    private readonly template: string
    private readonly user: User
    private status: DeploymentStatus

    constructor(date: Date, template: string, user: User, status:DeploymentStatus, id?:number){
        this.id = id
        this.date = date
        this.template = template
        this.user = user
        this.status = status
    }
}
