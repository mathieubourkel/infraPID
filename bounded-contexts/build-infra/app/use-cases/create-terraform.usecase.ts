import { beginTerraFormFileProvidersRequired } from "../../domain/enums/providers.enum"
import { BuildInfraRepository } from "../../domain/repositories/build-infra.repository"
import { ProviderDto } from "../dto/provider.dto"
import { ResourceDto } from "../dto/resource.dto"
import { ProviderMapper } from "../mappers/provider.mapper"
import { ResourceMapper } from "../mappers/resource.mapper"

export class CreateFileInfraUseCase {

    constructor(private buildInfraRepository: BuildInfraRepository){}

    async execute(providersDto: ProviderDto[], resourcesDto: ResourceDto[]): Promise<void> {
        let tmpFile: string = beginTerraFormFileProvidersRequired
        providersDto.map((providerDto: ProviderDto) => {
            const provider = ProviderMapper.toDomaine(providerDto)
            tmpFile+= provider.buildProvider()
        })
        resourcesDto.map((resourceDto: ResourceDto) => {
            const resource = ResourceMapper.toDomaine(resourceDto)
            tmpFile+= resource.buildResource()
        })
        await this.buildInfraRepository.saveTerraformFile(tmpFile)
    }
}