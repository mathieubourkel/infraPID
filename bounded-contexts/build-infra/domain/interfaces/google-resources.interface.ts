export interface IVPC {
    name?:string
    project?: string
    region?: string
}

export interface ISubVPC {
    name?:string
    project?: string
    region?: string
    ip_cidr_range?: string
    network?: string
}

export interface IFW {
    name?:string
    project?: string
    region?: string
    network?: string
    allow?: string
}

export interface IVMGroup{
    name?: string;
    base_instance_name?: string;
    zone?: string;
    project?: string
}


export interface IVMTemplate {
    name?:string
    project?: string
    region?: string
    machine_type?: string
    disk?: string
    network_interface?: string
}

export interface ICache {
    name?:string
    project?: string
    region?: string
    memcache_version?:string
    node_count?: string
    node_memory_gb?: string
    instance_id?: string
}

export interface IBucket {
    name?:string
    project?: string
    region?: string
    storage_class?: string
}

export interface IDB {
    name?:string
    project?: string
    region?: string
    instance_type?: string
    database_version?:string
}

export type IGoogleResourceAttributes = IVPC | ISubVPC | IFW | IVMGroup | IVMTemplate | ICache | IBucket | IDB