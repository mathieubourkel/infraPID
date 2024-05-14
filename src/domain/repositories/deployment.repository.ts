import { Deployment } from "../entities/deployment";

export interface DeploymentRepository {
    save(deployment: Deployment): void;
    getDeploymentsByIdUser(idUser: string): Promise<Deployment[]>;
    getDeploymentsByIdTemplate(idTemplate: string): Promise<Deployment[]>;
    update(deployment: Deployment): void;
    deleteById(id: string): void;
}