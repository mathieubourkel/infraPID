import { Architecture } from "../../domain/entities/architecture"
import { ArchitectureRepository } from "../../domain/repositories/architecture.repository"

export class GetArchiTemplateByOptionsUseCase {

    constructor(private architectureRepository: ArchitectureRepository){}

    async execute(options: {}): Promise<Architecture[]> {
        return await this.architectureRepository.getArchisByOptions(options)
    }
}