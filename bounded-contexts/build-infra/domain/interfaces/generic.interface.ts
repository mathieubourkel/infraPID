import { AwsResourceEnum } from "../enums/aws-resources.enum"
import { IAwsResourceAttributes } from "./aws-resources.interface"
import { AzureResourceEnum } from "../enums/azure-resources.enum"
import { IAzureResourceAttributes } from "./azure-resources.interface"
import { GoogleResourcesEnum } from "../enums/google-resources.enum"
import { IGoogleResourceAttributes } from "./google-resources.interface"


export type IResourcesEnum = AwsResourceEnum | GoogleResourcesEnum | AzureResourceEnum
export type IAttributes = IAwsResourceAttributes | IAzureResourceAttributes | IGoogleResourceAttributes