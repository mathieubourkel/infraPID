import { FastifyReply, FastifyRequest } from "fastify"
import { GetOneTemplateUseCase } from "../../../application/templates/queries/get-one-template.usecase"
import { PrismaTemplateRepository } from "../../../driven/prisma/template.prisma.repository"

export class TemplateController {

    repositoryPG = new PrismaTemplateRepository()
    getOneTemplateUseCase = new GetOneTemplateUseCase(this.repositoryPG)


    getAll(){
       throw new Error("Not Implemented")
    }

    getFreeTemplates(){
        throw new Error("Not Implemented")
    }

    async getOneById(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.params as { id: number };
        const user = await this.getOneTemplateUseCase.execute(id)
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