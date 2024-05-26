import { Deployment } from "../entities/deployment";

export interface DeploymentRepository {
    save(deployment: Deployment): void;
    getDeploymentsByIdUser(idUser: number): Promise<Deployment[]>;
    getDeploymentsByIdTemplate(idTemplate: number): Promise<Deployment[]>;
    getDeploymentByStatus(status: number): Promise<Deployment[]>
    getOneById(id: number): Promise<Deployment>
    update(deployment: Deployment): void;
    delete(deployment: Deployment): void;
}