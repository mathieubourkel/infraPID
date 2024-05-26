
export interface IEC2 {
    instanceType?: string;
    imageId?: string;
    subnetId: string;
}

export interface IS3 {
    bob?: string
    coucou: string
}

export interface IDynamoDB {
    bob: string
    bab:string
    coucou: string
}

export interface IVPC {
    bob: string
}

export interface IASG {
    bob: string
}

export type IAwsResourceAttributes = IEC2 | IS3 | IDynamoDB | IVPC | IASG

