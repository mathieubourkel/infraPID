import { Handler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { ArchitectureMapper } from '../../../../bounded-contexts/build-infra/app/mappers/architecture.mapper';
import { RemoveArchiTemplateUseCase } from '../../../../bounded-contexts/build-infra/app/use-cases/remove-template.usecase';
import { DynamoDbArchitectureRepository } from '../../../driven/dynamodb/src/dynamodb.template.repository';

const DYNAMODB_TABLE = process.env.DYNAMODB_TABLE || ''
const architectureRepository = new DynamoDbArchitectureRepository(DYNAMODB_TABLE)


export const handler:Handler = async (event:APIGatewayProxyEvent):Promise<APIGatewayProxyResult> => {
    try {
        const id:string = event.pathParameters?.id || ""
        const dto = ArchitectureMapper.toDto(event.body)
        const result = new RemoveArchiTemplateUseCase(architectureRepository).execute(id)
        return {
            statusCode: 200,
            body: JSON.stringify({
              message: "ARCHI DELETE SUCCESSFULY",
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
