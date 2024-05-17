export interface TemplateRepository {

    save<T>(template: T): void;
    update<T>(template: T): void;
    delete(template: string): void;

    getAllTemplate<T>(): Promise<T[]>;
    getOneTemplate<T>(idTemplate: string): Promise<T | null>;
}