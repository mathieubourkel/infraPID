import { Deployment } from "../../../domain/entities/deployment";
import { DeploymentRepository } from "../../../domain/repositories/deployment.repository";

export class GetDeploymentsFromUser {
    constructor(private deploymentRepository: DeploymentRepository) {}

    async execute(id: string): Promise<Deployment[]> {
        return await this.deploymentRepository.getDeploymentsByIdUser(id)
    }
}