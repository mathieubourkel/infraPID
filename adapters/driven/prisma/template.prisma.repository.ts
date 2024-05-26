
import { PrismaClient } from '@prisma/client'
export class PrismaTemplateRepository {
    prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    // async getAllTemplate<Template>(): Promise<Template[]> {
    //     return await this.prisma.template.findMany()
    // }

    // async getOneTemplate(id: number): Promise<any> {
    //     return await this.prisma.template.findFirst()
    // }

    // async save<CreateTemplateDto>(template: CreateTemplateDto): Promise<void> {
    //     return await this.prisma.template.create()
    // }

    // async update<CreateTemplateDto>(template: CreateTemplateDto): Promise<void> {
    //     return await this.prisma.template.update()
    // }

}