import { Template } from "../entities/template";

export interface TemplateRepository {
    save(template: Template): void;
    getAllTemplate(): Template[];
    getOneTemplate(idTemplate: number): Template;
    update(template: Template): Template;
    delete(template: Template): void;
}