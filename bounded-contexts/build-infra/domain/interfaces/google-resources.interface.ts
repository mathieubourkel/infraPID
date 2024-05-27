export interface IGCPVPC {
    name?:string
    project?: string
    region?: string
}

export interface IGCPSubVPC {
    name?:string
    project?: string
    region?: string
    ip_cidr_range?: string
    network?: string
}

export interface IGCPFW {
    name?:string
    project?: string
    region?: string
    network?: string
    allow?: string
}

export interface IGCPVMGroup{
    name?: string;
    base_instance_name?: string;
    zone?: string;
    project?: string
}


export interface IGCPVMTemplate {
    name?:string
    project?: string
    region?: string
    machine_type?: string
    disk?: string
    network_interface?: string
}

export interface IGCPCache {
    name?:string
    project?: string
    region?: string
    memcache_version?:string
    node_count?: string
    node_memory_gb?: string
    instance_id?: string
}

export interface IGCPBucket {
    name?:string
    project?: string
    region?: string
    storage_class?: string
}

export interface IGCPDB {
    name?:string
    project?: string
    region?: string
    instance_type?: string
    database_version?:string
}