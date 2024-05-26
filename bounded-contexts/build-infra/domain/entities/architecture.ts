import { ArchitectureStatus } from "../enums/architecture.status.enum"
import { BaseResource } from "./base.resource"
import { ProvidersEnum } from "../enums/providers.enum"
import { Ec2AwsResource, S3AwsResource } from "./aws-resources"

export class Architecture {
    private readonly id?: number
    private readonly status: ArchitectureStatus
    private readonly provider: ProvidersEnum
    private readonly description: string
    readonly name: string
    private resources: BaseResource[]

    constructor(status: ArchitectureStatus, provider: ProvidersEnum, description: string, name: string, resources: BaseResource[], id?: number){
        this.id = id
        this.provider = provider
        this.status = status
        this.description = description
        this.name = name
        this.resources = resources
    } 

    getInfos(): {id: number | undefined, status: ArchitectureStatus, provider: ProvidersEnum, description: string, name: string} {
        return {id: this.id, status: this.status, provider: this.provider, description: this.description, name: this.name}
    }

    getAllResources(): BaseResource[]{
        return this.resources
    }

    addResource(resource: BaseResource | BaseResource[]): void {
        if (Array.isArray(resource)) resource.map((resource) => this.resources.push(resource))
        else this.resources.push(resource)    
    }

    removeResource(resource: BaseResource | BaseResource[]): void {
        if (Array.isArray(resource)) {
            resource.map((resource) => {
                this.resources = this.resources.filter(res => res !== resource)
            })
        } else {
            this.resources = this.resources.filter(res => res !== resource)
        }  
    }

}

//const archi = new Architecture(ArchitectureStatus.FREE_TIERS, ProvidersEnum.AWS, "dee", "aa", [res1, res2, res3, res4], 3)
