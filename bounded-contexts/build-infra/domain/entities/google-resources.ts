import { BaseResource } from "./base.resource";
import { GoogleResourcesEnum } from "../enums/google-resources.enum";
import { IBucket, ICache, IDB, IFW, ISubVPC, IVMGroup, IVMTemplate, IVPC } from "../interfaces/google-resources.interface";

export class VPCGoogleResource extends BaseResource {
    constructor(attributes: IVPC){
        super(GoogleResourcesEnum.VPC, attributes)
    }
}

export class SubVPCGoogleResource extends BaseResource {
    constructor(attributes: ISubVPC){
        super(GoogleResourcesEnum.SUB_VPC, attributes)
    }
}

export class FWGoogleResource extends BaseResource {
    constructor(attributes: IFW){
        super(GoogleResourcesEnum.FW, attributes)
    }
}

export class VMGroupGoogleResource extends BaseResource {
    constructor(attributes: IVMGroup){
        super(GoogleResourcesEnum.VM_GROUP, attributes)
    }
}

export class VMTemplateGoogleResource extends BaseResource {
    constructor(attributes: IVMTemplate){
        super(GoogleResourcesEnum.VM_TEMPLATE, attributes)
    }
}

export class CacheGoogleResource extends BaseResource {
    constructor(attributes: ICache){
        super(GoogleResourcesEnum.CACHE, attributes)
    }
}

export class BucketGoogleResource extends BaseResource {
    constructor(attributes: IBucket){
        super(GoogleResourcesEnum.BUCKET, attributes)
    }
}

export class DBGoogleResource extends BaseResource {
    constructor(attributes: IDB){
        super(GoogleResourcesEnum.DB, attributes)
    }
}

