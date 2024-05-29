import { ArchitectureRepository } from "../../domain/repositories/architecture.repository"

export class GetArchiTemplateByOptionsUseCase {

    constructor(private architectureRepository: ArchitectureRepository){}

    async execute(options: {}): Promise<void> {
        await this.architectureRepository.getArchisByOptions(options)
    }
}