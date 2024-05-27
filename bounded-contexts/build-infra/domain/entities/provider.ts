import {  ProviderAttributes, ProvidersEnum, ProvidersMap } from "../enums/providers.enum"

export class Provider<T extends ProvidersEnum> {
    private readonly name: string
    private attributes: ProviderAttributes[T]

    constructor(provider: T, attributes: ProviderAttributes[T]){
        this.name = ProvidersMap[provider]
        this.attributes = attributes
    }

    buildProvider(): string {
        const buildAttributes = JSON.stringify(this.attributes).replace(/:/g, '=');
        return `provider "${this.name}" ${buildAttributes} `
    }
}

//const toto = new Provider(ProvidersEnum.AWS, {features: "aa", region: "aa"})