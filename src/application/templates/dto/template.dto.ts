import { Template } from "../../../domain/entities/template"

export type CreateTemplateDto = Pick<Template, 'id' | 'name' | 'command' | 'status' | 'date'>
export type GetTemplateDto = Pick<Template, 'id' | 'name' | 'command' | 'status' | 'date'>

