import { Architecture } from "../entities/architecture";

export interface ArchitectureRepository {
    addTemplateToPersistence(architecture: Architecture): any
    removeTemplateFromPersistence(id: string | number): any;
    updateTemplateFromPersistence(id: string | number): any;
    
    getArchisByOptions(options: {}): Architecture[] | Promise<Architecture[]>
    getAllArchis(): Architecture[] | Promise<Architecture[]>
    getOneArchiById(id: string | number): Architecture | Promise<Architecture>
}