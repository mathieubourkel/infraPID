import { Architecture } from "../../domain/entities/architecture"
import { Provider } from "../../domain/entities/provider"
import { beginTerraFormFileProvidersRequired } from "../../domain/enums/providers.enum"
import { IProvider, IProviders } from "../../domain/interfaces/provider.interface"
import { IResource } from "../../domain/interfaces/resource-attributes.interface"
import { BuildInfraRepository } from "../../domain/repositories/build-infra.repository"
import { ArchitectureDto } from "../dto/architecture.dto"
import { ProviderDto } from "../dto/provider.dto"
import { ArchitectureMapper } from "../mappers/architecture.mapper"

export class CreateFileInfraUseCase {

    constructor(private buildInfraRepository: BuildInfraRepository){}

    async execute(providersDto: ProviderDto[], architectureDto: ArchitectureDto): Promise<void> {
        let tmpFile: string = beginTerraFormFileProvidersRequired
        const architecture = ArchitectureMapper.toDomain(architectureDto)
        providersDto.map((provider: ProviderDto) => {
            tmpFile+= JSON.stringify(provider)
        })
        architecture.getAllResources().map((resource: IResource) => {
            tmpFile+= resource.buildResource()
        })
        console.log(tmpFile)
        await this.buildInfraRepository.saveTerraformFile(tmpFile)
    }
}