import { Resource } from "../../domain/entities/resource";
import { ResourceEnum } from "../../domain/enums/resources.enum";
import { ResourceDto } from "../dto/resource.dto";

export class ResourceMapper {
    static toDomaine(dto: ResourceDto): Resource<ResourceEnum> {
        return new Resource(dto.resourceType, dto.attributes)
    }

    static toDto(payload: ResourceDto): ResourceDto {
        return new ResourceDto(payload.resourceType, payload.attributes)
    }
}