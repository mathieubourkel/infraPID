import { Template } from "../entities/template";

export interface TemplateRepository {
    save(template: Template): void;
    update(template: Template): void;
    delete(template: Template): Promise<void>;
    getAllTemplate<T, O>(options?: O): Promise<T[]>;
    getOneTemplate<O>(id: number, options?: O): Promise<Template>;
}