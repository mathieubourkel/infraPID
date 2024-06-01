import { Handler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { AddArchiTemplateUseCase } from '../../../bounded-contexts/build-infra/app/use-cases/add-archi-template.usecase';
import { DynamoDbArchitectureRepository } from '../../driven/dynamodb-architecture/dynamodb.repository';
import { ArchitectureMapper } from '../../../bounded-contexts/build-infra/app/mappers/architecture.mapper';

const DYNAMODB_TABLE = process.env.DYNAMODB_TABLE || ''
const architectureRepository = new DynamoDbArchitectureRepository(DYNAMODB_TABLE)


export const handler = async (body:any):Promise<APIGatewayProxyResult> => {
    try {
        const dto = ArchitectureMapper.toDto(JSON.parse(body))
        console.log(dto)
        const result = await new AddArchiTemplateUseCase(architectureRepository).execute(dto)
        console.log(result)
        return {
            statusCode: 201,
            body: JSON.stringify({
              message: "ARCHI ADD SUCCESSFULY",
              result: result,
              dto: dto,
              body : body
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

console.log(handler({ status: 0,
provider: 0,
description: "value3",
name: "aaaa",
resources: []}))
