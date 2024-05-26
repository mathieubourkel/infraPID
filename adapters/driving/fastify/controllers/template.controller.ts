import { PrismaTemplateRepository } from "../../../driven/prisma/template.prisma.repository"

export class TemplateController {

    repositoryPG = new PrismaTemplateRepository()


    getAll(){
       throw new Error("Not Implemented")
    }

    getFreeTemplates(){
        throw new Error("Not Implemented")
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