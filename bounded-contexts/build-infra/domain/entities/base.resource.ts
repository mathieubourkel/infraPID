import { IAttributes, IResourcesEnum } from "../interfaces/generic.interface"

export abstract class BaseResource {
    private readonly resourceType: IResourcesEnum
    readonly name: string
    private attributes: IAttributes

    constructor(resourceType: IResourcesEnum, attributes: IAttributes){
        this.resourceType = resourceType
        this.name = this.resourceType + '_infraPID_' + (Math.floor(Math.random() * 1000000) + 1)
        this.attributes = attributes
    }

    buildResource(): string {
        let buildAttribute = JSON.stringify(this.attributes)
        return `resource "${this.resourceType}" "${this.name}" ${buildAttribute.replace(/:/g, '=')} `
    }

}