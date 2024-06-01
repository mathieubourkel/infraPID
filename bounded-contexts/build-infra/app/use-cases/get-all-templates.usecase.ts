import { Architecture } from "../../domain/entities/architecture"
import { ArchitectureRepository } from "../../domain/repositories/architecture.repository"

export class GetAllArchiTemplateUseCase {

    constructor(private architectureRepository: ArchitectureRepository){}

    async execute(): Promise<Architecture[]> {
        return await this.architectureRepository.getAllArchis()
    }
}