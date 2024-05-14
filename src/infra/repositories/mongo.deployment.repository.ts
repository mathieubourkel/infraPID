import { Deployment } from "../../domain/entities/deployment";
import { DeploymentRepository } from "../../domain/repositories/deployment.repository";
import { Db, Collection } from "mongodb";

export class MongoDeploymentRepository implements DeploymentRepository {
    private collection: Collection<Deployment>;

    constructor(private db: Db) {
        this.collection = this.db.collection<Deployment>("deployments");
    }

    async getDeploymentsByIdUser(idUser: string): Promise<Deployment[]> {
        return await this.collection.find({idUser}).toArray();
    }

    async getDeploymentsByIdTemplate(idUser: string): Promise<Deployment[]> {
        return await this.collection.find({idUser}).toArray();
    }

    async save(deployment: Deployment): Promise<void> {
        await this.collection.insertOne(deployment);
    }

    async update(deployment: Deployment): Promise<void> {
        await this.collection.updateOne({ id: deployment.id }, { $set: deployment });
    }

    async deleteById(id: string): Promise<void> {
        await this.collection.deleteOne({ id });
    }
}