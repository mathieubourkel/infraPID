export interface IAwsEc2 {
    instance_type?: string;
    image_id?: string;
    subnet_id: string;
    ami: string
}

export interface IAwsS3 {
    bucket: string
    acl: string
}

export interface IAwsDynamoDB {
    bob: string
    bab:string
    coucou: string
}

export interface IAwsCloudFront {
    origin: string
    default_cache_behavior: string
    enabled: string
    is_ipv6_enabled: string
}

export interface IAwsSecurityGroup {
    name: string
    description: string
    vpc_id: string
    ingress: string
    egress: string
}

export interface IAwsRds {
    allocated_storage: string
    engine: string
    engine_version: string
    instance_class: string
    name: string
    username: string
    password: string
}

export interface IAwsEcs {
    name: string
}

export interface IAwsLaunchConfig {
    name_prefix: string
    image_id: string
    instance_type: string
}

export interface IAwsVpc {
    cidr_block: string
}


export interface IAwsVpcSubnet {
    vpc_id: string
    cidr_block :string
    map_public_ip_on_launch: string
}

export interface IAwsAsg {
    launch_configuration: string
    min_size: string
    max_size: string
    desired_capacity: string
}

export interface IAwsDbSubnet {
    name: string
    subnet_ids: string
}

export interface IAwsDocDbCluster {
    cluster_identifier: string
    instance_class: string
    master_password: string
    master_username: string
    skip_final_snapshot: string
}

export interface IAwsDocDbClusterInstance {
    cluster_identifier: string
    instance_class: string
    identifier: string
}

export interface IAwsDbInstance{
    
}

export interface IAwsEcsTaskDefinition {
    family: string
    container_definition: string
}


