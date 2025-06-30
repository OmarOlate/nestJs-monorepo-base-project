import { FindNewUserOutputDto, NewUserPasswordValidateInputDto } from "../../domain"

export type FindNewUserService = {
    execute(
        {email}: NewUserPasswordValidateInputDto
    ): Promise<Readonly<FindNewUserOutputDto>>
}

export const FIND_NEW_USER_SERVICE = Symbol('FindNewUserService');