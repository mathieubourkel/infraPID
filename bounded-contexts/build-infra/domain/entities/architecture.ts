import { ArchitectureStatus } from "../enums/architecture.status.enum"
import { ProvidersEnum } from "../enums/providers.enum"
import { ResourceEnum } from "../enums/resources.enum"
import { IResource, IResources } from "../interfaces/resource-attributes.interface"
import { Resource } from "./resource"

export class Architecture {
    private readonly id?: number
    private readonly status: ArchitectureStatus
    private readonly provider: ProvidersEnum
    private readonly description: string
    readonly name: string
    private resources: IResources

    constructor(status: ArchitectureStatus, provider: ProvidersEnum, description: string, name: string, resources: IResources, id?: number){
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

    getAllResources(): IResources{
        return this.resources
    }

    addResource(resource: IResource | IResources): void {
        if (Array.isArray(resource)) resource.map((resource) => this.resources.push(resource))
        else this.resources.push(resource)    
    }

    removeResource(resource: IResource | IResources): void {
        if (Array.isArray(resource)) {
            resource.map((resource: IResource) => {
                this.resources = this.resources.filter(res => res !== resource)
            })
        } else {
            this.resources = this.resources.filter(res => res !== resource)
        }  
    }

}
// const res1 = new Resource(ResourceEnum.AWS_S3, {bucket: "aa", acl: "vf"})
// const archi = new Architecture(ArchitectureStatus.FREE_TIERS, ProvidersEnum.AWS, "dee", "aa", [res1], 3)
