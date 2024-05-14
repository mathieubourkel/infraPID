import { Account } from "../entities/account";
import { Deployment } from "../entities/deployment";

export interface DeploymentRepository {
    save(deployment: Deployment): void;
    getDeploymentsByIdUser(idUser: number): Deployment[];
    getDeploymentsByIdTemplate(idTemplate: number): Deployment[];
    update(account: Account): Account;
    delete(account: Account): void;
}