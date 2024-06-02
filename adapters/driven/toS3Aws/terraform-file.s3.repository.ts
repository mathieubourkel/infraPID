import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { BuildInfraRepository } from '../../../bounded-contexts/build-infra/domain/repositories/build-infra.repository';

export class S3TerraformRepository implements BuildInfraRepository {

  private s3: S3Client
  private bucketName: string

  constructor(bucketName: string){
    this.s3 = new S3Client()
    this.bucketName = bucketName
  }
    
  async saveTerraformFile(data: string) {
    const random = Math.floor(Math.random() * 100000)
    const fileName = `/users-file/${random}/main.tf`

    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: fileName,
      Body: data,
      ContentType: 'application/octet-stream'
    });
    try {
      const response = await this.s3.send(command)
      return `File uploaded successfully at ${response}`;
    } catch (err) {
      throw err
    } 
  }
}