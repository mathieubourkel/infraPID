import { Handler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { AddArchiTemplateUseCase } from '../../../../bounded-contexts/build-infra/app/use-cases/add-archi-template.usecase';
import { DynamoDbArchitectureRepository } from '../../../driven/dynamodb/src/dynamodb.template.repository';
import { ArchitectureMapper } from '../../../../bounded-contexts/build-infra/app/mappers/architecture.mapper';

const DYNAMODB_TABLE = process.env.DYNAMODB_TABLE || ''
const architectureRepository = new DynamoDbArchitectureRepository(DYNAMODB_TABLE)


export const handler:Handler = async (event:APIGatewayProxyEvent):Promise<APIGatewayProxyResult> => {
    try {
        const dto = ArchitectureMapper.toDto(event.body)
        const result = new AddArchiTemplateUseCase(architectureRepository).execute(dto)
        return {
            statusCode: 201,
            body: JSON.stringify({
              message: "ARCHI ADD SUCCESSFULY",
              result
            }),
          };
    } catch (e) {
        return {
            statusCode: 500,
            body: JSON.stringify({
              message: "INTERNAL ERROR",
              error: e
            }),
          };
    }
  
}
