import { ArchitectureRepository } from "../../domain/repositories/architecture.repository"

export class RemoveArchiTemplateUseCase {

    constructor(private architectureRepository: ArchitectureRepository){}

    async execute(architectureId: string): Promise<void> {
        return await this.architectureRepository.removeTemplateFromPersistence(architectureId)
    }
}