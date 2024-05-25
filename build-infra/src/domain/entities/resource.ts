import { AwsResourceEnum } from "../enums/aws.resources.enum"
import { AzureResourceEnum } from "../enums/azure.resources.enum"
import { GoogleResourcesEnum } from "../enums/google.resources.enum"
import { ProvidersEnum } from "../enums/providers.enum"

export class Resource<T> {
    providerName:string
    name: string
    attributes: T

    constructor(providerName: string, attributes:T){
        this.providerName = providerName
        this.name = this.providerName + '_infraPID_' + (Math.floor(Math.random() * 1000000) + 1)
        this.attributes = attributes
    }

    buildResource(){
        let buildAttribute = JSON.stringify(this.attributes)
        return `resource "${this.providerName}" "${this.name}" ${buildAttribute.replace(/:/g, '=')} `
    }
}

export class AwsResource<T> extends Resource<T> {

    constructor(attributes: T, type: AwsResourceEnum){
        super(`${ProvidersEnum.AWS}_${type}`, attributes)
    }
}

export class AzureResource<T> extends Resource<T> {

    constructor(attributes: T, type: AzureResourceEnum){
        super(`${ProvidersEnum.AZURE}_${type}`, attributes)
    }
}

export class GoogleResource<T> extends Resource<T> {

    constructor(attributes: T, type: GoogleResourcesEnum){
        super(`${ProvidersEnum.GOOGLE}_${type}`, attributes)
    }
}
