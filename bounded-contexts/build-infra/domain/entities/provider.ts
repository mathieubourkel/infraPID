import {  ProviderAttributes, ProvidersEnum } from "../enums/providers.enum"
import { transformToTerraform } from "../utils/transformJsonToTerraform"


export class Provider<T extends ProvidersEnum> {
    private readonly name: T
    private attributes: ProviderAttributes[T]

    constructor(provider: T, attributes: ProviderAttributes[T]){
        this.name = provider
        this.attributes = attributes
    }

    buildProvider(): string {
        return `provider "${this.name}" {\n${transformToTerraform(this.attributes)}`
    }
}

// const toto = new Provider(ProvidersEnum.AWS, {features: "aa", region: "aa"})