import { DeactivateUserForPasswordInputDto } from "../../domain"

export type DeactivateUserForPasswordService = {
    execute(input: DeactivateUserForPasswordInputDto): Promise<void>
}

export const DEACTIVATE_USER_FOR_PASSWORD_SERVICE = Symbol('DeactivateUserForPasswordService');