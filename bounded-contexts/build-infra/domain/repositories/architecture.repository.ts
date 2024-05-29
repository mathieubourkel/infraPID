import { Architecture } from "../entities/architecture";
import { ArchitectureStatus } from "../enums/architecture.status.enum";
import { ProvidersEnum } from "../enums/providers.enum";

export interface ArchitectureRepository {
    addTemplateToPersistence(architecture: Architecture): void;
    removeTemplateFromPersistence(architecture: Architecture): void;
    updateTemplateFromPersistence(architecture: Architecture): void;
    
    getArchisByOptions(options: {}): Architecture[]
    getAllArchis(): Architecture[]
    getOneArchiById(id: number): Architecture
}