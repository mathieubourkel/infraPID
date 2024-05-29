import { FastifyRequest } from "fastify"
import { CreateFileInfraUseCase } from "../../../../bounded-contexts/build-infra/app/use-cases/create-terraform.usecase"
import { FileSystemArchitectureRepository } from "../../../driven/toFileSystem/create-terraform-file"
import { ProviderDto } from "../../../../bounded-contexts/build-infra/app/dto/provider.dto"
import { ResourceDto } from "../../../../bounded-contexts/build-infra/app/dto/resource.dto"

export class BuildController {

    private fileSystemRepository = new FileSystemArchitectureRepository()
    private createFileInfraUseCase = new CreateFileInfraUseCase(this.fileSystemRepository)

    async createFileInfra(req: FastifyRequest<{Body: {providers: ProviderDto[], resources: ResourceDto[]}}>): Promise<string>{
        try {
            const {providers, resources} = req.body
            await this.createFileInfraUseCase.execute(providers, resources)
            return "FILE CREATED"
        } catch (error) {
            throw error
        }   
    }
}