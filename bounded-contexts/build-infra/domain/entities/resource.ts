import {  ResourceEnum, ResourceMap } from "../enums/resources.enum"
import { ResourceAttributes } from "../interfaces/resource-attributes.interface"


export class Resource<T extends ResourceEnum> {
    private readonly resourceType: typeof ResourceMap[ResourceEnum]
    readonly name: string
    private attributes: ResourceAttributes[T]

    constructor(resourceType: T, attributes: ResourceAttributes[T]){
        this.resourceType = ResourceMap[resourceType]
        this.name = this.resourceType + '_infraPID_' + (Math.floor(Math.random() * 1000000) + 1)
        this.attributes = attributes
    }

    buildResource(): string {
        let buildAttribute = JSON.stringify(this.attributes)
        return `resource "${this.resourceType}" "${this.name}" ${buildAttribute.replace(/:/g, '=')} `
    }

}

const re1 = new Resource(ResourceEnum.AWS_S3, {acl: "a", bucket: "a"})