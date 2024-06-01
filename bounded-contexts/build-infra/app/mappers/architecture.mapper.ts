import { Architecture } from "../../domain/entities/architecture";
import { ArchitectureDto } from "../dto/architecture.dto";

export class ArchitectureMapper {
    static toDomain(dto: any): Architecture {
        return new Architecture(dto.status, dto.provider, dto.description, dto.name, dto.resources)
    }

    static toDomainWithId(dto: any): Architecture {
        return new Architecture(dto.status, dto.provider, dto.description, dto.name, dto.resources, dto.id)
    }

    static toDto(body: any): ArchitectureDto{
        return new ArchitectureDto(body.status, body.provider, body.description, body.name, body.resources)
    }

    static toDtoWithId(body: any): ArchitectureDto{
        return new ArchitectureDto(body.status, body.provider, body.description, body.name, body.resources, body.id)
    }
}