import { ProvidersEnum } from "../enums/providers.enum"
import { IProvider, IProviderAWS, IProviderAzure, IProviderGoogle } from "../interfaces/provider.interface"

export abstract class Provider {
    private readonly name: ProvidersEnum
    private attributes: IProvider

    constructor(name: ProvidersEnum, attributes: IProvider){
        this.name = name
        this.attributes = attributes
    }

    buildProvider(): string {
        let buildAttributes = JSON.stringify(this.attributes)
        return `provider "${this.name}" ${buildAttributes.replace(/:/g, '=')} `
    }
}


export class AwsProvider extends Provider {
    constructor(attributes: IProviderAWS){
        super(ProvidersEnum.AWS, attributes)
    }
}

export class AzureProvider extends Provider {
    constructor(attributes: IProviderAzure){
        super(ProvidersEnum.AZURE, attributes)
    }
}

export class GoogleProvider extends Provider {
    constructor(attributes: IProviderGoogle){
        super(ProvidersEnum.GOOGLE, attributes)
    }
}