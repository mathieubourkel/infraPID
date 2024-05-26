interface IBaseProvider {
    region: string
    alias?:string
}

export interface IProviderGoogle extends IBaseProvider {
    project: string
}

export interface IProviderAWS extends IBaseProvider {}

export interface IProviderAzure extends IBaseProvider {
    features: string
}

export type IProvider = IProviderAWS | IProviderAzure | IProviderGoogle