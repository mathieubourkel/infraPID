import { ArchitectureStatus } from "../../domain/enums/architecture.status.enum";
import { ProvidersEnum } from "../../domain/enums/providers.enum";
import { IResources } from "../../domain/interfaces/resource-attributes.interface";

export class ArchitectureDto {
    constructor(
        public status: ArchitectureStatus,
        public provider: ProvidersEnum,
        public description: string,
        public name: string,
        public resources: IResources,
        public id?:number
    ){}

}