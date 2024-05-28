import { ResourceEnum } from "../../domain/enums/resources.enum";
import { ResourceAttributes } from "../../domain/interfaces/resource-attributes.interface";

export class ResourceDto {

    constructor(
        public resourceType: ResourceEnum,
        public attributes: ResourceAttributes[ResourceEnum],
        public name?: string
    ){}

    

}