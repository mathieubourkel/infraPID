import { FastifyRequest } from "fastify"
import { AddArchiTemplateUseCase } from "../../../../bounded-contexts/build-infra/app/use-cases/add-archi-template.usecase"
import { GetAllArchiTemplateUseCase } from "../../../../bounded-contexts/build-infra/app/use-cases/get-all-templates.usecase"
import { UpdateArchiTemplateUseCase } from "../../../../bounded-contexts/build-infra/app/use-cases/update-template.usecase"
import { RemoveArchiTemplateUseCase } from "../../../../bounded-contexts/build-infra/app/use-cases/remove-template.usecase"
import { GetOneArchiTemplateUseCase } from "../../../../bounded-contexts/build-infra/app/use-cases/get-one-template.usecase"
import { GetArchiTemplateByOptionsUseCase } from "../../../../bounded-contexts/build-infra/app/use-cases/get-templates-by-options.usecase"
import { ArchitectureStatus } from "../../../../bounded-contexts/build-infra/domain/enums/architecture.status.enum"


export class ArchitectureController {
    private dbRepository = "ew DB"
    private addArchitectureTemplate = new AddArchiTemplateUseCase(this.dbRepository)
    private getAllArchitectureTemplate = new GetAllArchiTemplateUseCase(this.dbRepository)
    private updateArchitectureTemplate = new UpdateArchiTemplateUseCase(this.dbRepository)
    private removeArchitectureTemplate = new RemoveArchiTemplateUseCase(this.dbRepository)
    private getOneArchitectureTemplate = new GetOneArchiTemplateUseCase(this.dbRepository)
    private getByOptionsArchitectureTemplate = new GetArchiTemplateByOptionsUseCase(this.dbRepository)

    async getAll(){
       try {
        await this.getAllArchitectureTemplate.execute()
       } catch (error) {
        throw error
       }
    }

    // async getArchiTemplateById(req: FastifyRequest){
    //     try {
    //         await this.getOneArchitectureTemplate.execute(req.params.id)
    //     } catch (error) {
    //         throw error
    //     }
    // }

    async getFreeTemplates(){
        try {
            await this.getByOptionsArchitectureTemplate.execute({status: ArchitectureStatus.FREE_TIERS})
        } catch (error) {
            throw error
        }
    }

    async getPayingTemplates(){
        try {
            await this.getByOptionsArchitectureTemplate.execute({status: ArchitectureStatus.PAYING})
        } catch (error) {
            throw error
        }
    }

    // async add(req: FastifyRequest<{Body:any}>){
    //     try {
    //         await this.addArchitectureTemplate.execute(req.body)
    //     } catch (error) {
    //         throw error
    //     }
    // }

    // async modify(){
    //     try {
    //         await this.updateArchitectureTemplate.execute(req.body)
    //     } catch (error) {
    //         throw error
    //     }
    // }

    // async remove(){
    //     try {
    //         await this.removeArchitectureTemplate.execute(req.body)
    //     } catch (error) {
    //         throw error
    //     }
    // }

}