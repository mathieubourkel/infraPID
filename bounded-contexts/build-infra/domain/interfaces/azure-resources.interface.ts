export interface IAzureVPC {
    name?: string;
    location?: string;
    resource_group_name?: string;
    address_prefixes?: string
}

export interface IAzureVPCSub {
    name?: string;
    virtual_network_id?:string
    resource_group_name?: string;
    address_prefixes?: string
}

export interface IAzureVPCSg {
    name?: string;
    location?: string;
    resource_group_name?: string;
    rule?:string
}

export interface IAzureVM {
    name?: string;
    location?: string;
    resource_group_name?: string;
    vm_size?:string
    availability_set_name?:string
    network_interface?:string
    source_image_name?:string
    os_profile?:string
    storage_profile?: string
}

export interface IAzureStorage {
    name?: string;
    location?: string;
    resource_group_name?: string;
    account_tier?: string
    account_replication_type?: string
}
export interface IAzureMsSqlServer {
    name?: string;
    location?: string;
    resource_group_name?: string;
    admin_login_username?: string
    admin_login_password?:string
    sku?:string
}

export interface IAzureMsSqlDb {
    name?: string;
    location?: string;
    resource_group_name?: string;
    server_id?:string
    sku?: string
}

export interface IAzureCosmosDbAcc {
    name?: string;
    location?: string;
    resource_group_name?: string;
    kind?:string
    consistency_lvel?: string
    geo_location?: string
    failover_priority?:string
}

export interface IAzureCosmosDb {
    name?: string;
    location?: string;
    resource_group_name?: string;
    account_id?: string
}

export interface IAzureCosmosDbContainer {
    name?: string;
    location?: string;
    resource_group_name?: string;
    account_id? :string
    database_id?: string
    partition_key_path?: string
}

export interface IAzureRedis {
    name?: string;
    location?: string;
    resource_group_name?: string;
    familiy?: string
    sku?: string,
    capacity?: string
    enable_non_ssl_port?: string
}

export interface IAzureFwRule {
    name?: string;
    location?: string;
}

export type IAzureResourceAttributes = IAzureVPC | IAzureVPCSub | IAzureVPCSg | IAzureVM | IAzureStorage | IAzureMsSqlServer | IAzureMsSqlDb | 
IAzureCosmosDbAcc | IAzureCosmosDb | IAzureCosmosDbContainer | IAzureRedis | IAzureFwRule