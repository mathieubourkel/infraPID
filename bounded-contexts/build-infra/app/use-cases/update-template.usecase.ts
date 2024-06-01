import { ArchitectureRepository } from "../../domain/repositories/architecture.repository"
import { ArchitectureDto } from "../dto/architecture.dto"
import { ArchitectureMapper } from "../mappers/architecture.mapper"

export class UpdateArchiTemplateUseCase {

    constructor(private architectureRepository: ArchitectureRepository){}

    async execute(architectureDto: ArchitectureDto): Promise<void> {
        const architecture = ArchitectureMapper.toDomain(architectureDto)
        await this.architectureRepository.updateTemplateFromPersistence(3)
    }
}