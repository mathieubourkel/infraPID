import { ArchitectureRepository } from '../../../../bounded-contexts/build-infra/domain/repositories/architecture.repository';
import { Architecture } from '../../../../bounded-contexts/build-infra/domain/entities/architecture';
import { DynamoDBDocumentClient, ScanCommand, PutCommand, GetCommand, DeleteCommand, DeleteCommandOutput, UpdateCommandOutput} from "@aws-sdk/lib-dynamodb";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

export class DynamoDbArchitectureRepository implements ArchitectureRepository {

    private dynamo = DynamoDBDocumentClient.from(new DynamoDBClient())

    constructor(private tableName: string){}

    async addTemplateToPersistence(architecture: Architecture):Promise<UpdateCommandOutput> {
        try {
            const command = new PutCommand({TableName: this.tableName, Item: architecture})
            return await this.dynamo.send(command)
        } catch (error) {
            console.error('Error adding item to DynamoDB:', error);
            throw error
        }
    }

    async removeTemplateFromPersistence(id: string): Promise<DeleteCommandOutput> {
        try {
            const command = new DeleteCommand({TableName: this.tableName, Key: {id}})
            return await this.dynamo.send(command)
        } catch (error) {
            console.error('Error deleting item to DynamoDB:', error);
            throw error;
        }
    }

    async updateTemplateFromPersistence(id: string): Promise<any> {
        throw "Method Not Implemented"
    }

    async getArchisByOptions(options: {}): Promise<Architecture[]> {
        return []
    }

    async getAllArchis(): Promise<Architecture[]> {
        try {
            const command = new ScanCommand({TableName: this.tableName})
            const result = await this.dynamo.send(command)
            return result.Items as Architecture[]
        } catch (error) {
            console.error('Error getting all items from DynamoDB:', error);
            throw error;
        }
    }

    async getOneArchiById(id: string): Promise<Architecture> {
        try {
            const command = new GetCommand({TableName: this.tableName, Key: {id}})
            const result = await this.dynamo.send(command)
            return result.Item as Architecture
        } catch (error) {
            console.error('Error getting item from DynamoDB:', error);
            throw error;
        }
    }
}