import { ArchitectureRepository } from "../../domain/repositories/architecture.repository"
import { ArchitectureDto } from "../dto/architecture.dto"
import { ArchitectureMapper } from "../mappers/architecture.mapper"

export class AddArchiTemplateUseCase {

    constructor(private architectureRepository: ArchitectureRepository){}

    async execute(architectureDto: ArchitectureDto): Promise<any> {
        try {
            const architecture = ArchitectureMapper.toDomain(architectureDto)
        return await this.architectureRepository.addTemplateToPersistence(architecture)
        } catch (error) {
            throw error
        }
        
    }
}