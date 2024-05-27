import { FastifyRequest } from "fastify"
import { FileSystemArchitectureRepository } from "../../../driven/toFileSystem/create-terraform-file"
import { Provider } from "../../../../bounded-contexts/build-infra/domain/entities/provider"
import { Architecture } from "../../../../bounded-contexts/build-infra/domain/entities/architecture"
import { CreateFileInfraUseCase } from "../../../../bounded-contexts/build-infra/app/use-cases/create-terraform.usecase"
import { ArchitectureDto } from "../../../../bounded-contexts/build-infra/app/dto/architecture.dto"
import { ProviderDto } from "../../../../bounded-contexts/build-infra/app/dto/provider.dto"

export class ArchitectureController {

    private fileSystemRepository = new FileSystemArchitectureRepository()
    private createFileInfraUseCase = new CreateFileInfraUseCase(this.fileSystemRepository)

    getAll(){
       throw new Error("Not Implemented")
    }

    getFreeTemplates(){
        throw new Error("Not Implemented")
    }

    async createInfra(req: FastifyRequest<{Body: {providers: ProviderDto[], architecture: ArchitectureDto}}>): Promise<string>{
        try {
            const {providers, architecture} = req.body
            await this.createFileInfraUseCase.execute(providers, architecture)
            return "FILE CREATED"
        } catch (error) {
            throw error
        }   
    }

    getPayingTemplates(){
        throw new Error("Not Implemented")
    }

    getAlreadyBoughtTemplates(){
        throw new Error("Not Implemented")
    }

    getNotBoughtTemplates(){
        throw new Error("Not Implemented")
    }

    add(){
        throw new Error("Not Implemented")
    }

    modify(){
        throw new Error("Not Implemented")
    }

    remove(){
        throw new Error("Not Implemented")
    }

}