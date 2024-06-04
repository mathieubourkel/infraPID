import { Architecture } from "../../domain/entities/architecture"
import { ArchitectureRepository } from "../../domain/repositories/architecture.repository"

export class GetOneArchiTemplateUseCase {

    constructor(private architectureRepository: ArchitectureRepository){}

    async execute(architectureId: string): Promise<Architecture> {
        return await this.architectureRepository.getOneArchiById(architectureId)
    }
}