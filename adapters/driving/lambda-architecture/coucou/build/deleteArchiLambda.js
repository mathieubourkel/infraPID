var p=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var A=Object.prototype.hasOwnProperty;var D=(t,r)=>{for(var e in r)p(t,e,{get:r[e],enumerable:!0})},g=(t,r,e,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let s of y(r))!A.call(t,s)&&s!==e&&p(t,s,{get:()=>r[s],enumerable:!(o=d(r,s))||o.enumerable});return t};var v=t=>g(p({},"__esModule",{value:!0}),t);var P={};D(P,{handler:()=>I});module.exports=v(P);var c=class{constructor(r,e,o,s,h,m){this.id=m||`${Date.now()}-${Math.floor(Math.random()*1e4)}`,this.provider=e,this.status=r,this.description=o,this.name=s,this.resources=h}getInfos(){return{id:this.id,status:this.status,provider:this.provider,description:this.description,name:this.name}}getAllResources(){return this.resources}addResource(r){Array.isArray(r)?r.map(e=>this.resources.push(e)):this.resources.push(r)}removeResource(r){Array.isArray(r)?r.map(e=>{this.resources=this.resources.filter(o=>o!==e)}):this.resources=this.resources.filter(e=>e!==r)}};var a=class{constructor(r,e,o,s,h,m){this.status=r;this.provider=e;this.description=o;this.name=s;this.resources=h;this.id=m}};var i=class{static toDomain(r){return new c(r.status,r.provider,r.description,r.name,r.resources)}static toDomainWithId(r){return new c(r.status,r.provider,r.description,r.name,r.resources,r.id)}static toDto(r){return new a(r.status,r.provider,r.description,r.name,r.resources)}static toDtoWithId(r){return new a(r.status,r.provider,r.description,r.name,r.resources,r.id)}};var n=class{constructor(r){this.architectureRepository=r}async execute(r){try{let e=i.toDomain(r);return await this.architectureRepository.addTemplateToPersistence(e)}catch(e){throw e}}};var l=require("aws-sdk"),u=class{constructor(r){this.tableName=r;this.dynamo=new l.DynamoDB.DocumentClient}async addTemplateToPersistence(r){try{return await this.dynamo.put({TableName:this.tableName,Item:r}).promise()}catch(e){throw console.error("Error adding item to DynamoDB:",e),e}}async removeTemplateFromPersistence(r){try{return await this.dynamo.delete({TableName:this.tableName,Key:{id:r}}).promise()}catch(e){throw console.error("Error deleting item to DynamoDB:",e),e}}async updateTemplateFromPersistence(r){throw"Method Not Implemented"}async getArchisByOptions(r){return[]}async getAllArchis(){try{return(await this.dynamo.scan({TableName:this.tableName}).promise()).Items}catch(r){throw console.error("Error getting all items from DynamoDB:",r),r}}async getOneArchiById(r){try{return(await this.dynamo.get({TableName:this.tableName,Key:{id:r}}).promise()).Item}catch(e){throw console.error("Error getting item from DynamoDB:",e),e}}};var f=process.env.DYNAMODB_TABLE||"",R=new u(f),I=async t=>{try{let r=i.toDto(t.body),e=new n(R).execute(r);return{statusCode:201,body:JSON.stringify({message:"ARCHI ADD SUCCESSFULY",result:e})}}catch(r){return{statusCode:500,body:JSON.stringify({message:"INTERNAL ERROR",error:r})}}};0&&(module.exports={handler});
//# sourceMappingURL=deleteArchiLambda.js.map
