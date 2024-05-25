import { Profile } from "../entities/profile";

export interface ProfileRepository {
    save(profile: Profile): void;
    getByIdUser(idUser: number): Promise<Profile[]>
    getOneById(id: number): Promise<Profile>;
    update(profile: Profile): void;
    delete(profile: Profile): void;
}