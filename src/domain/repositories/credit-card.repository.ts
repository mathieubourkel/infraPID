import { CreditCard } from "../entities/credit-card";

export interface CreditCardRepository {
    save(creditCard: CreditCard): void;
    getByIdUser(idUser: number): Promise<CreditCard[]>;
    getOneById(id: number): Promise<CreditCard>
    update(creditCard: CreditCard): void;
    delete(creditCard: CreditCard): void;
}