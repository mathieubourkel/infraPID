import { Account } from "../../../domain/entities/account";
import { AccountRepository } from "../../../domain/repositories/account.repository";

export class CreateAccountUseCase {
    constructor(private readonly accountRepository: AccountRepository) {}

    async handle(accountDto:Account) {
        return this.accountRepository.save(accountDto)
    }
}