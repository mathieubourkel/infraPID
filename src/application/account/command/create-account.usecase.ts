import { Account } from "../../../domain/entities/account";
import { AccountRepository } from "../../../domain/repositories/account.repository";
import { ICommandUseCase } from "../../config/ICommandUseCase.interface";

export class CreateAccountUseCase implements ICommandUseCase<Account> {
    constructor(private readonly accountRepository: AccountRepository) {}

    async execute(accountDto:Account): Promise<void>{
        return this.accountRepository.save(accountDto)
    }
}