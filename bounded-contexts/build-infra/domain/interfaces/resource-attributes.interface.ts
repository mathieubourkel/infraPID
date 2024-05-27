import { Resource } from "../entities/resource"
import { ResourceEnum } from "../enums/resources.enum"
import { IAwsAsg, IAwsCloudFront, IAwsDbSubnet, IAwsDocDbCluster, IAwsDocDbClusterInstance, IAwsDbInstance, IAwsDynamoDB, IAwsEc2, IAwsEcs, IAwsLaunchConfig, IAwsRds, IAwsS3, IAwsSecurityGroup, IAwsVpc, IAwsVpcSubnet, IAwsEcsTaskDefinition } from "./aws-resources.interface"
import { IAzureCosmosDb, IAzureCosmosDbAcc, IAzureCosmosDbContainer, IAzureFwRule, IAzureMsSqlDb, IAzureMsSqlServer, IAzureRedis, IAzureStorage, IAzureVm, IAzureVpc, IAzureVpcSg, IAzureVpcSub } from "./azure-resources.interface"
import { IGCPBucket, IGCPCache, IGCPDB, IGCPFW, IGCPSubVPC, IGCPVMGroup, IGCPVMTemplate, IGCPVPC } from "./google-resources.interface"


export type ResourceAttributes = {
    [ResourceEnum.AWS_EC2]: IAwsEc2
    [ResourceEnum.AWS_S3]: IAwsS3
    [ResourceEnum.AWS_DYNAMO_DB]: IAwsDynamoDB
    [ResourceEnum.AWS_CLOUDFRONT]: IAwsCloudFront
    [ResourceEnum.AWS_SECURITY_GROUP]: IAwsSecurityGroup
    [ResourceEnum.AWS_RDS]:IAwsRds
    [ResourceEnum.AWS_ECS]: IAwsEcs
    [ResourceEnum.AWS_LAUNCH_CONFIG]: IAwsLaunchConfig
    [ResourceEnum.AWS_VPC]: IAwsVpc
    [ResourceEnum.AWS_SUBNET]: IAwsVpcSubnet
    [ResourceEnum.AWS_ASG]: IAwsAsg
    [ResourceEnum.AWS_DB_SUBNET]: IAwsDbSubnet
    [ResourceEnum.AWS_DOC_DB_CLUSTER]: IAwsDocDbCluster
    [ResourceEnum.AWS_DOC_DB_CLUS_INSTANCE]: IAwsDocDbClusterInstance
    [ResourceEnum.AWS_DB_INSTANCE]: IAwsDbInstance
    [ResourceEnum.AWS_ECS_TASK_DEF]: IAwsEcsTaskDefinition


    [ResourceEnum.AZ_VPC]: IAzureVpc
    [ResourceEnum.AZ_VPC_SUB]: IAzureVpcSub
    [ResourceEnum.AZ_VPC_SG]: IAzureVpcSg
    [ResourceEnum.AZ_VM]: IAzureVm
    [ResourceEnum.AZ_STORAGE]: IAzureStorage
    [ResourceEnum.AZ_MS_SQL_SERVER]: IAzureMsSqlServer
    [ResourceEnum.AZ_MS_SQL_DB]: IAzureMsSqlDb
    [ResourceEnum.AZ_COSMOS_DB_ACC]: IAzureCosmosDbAcc
    [ResourceEnum.AZ_COSMOS_DB]: IAzureCosmosDb
    [ResourceEnum.AZ_COSMOS_DB_CONTAINER]: IAzureCosmosDbContainer
    [ResourceEnum.AZ_REDIS]: IAzureRedis
    [ResourceEnum.AZ_FW_RULE]: IAzureFwRule



    [ResourceEnum.GCP_VPC]: IGCPVPC
    [ResourceEnum.GCP_SUB_VPC]: IGCPSubVPC
    [ResourceEnum.GCP_FW]: IGCPFW
    [ResourceEnum.GCP_VM_GROUP]: IGCPVMGroup
    [ResourceEnum.GCP_VM_TEMPLATE]: IGCPVMTemplate
    [ResourceEnum.GCP_CACHE]: IGCPCache
    [ResourceEnum.GCP_BUCKET]: IGCPBucket
    [ResourceEnum.GCP_DB]: IGCPDB


}
export type IResource = Resource<ResourceEnum>
export type IResources = Resource<ResourceEnum>[]