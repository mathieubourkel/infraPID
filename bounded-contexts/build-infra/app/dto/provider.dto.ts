import { ProviderAttributes, ProvidersEnum } from "../../domain/enums/providers.enum"

export interface ProviderDto {
    name: string
    attributes: ProviderAttributes[ProvidersEnum]
}