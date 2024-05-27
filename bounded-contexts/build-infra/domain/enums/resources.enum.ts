export enum ResourceEnum {

    // AWS
    AWS_EC2 = 1,
    AWS_S3,
    AWS_DYNAMO_DB ,
    AWS_CLOUDFRONT,
    AWS_SECURITY_GROUP,
    AWS_RDS,
    AWS_ECS,
    AWS_LAUNCH_CONFIG,
    AWS_VPC,
    AWS_SUBNET,
    AWS_ASG,
    AWS_DB_SUBNET,
    AWS_DOC_DB_CLUSTER,
    AWS_DOC_DB_CLUS_INSTANCE,
    AWS_DB_INSTANCE,
    AWS_ECS_TASK_DEF,



    // AZURE
    AZ_VPC = 101,
    AZ_VPC_SUB,
    AZ_VPC_SG,
    AZ_VM,
    AZ_STORAGE,
    AZ_MS_SQL_SERVER,
    AZ_MS_SQL_DB,
    AZ_COSMOS_DB_ACC,
    AZ_COSMOS_DB,
    AZ_COSMOS_DB_CONTAINER,
    AZ_REDIS,
    AZ_FW_RULE,



    // GOOGLE
    GCP_VPC = 201,
    GCP_SUB_VPC,
    GCP_FW,
    GCP_VM_GROUP,
    GCP_VM_TEMPLATE,
    GCP_CACHE,
    GCP_BUCKET,
    GCP_DB,

}

export const ResourceMap: { [key in ResourceEnum]: string } = {
    [ResourceEnum.AWS_EC2]: "aws_instance",
    [ResourceEnum.AWS_S3]: "aws_s3_bucket",
    [ResourceEnum.AWS_DYNAMO_DB]: "aws_dynamo_db_table",
    [ResourceEnum.AWS_CLOUDFRONT]: "aws_cloudfront_distribution",
    [ResourceEnum.AWS_SECURITY_GROUP]: "aws_security_group",
    [ResourceEnum.AWS_RDS]: "aws_rds_instance",
    [ResourceEnum.AWS_ECS]: "aws_ecs_cluster",
    [ResourceEnum.AWS_LAUNCH_CONFIG]: "aws_launch_configuration",
    [ResourceEnum.AWS_VPC]: "aws_vpc",
    [ResourceEnum.AWS_SUBNET]: "aws_subnet",
    [ResourceEnum.AWS_ASG]: "aws_auto_scaling_group",
    [ResourceEnum.AWS_DB_SUBNET]: "aws_db_subnet_group",
    [ResourceEnum.AWS_DOC_DB_CLUSTER]: "aws_documentdb_cluster",
    [ResourceEnum.AWS_DOC_DB_CLUS_INSTANCE]: "aws_documentdb_cluster_instance",
    [ResourceEnum.AWS_DB_INSTANCE]: "aws_db_instance",
    [ResourceEnum.AWS_ECS_TASK_DEF]: "aws_ecs_task_definition",

    [ResourceEnum.AZ_VPC]: "azurerm_virtual_network",
    [ResourceEnum.AZ_VPC_SUB]: "azurerm_subnet",
    [ResourceEnum.AZ_VPC_SG]: "azurerm_network_security_group",
    [ResourceEnum.AZ_VM]: "azurerm_virtual_machine",
    [ResourceEnum.AZ_STORAGE]: "azurerm_storage_account",
    [ResourceEnum.AZ_MS_SQL_SERVER]: "azurerm_mssql_server",
    [ResourceEnum.AZ_MS_SQL_DB]: "azurerm_mssql_database",
    [ResourceEnum.AZ_COSMOS_DB_ACC]: "azurerm_cosmosdb_account",
    [ResourceEnum.AZ_COSMOS_DB]: "azurerm_cosmosdb_database",
    [ResourceEnum.AZ_COSMOS_DB_CONTAINER]: "azurerm_cosmosdb_container",
    [ResourceEnum.AZ_REDIS]: "azurerm_redis_cache",
    [ResourceEnum.AZ_FW_RULE]: "azurerm_network_security_rule",

    [ResourceEnum.GCP_VPC]: "google_compute_network",
    [ResourceEnum.GCP_SUB_VPC]: "google_compute_subnetwork",
    [ResourceEnum.GCP_FW]: "google_compute_firewall",
    [ResourceEnum.GCP_VM_GROUP]: "google_compute_managed_instance_group",
    [ResourceEnum.GCP_VM_TEMPLATE]: "google_compute_instance_template",
    [ResourceEnum.GCP_CACHE]: "google_cloud_memorystore_instance",
    [ResourceEnum.GCP_BUCKET]: "google_storage_bucket",
    [ResourceEnum.GCP_DB]: "google_sql_database"
 
};

