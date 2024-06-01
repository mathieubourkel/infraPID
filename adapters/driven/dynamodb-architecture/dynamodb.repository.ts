import { DynamoDB } from 'aws-sdk';
import { ArchitectureRepository } from '../../../bounded-contexts/build-infra/domain/repositories/architecture.repository';
import { Architecture } from '../../../bounded-contexts/build-infra/domain/entities/architecture';


export class DynamoDbArchitectureRepository implements ArchitectureRepository {

    private dynamo = new DynamoDB.DocumentClient();

    constructor(private tableName: string){}

    async addTemplateToPersistence(architecture: Architecture):Promise<DynamoDB.DocumentClient.PutItemOutput> {
        try {
            return await this.dynamo.put({TableName: this.tableName, Item: architecture}).promise()
        } catch (error) {
            console.error('Error adding item to DynamoDB:', error);
            throw error
        }
    }

    async removeTemplateFromPersistence(id: string): Promise<DynamoDB.DocumentClient.DeleteItemOutput> {
        try {
            return await this.dynamo.delete({TableName: this.tableName, Key: {id}}).promise()
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
            const result = await this.dynamo.scan({TableName: this.tableName}).promise()
            return result.Items as Architecture[]
        } catch (error) {
            console.error('Error getting all items from DynamoDB:', error);
            throw error;
        }
    }

    async getOneArchiById(id: string): Promise<Architecture> {
        try {
            const result = await this.dynamo.get({TableName: this.tableName, Key: {id}}).promise()
            return result.Item as Architecture
        } catch (error) {
            console.error('Error getting item from DynamoDB:', error);
            throw error;
        }
    }
}