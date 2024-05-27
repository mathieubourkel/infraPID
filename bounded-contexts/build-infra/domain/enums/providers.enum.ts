import { IProviderAWS, IProviderAzure, IProviderGoogle } from "../interfaces/provider.interface";

export enum ProvidersEnum {
    AWS,
    AZURE,
    GOOGLE,
}

export const ProvidersMap: { [key in ProvidersEnum]: string } = {
    [ProvidersEnum.AWS]: "aws",
    [ProvidersEnum.GOOGLE]: "google",
    [ProvidersEnum.AZURE]: "azurerm",
    
};

export type ProviderAttributes = {
    [ProvidersEnum.GOOGLE]: IProviderGoogle
    [ProvidersEnum.AWS]: IProviderAWS
    [ProvidersEnum.AZURE]: IProviderAzure
    
};

export const beginTerraFormFileProvidersRequired = 
        `terraform { 
            required_providers { 
                aws = { 
                    source = "hashicorp/aws"
                    version = "5.51.1"
                }
                azurerm = {
                    source = "hashicorp/azurerm"
                    version = "3.105.0"
                }
                google = {
                    source = "hashicorp/google"
                    version = "5.30.0"
                }
            }
        }`
