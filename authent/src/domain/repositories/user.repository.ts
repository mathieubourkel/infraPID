import { User } from "../entities/user";

export interface UserRepository {
    save(user: User): void;
    getOneById(id: number): Promise<User>;
    getOneByEmail(email: string): Promise<User>;
    update(user: User): void;
    delete(user: User): void;
}