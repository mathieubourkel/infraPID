import { Architecture } from "../entities/architecture";

export interface ArchitectureRepository {
    addTemplateToPersistence(): void;
    removeTemplateFromPersistence(): void;
    updateTemplateFromPersistence(): void;
    
    getArchisByStatus(): Architecture[]
    getArchisByProvider(): Architecture[]
    getAllArchis(): Architecture[]
    getOneArchi(): Architecture
}