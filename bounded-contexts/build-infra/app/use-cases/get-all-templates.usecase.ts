import { ArchitectureRepository } from "../../domain/repositories/architecture.repository"

export class GetAllArchiTemplateUseCase {

    constructor(private architectureRepository: ArchitectureRepository){}

    async execute(): Promise<void> {
        await this.architectureRepository.getAllArchis()
    }
}