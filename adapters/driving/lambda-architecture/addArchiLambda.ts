import { Handler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { AddArchiTemplateUseCase } from '../../../bounded-contexts/build-infra/app/use-cases/add-archi-template.usecase';
import { DynamoDbArchitectureRepository } from '../../driven/dynamodb-architecture/dynamodb.repository';
import { ArchitectureMapper } from '../../../bounded-contexts/build-infra/app/mappers/architecture.mapper';

const DYNAMODB_TABLE = process.env.DYNAMODB_TABLE || ''
const architectureRepository = new DynamoDbArchitectureRepository(DYNAMODB_TABLE)


export const handler:Handler = async (event:APIGatewayProxyEvent):Promise<APIGatewayProxyResult> => {
  
  try {
        const usecase = new AddArchiTemplateUseCase(architectureRepository)
        const dto = ArchitectureMapper.toDto(JSON.parse(event.body) || "")
        const result = await usecase.execute(dto)
        return {
            statusCode: 201,
            body: JSON.stringify({
              message: "ARCHI ADD SUCCESSFULYY",
              resulta: result,
              dto: dto,
              body : event.body
            }),
          };
    } catch (e:any) {
      console.log("aaa",e)
        return {
            statusCode: 500,
            body: JSON.stringify({
              message: "INTERNAL ERROR",
              error: e,
            }),
          };
    }
  
}
