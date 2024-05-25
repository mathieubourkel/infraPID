import { ArchitectureStatus } from "../enums/architecture.status.enum"
import { AwsResourceEnum } from "../enums/aws.resources.enum"
import { AwsResource, Resource } from "./resource"
import { IEC2 } from "../interfaces/aws-resources.interface"
import { ProvidersEnum } from "../enums/providers.enum"
import { IResource } from "../interfaces/resource.interface"

export class Architecture {
    private readonly id: number
    private readonly status: ArchitectureStatus
    private readonly provider: ProvidersEnum
    private readonly description: string
    private readonly name: string
    private resources: IResource[]

    constructor(status: ArchitectureStatus, provider: ProvidersEnum, description: string, name: string, resources: IResource[]){
        this.id = Math.random()
        this.provider = provider
        this.status = status
        this.description = description
        this.name = name
        this.resources = resources
    }

    getInfos(){
        return {id: this.id, status: this.status, provider: this.provider, description: this.description, name: this.name}
    }

    getAllResources(){
        return this.resources
    }

    add(resource: AwsResource<{}>){
        this.resources.push(resource)
    }

    remove(resource: AwsResource<{}>){
        this.resources.filter(res => res.name == resource.name)
    }

}

// const res3 = new AwsResource<IEC2>({imageId: "ac"}, AwsResourceEnum.EC2)
//const res4 = new AwsResource<IEC2>({imageId: "ad"}, AwsResourceEnum.EC2)
//const res5 = new AwsResource<IEC2>({imageId: "ae"}, AwsResourceEnum.EC2)
//const archi = new AwsArchitecture(ArchitectureStatus.FREE_TIERS, "Belle infra", "sisi", [res1, res2, res3, res4, res5]).buildResources()