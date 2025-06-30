import { GetUserDataInputDto, GetUserDataOutputDto } from "../../domain"

export type GetUserDataService = {
    execute(
        input: GetUserDataInputDto
    ): Promise<GetUserDataOutputDto>
}

export const GET_USER_DATA_SERVICE = Symbol('GetUserDataService')