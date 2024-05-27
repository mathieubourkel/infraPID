import { ResourceEnum, ResourceMap } from "../../domain/enums/resources.enum";
import { ResourceAttributes } from "../../domain/interfaces/resource-attributes.interface";

export interface RessourceDto {

    resourceType: typeof ResourceMap[ResourceEnum], 
    name: string, 
    attributes: ResourceAttributes[ResourceEnum]

}