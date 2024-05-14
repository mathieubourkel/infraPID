import { CloudCred } from "../entities/cloud-cred";

export interface CloudCredRepository {
    save(cloudCred: CloudCred): void;
    getByIdUser(idUser:string): CloudCred;
    update(cloudCred: CloudCred): CloudCred;
    delete(cloudCred: CloudCred): CloudCred;
}