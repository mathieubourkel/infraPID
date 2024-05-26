import { Architecture } from "../domain/entities/architecture"
import { BaseResource } from "../domain/entities/base.resource"
import { Provider } from "../domain/entities/provider"
import { ArchitectureRepository } from "../domain/repositories/architecture.repository"

export class CreateTerraformUseCase {

    constructor(private architectureRepository: ArchitectureRepository){}

    async execute(providers: Provider[], architecture: Architecture): Promise<void> {
        let tmpFile: string = ''
        providers.map((provider: Provider) => {
            tmpFile+= JSON.stringify(provider)
        })
        architecture.getAllResources().map((resource: BaseResource) => {
            tmpFile+= resource.buildResource()
        })
        
        this.architectureRepository.createTerraformFile(tmpFile)
    }
}