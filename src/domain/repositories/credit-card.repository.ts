import { CreditCard } from "../entities/credit-card";

export interface CreditCardRepository {
    save(creditCard: CreditCard): void;
    getByIdUser(idUser:string): CreditCard;
    update(creditCard: CreditCard): CreditCard;
    delete(creditCard: CreditCard): CreditCard;
}