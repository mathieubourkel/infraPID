import { ProviderAttributes, ProvidersEnum } from "../../domain/enums/providers.enum"

export class ProviderDto {
    
    constructor(
        public name: ProvidersEnum,
        public attributes: ProviderAttributes[ProvidersEnum]
    ){}
}