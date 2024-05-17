import { TemplateRepository } from "../../domain/repositories/template.repository";
import { PrismaClient } from '@prisma/client'

export class PrismaTemplateRepository implements TemplateRepository {
    prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async getAllTemplate<GetTemplateDto>(): Promise<GetTemplateDto[]> {
        return await this.prisma.template.findMany()
    }

    async getOneTemplate<GetTemplateDto>(idUser: string): Promise<GetTemplateDto |null> {
        return await this.prisma.template.findMany()
    }

    async save<CreateTemplateDto>(template: CreateTemplateDto): Promise<void> {
        return await this.prisma.template.create()
    }

    async update<CreateTemplateDto>(template: CreateTemplateDto): Promise<void> {
        return await this.prisma.template.update()
    }

    async delete(id: string): Promise<void> {
        return await this.prisma.template.delete()
    }
}