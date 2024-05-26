import { TemplateRepository } from "../../../domain/repositories/template.repository";
import { ICommandUseCase } from "../../config/ICommandUseCase.interface";
import { CreateTemplateDto } from "../../build-infra/domain/value-objects/template.dto";

export class CreateTemplateUseCase implements ICommandUseCase<CreateTemplateDto> {
    constructor(private readonly templateRepository: TemplateRepository<CreateTemplateDto>) {}

    async execute(templateDto:CreateTemplateDto): Promise<void>{
        return this.templateRepository.save(templateDto)
    }
}

// import { TemplateRepository } from '../../domain/repositories/template.repository';
// import { CreateTemplateDto } from '../../dto/template.dto';
// import { TemplateMapper } from '../../mappers/template.mapper';

// export class UpdateTemplateUseCase {
//     constructor(private readonly templateRepository: TemplateRepository) {}

//     async execute(templateDto: CreateTemplateDto): Promise<void> {
//         // Récupérer l'entité existante depuis le repository
//         const existingTemplate = await this.templateRepository.getOneTemplate(templateDto.id);
//         if (!existingTemplate) {
//             throw new Error('Template not found');
//         }

//         // Appliquer les règles métier
//         const template = TemplateMapper.toTemplate(templateDto);
//         template.updateDescription(templateDto.description);

//         // Sauvegarder les changements
//         await this.templateRepository.update(templateDto);
//     }
// }