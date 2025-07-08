import { NewUserPasswordInputDto } from "../../domain"

export type NewUserPasswordValidateService = {
    execute(
        input: NewUserPasswordInputDto
    ): Promise<void>
}

export const NEW_USER_PASSWORD_VALIDATE_SERVICE = Symbol('NewUserPasswordValidateService');