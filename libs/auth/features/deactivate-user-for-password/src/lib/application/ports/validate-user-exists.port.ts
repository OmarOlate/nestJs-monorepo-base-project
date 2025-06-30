import { DeactivateUserForPasswordInputDto } from "../../domain"

export type ValidateUserExistsService = {
    execute(input: DeactivateUserForPasswordInputDto): Promise<void>
}

export const VALIDATE_USER_EXISTS_SERVICE = Symbol('ValidateUserExistsService');