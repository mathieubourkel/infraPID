import { CloudCred } from "../entities/cloud-cred";

export interface CloudCredRepository {
    save(cloudCred: CloudCred): void;
    getByIdUser<T>(idUser: number, options?: T): Promise<CloudCred[]>;
    getOneById<T>(id: number, options?: T): Promise<CloudCred>
    update(cloudCred: CloudCred): void;
    delete(cloudCred: CloudCred): void;
}