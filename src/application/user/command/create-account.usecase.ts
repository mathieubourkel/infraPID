import { User } from "../../../domain/entities/user";
import { ICommandUseCase } from "../../config/ICommandUseCase.interface";

export class CreateUserUseCase implements ICommandUseCase<User> {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(createUserDto: CreateUserDto): Promise<void>{
        const userFromDomain = new User(createUserDto)
        await this.userRepository.save(userFromDomain)
    }
}