import { Account } from "../entities/account";

export interface AccountRepository {
    save(account: Account): void;
    get(account: Account): Account;
    update(account: Account): Account;
    delete(account: Account): void;
}