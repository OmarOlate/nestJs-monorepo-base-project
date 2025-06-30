import { ExternalDeactivateUserForPasswordInputDto } from "../../domain"
import { GetUserInformationOutputDto } from "../../domain/dtos/get-user-information-output.dto"

export type GetUserInformationService = {
    execute(input: ExternalDeactivateUserForPasswordInputDto):
    Promise<Readonly<GetUserInformationOutputDto>>
}

export const GET_USER_INFORMATION_SERVICE = Symbol('GetUserInformationService');