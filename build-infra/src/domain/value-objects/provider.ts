import { ProvidersEnum } from "../enums/providers.enum"

export class Provider<T>{
    private attributes : T
    private readonly name: ProvidersEnum

    constructor(name:ProvidersEnum, attributes: T){
        this.name = name
        this.attributes = attributes
    }

    buildProvider(){
        let buildAttribute = JSON.stringify(this.attributes)
        return `provider "${this.name}" ${buildAttribute.replace(/:/g, '=')}`
    }
}