import { Transaction } from "../entities/transaction";

export interface TransactionRepository {
    save(transaction: Transaction): void;
    getByIdUser(idUser:string): Transaction[]
}