import { Provider } from "../entities/provider"
import { ProvidersEnum } from "../enums/providers.enum"

export interface IProviderGoogle {
    project: string
    region: string
    alias?:string
}

export interface IProviderAWS {
    region: string
    alias?:string
}

export interface IProviderAzure {
    features: string
    region: string
    alias?:string
}

export type IProvider = Provider<ProvidersEnum>
export type IProviders = Provider<ProvidersEnum>[]