import { GetAllArchiTemplateUseCase } from '../../../../bounded-contexts/build-infra/app/use-cases/get-all-templates.usecase';
import { Handler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDbArchitectureRepository } from '../../../driven/dynamodb/src/dynamodb.template.repository';

const DYNAMODB_TABLE = process.env.DYNAMODB_TABLE || ''
const architectureRepository = new DynamoDbArchitectureRepository(DYNAMODB_TABLE)


export const handler:Handler = async (event:APIGatewayProxyEvent):Promise<APIGatewayProxyResult> => {
    try {
        const usecase = await new GetAllArchiTemplateUseCase(architectureRepository).execute()
        return {
            statusCode: 200,
            body: JSON.stringify({
              message: usecase
            })
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
