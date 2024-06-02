var l=Object.defineProperty;var D=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var T=Object.prototype.hasOwnProperty;var y=(e,r)=>{for(var t in r)l(e,t,{get:r[t],enumerable:!0})},g=(e,r,t,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of v(r))!T.call(e,o)&&o!==t&&l(e,o,{get:()=>r[o],enumerable:!(s=D(r,o))||s.enumerable});return e};var w=e=>g(l({},"__esModule",{value:!0}),e);var G={};y(G,{handler:()=>B});module.exports=w(G);var C=require("aws-sdk"),m=class{constructor(r){this.s3=new C.S3,this.bucketName=r}async saveTerraformFile(r){let s=`/users-file/${Math.floor(Math.random()*1e5)}/main.tf`,o={Bucket:this.bucketName,Key:s,Body:r,ContentType:"application/octet-stream"};try{return`File uploaded successfully at ${(await this.s3.upload(o).promise()).Location}`}catch(i){throw i}}};var P=`terraform { 
    required_providers { 
        aws = { 
            source = "hashicorp/aws"
            version = "5.51.1"
        }
        azurerm = {
            source = "hashicorp/azurerm"
            version = "3.105.0"
        }
        google = {
            source = "hashicorp/google"
            version = "5.30.0"
        }
    }
}

`;function n(e,r=1){let t="";for(let[s,o]of Object.entries(e))typeof o=="object"?(t+=`${"    ".repeat(r)}${s} {
`,t+=n(o,r+1),t+=`${"    ".repeat(r)}}
`):t+=`${"    ".repeat(r)}${s} = "${o}"
`;return r===1&&(t+=`}

`),t}var p=class{constructor(r,t){this.name=r,this.attributes=t}buildProvider(){return`provider "${this.name}" {
${n(this.attributes)}`}};var u=class{constructor(r,t){this.name=r;this.attributes=t}};var _=class{static toDomaine(r){return new p(r.name,r.attributes)}static toDto(r){return new u(r.name,r.attributes)}};var b={1:"aws_instance",2:"aws_s3_bucket",3:"aws_dynamo_db_table",4:"aws_cloudfront_distribution",5:"aws_security_group",6:"aws_rds_instance",7:"aws_ecs_cluster",8:"aws_launch_configuration",9:"aws_vpc",10:"aws_subnet",11:"aws_auto_scaling_group",12:"aws_db_subnet_group",13:"aws_documentdb_cluster",14:"aws_documentdb_cluster_instance",15:"aws_db_instance",16:"aws_ecs_task_definition",101:"azurerm_virtual_network",102:"azurerm_subnet",103:"azurerm_network_security_group",104:"azurerm_virtual_machine",105:"azurerm_storage_account",106:"azurerm_mssql_server",107:"azurerm_mssql_database",108:"azurerm_cosmosdb_account",109:"azurerm_cosmosdb_database",110:"azurerm_cosmosdb_container",111:"azurerm_redis_cache",112:"azurerm_network_security_rule",201:"google_compute_network",202:"google_compute_subnetwork",203:"google_compute_firewall",204:"google_compute_managed_instance_group",205:"google_compute_instance_template",206:"google_cloud_memorystore_instance",207:"google_storage_bucket",208:"google_sql_database"};var c=class{constructor(r,t){this.resourceType=b[r],this.name=this.resourceType+"_infraPID_"+(Math.floor(Math.random()*1e6)+1),this.attributes=t}buildResource(){return`resource "${this.resourceType}" "${this.name}" {
${n(this.attributes)}`}};var S=class{constructor(r,t,s){this.resourceType=r;this.attributes=t;this.name=s}};var a=class{static toDomaine(r){return new c(r.resourceType,r.attributes)}static toDto(r){return new S(r.resourceType,r.attributes)}};var A=class{constructor(r){this.buildInfraRepository=r}async execute(r,t){let s=P;r.map(o=>{let i=_.toDomaine(o);s+=i.buildProvider()}),t.map(o=>{let i=a.toDomaine(o);s+=i.buildResource()}),await this.buildInfraRepository.saveTerraformFile(s)}};var O=process.env.S3_BUCKET||"",W=new m(O),B=async e=>{try{if(!e.body)throw"no body";let{providers:r,resources:t}=JSON.parse(e.body),s=new A(W),o=[];r.map(d=>{o.push(_.toDto(d))});let i=[];t.map(d=>{i.push(a.toDto(d))});let f=await s.execute(o,i);return{statusCode:201,body:JSON.stringify({message:"FILE BUILD SUCCESSFULY",resulta:f,dto:{resourcesDto:i,providersDto:o},body:e.body})}}catch(r){return{statusCode:500,body:JSON.stringify({message:"INTERNAL ERROR",error:r})}}};0&&(module.exports={handler});
//# sourceMappingURL=buildInfraLambda.js.map
