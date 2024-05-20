import { Transaction } from "../entities/transaction";

export interface TransactionRepository {
    save(transaction: Transaction): void;
    getTransactionsByIdUser(idUser:number): Promise<Transaction[]>
    getAll(): Promise<Transaction[]>
    getOneById(id: number): Promise<Transaction>
    delete(transaction: Transaction): void
    update(transaction: Transaction): void
}