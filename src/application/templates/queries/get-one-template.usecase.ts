import { Template } from "../../../domain/entities/template";
import { TemplateRepository } from "../../../domain/repositories/template.repository";
import { IQueryUseCase } from "../../config/IQueryUseCase.interface";
import { TemplateResponseDto } from "../../deployment/dto/template-response.dto";

export class GetOneTemplateUseCase implements IQueryUseCase<number, Template> {
    constructor(
        private readonly templateRepository: TemplateRepository
    ) {}

    async execute(id:number): Promise<Template | null>{
        return this.templateRepository.getOneTemplate(id)
    }
}