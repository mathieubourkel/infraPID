import { AzureResourceEnum } from "../enums/azure-resources.enum";
import { IAzureCosmosDb, IAzureCosmosDbAcc, IAzureCosmosDbContainer, IAzureFwRule, IAzureMsSqlDb, IAzureMsSqlServer, IAzureRedis, IAzureStorage, IAzureVM, IAzureVPC, IAzureVPCSg, IAzureVPCSub } from "../interfaces/azure-resources.interface";
import { BaseResource } from "./base.resource";

export class VPCAzureResource extends BaseResource {
    constructor(attributes: IAzureVPC){
        super(AzureResourceEnum.VPC, attributes)
    }
}

export class VPCSubAzureResource extends BaseResource {
    constructor(attributes: IAzureVPCSub){
        super(AzureResourceEnum.VPC_SUB, attributes)
    }
}

export class VPCSgAzureResource extends BaseResource {
    constructor(attributes: IAzureVPCSg){
        super(AzureResourceEnum.VPC_SG, attributes)
    }
}

export class VMAzureResource extends BaseResource {
    constructor(attributes: IAzureVM){
        super(AzureResourceEnum.VM, attributes)
    }
}

export class StorageAzureResource extends BaseResource {
    constructor(attributes: IAzureStorage){
        super(AzureResourceEnum.STORAGE, attributes)
    }
}

export class MSSQLServerAzureResource extends BaseResource {
    constructor(attributes: IAzureMsSqlServer){
        super(AzureResourceEnum.MS_SQL_SERVER, attributes)
    }
}

export class MsSqlDbAzureResource extends BaseResource {
    constructor(attributes: IAzureMsSqlDb){
        super(AzureResourceEnum.MS_SQL_DB, attributes)
    }
}

export class CosmobDbAccAzureResource extends BaseResource {
    constructor(attributes: IAzureCosmosDbAcc){
        super(AzureResourceEnum.COSMOS_DB_ACC, attributes)
    }
}

export class CosmosDbAzureResource extends BaseResource {
    constructor(attributes: IAzureCosmosDb){
        super(AzureResourceEnum.COSMOS_DB, attributes)
    }
}

export class CosmosDbContainerAzureResource extends BaseResource {
    constructor(attributes: IAzureCosmosDbContainer){
        super(AzureResourceEnum.COSMOS_DB_CONTAINER, attributes)
    }
}

export class RedisAzureResource extends BaseResource {
    constructor(attributes: IAzureRedis){
        super(AzureResourceEnum.REDIS, attributes)
    }
}

export class FwRuleAzureResource extends BaseResource {
    constructor(attributes: IAzureFwRule){
        super(AzureResourceEnum.FW_RULE, attributes)
    }
}