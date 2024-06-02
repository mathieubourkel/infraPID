import { Handler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { S3TerraformRepository } from '../../driven/toS3Aws/terraform-file.s3.repository';
import { CreateFileInfraUseCase } from '../../../bounded-contexts/build-infra/app/use-cases/create-terraform.usecase';
import { ProviderMapper } from '../../../bounded-contexts/build-infra/app/mappers/provider.mapper';
import { ProviderDto } from '../../../bounded-contexts/build-infra/app/dto/provider.dto';
import { ResourceDto } from '../../../bounded-contexts/build-infra/app/dto/resource.dto';
import { ResourceMapper } from '../../../bounded-contexts/build-infra/app/mappers/resource.mapper';

const S3_BUCKET = process.env.S3_BUCKET || ''
const s3Repository = new S3TerraformRepository(S3_BUCKET)


export const handler:Handler = async (event:APIGatewayProxyEvent):Promise<APIGatewayProxyResult> => {

  try {
      if (!event.body) throw "no body"
      const {providers, resources} = JSON.parse(event.body)
      const usecase = new CreateFileInfraUseCase(s3Repository)
      let providersDto: ProviderDto[] = []

      providers.map((provider:ProviderDto) => {
        providersDto.push(ProviderMapper.toDto(provider)) 
      })

      let resourcesDto: ResourceDto[] = []

      resources.map((resource:ResourceDto) => {
        resourcesDto.push(ResourceMapper.toDto(resource))
      })
      
      const result = await usecase.execute(providersDto, resourcesDto)
      return {
          statusCode: 201,
          body: JSON.stringify({
            message: "FILE BUILD SUCCESSFULY",
            resulta: result,
            dto: {resourcesDto, providersDto},
            body : event.body
          }),
        };

    } catch (e:any) {
        return {
            statusCode: 500,
            body: JSON.stringify({
              message: "INTERNAL ERROR",
              error: e,
            }),
          };
    }
}
