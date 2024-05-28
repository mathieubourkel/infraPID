import { Provider } from "../../domain/entities/provider";
import { ProvidersEnum } from "../../domain/enums/providers.enum";
import { ProviderDto } from "../dto/provider.dto";

export class ProviderMapper {
    static toDomaine(dto: ProviderDto): Provider<ProvidersEnum> {
        return new Provider(dto.name, dto.attributes)
    }

    static toDto(payload: ProviderDto): ProviderDto {
        return new ProviderDto(payload.name, payload.attributes)
    }
}