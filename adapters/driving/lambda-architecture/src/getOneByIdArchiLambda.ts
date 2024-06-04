import { Handler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDbArchitectureRepository } from '../../../driven/dynamodb/src/dynamodb.template.repository';
import { GetOneArchiTemplateUseCase } from '../../../../bounded-contexts/build-infra/app/use-cases/get-one-template.usecase';

const DYNAMODB_TABLE = process.env.DYNAMODB_TABLE || ''
const architectureRepository = new DynamoDbArchitectureRepository(DYNAMODB_TABLE)


export const handler:Handler = async (event:APIGatewayProxyEvent):Promise<APIGatewayProxyResult> => {
    try {
        const id:string = event.pathParameters?.id || ""
        const usecase = await new GetOneArchiTemplateUseCase(architectureRepository).execute(id)
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
