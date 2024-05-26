import { IASG, IDynamoDB, IEC2, IS3, IVPC } from "../interfaces/aws-resources.interface"
import { AwsResourceEnum } from "../enums/aws-resources.enum"
import { BaseResource } from "./base.resource"

export class Ec2AwsResource extends BaseResource {
    constructor(attributes: IEC2){
        super(AwsResourceEnum.EC2, attributes)
    }
}

export class S3AwsResource extends BaseResource {
    constructor(attributes: IS3){
        super(AwsResourceEnum.S3, attributes)
    }
}

export class DynamoDbAwsResource extends BaseResource {
    constructor(attributes: IDynamoDB){
        super(AwsResourceEnum.DYNAMO_DB, attributes)
    }
}

export class VpcAwsResource extends BaseResource {
    constructor(attributes: IVPC){
        super(AwsResourceEnum.VPC, attributes)
    }
}

export class AsgAwsResource extends BaseResource {
    constructor(attributes: IASG){
        super(AwsResourceEnum.ASG, attributes)
    }
}