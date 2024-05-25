
import { TemplateRepository } from "../../../deployment/src/domain/repositories/template.repository";
import { PrismaClient, Template} from '@prisma/client'

export class PrismaTemplateRepository implements TemplateRepository {
    prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async getAllTemplate<Template>(): Promise<Template[]> {
        return await this.prisma.template.findMany()
    }

    async getOneTemplate(id: number): Promise<Template> {
        return await this.prisma.template.findFirst()
    }

    async save<CreateTemplateDto>(template: CreateTemplateDto): Promise<void> {
        return await this.prisma.template.create()
    }

    async update<CreateTemplateDto>(template: CreateTemplateDto): Promise<void> {
        return await this.prisma.template.update()
    }

    async delete(template: CreateTemplateDto): Promise<void> {
        return await this.prisma.template.delete()
    }
}