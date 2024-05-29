import { ArchitectureRepository } from "../../domain/repositories/architecture.repository"

export class GetOneArchiTemplateUseCase {

    constructor(private architectureRepository: ArchitectureRepository){}

    async execute(architectureId: number): Promise<void> {
        await this.architectureRepository.getOneArchiById(architectureId)
    }
}