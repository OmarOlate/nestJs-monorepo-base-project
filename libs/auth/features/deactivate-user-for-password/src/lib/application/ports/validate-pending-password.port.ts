import { DeactivateUserForPasswordInputDto } from "../../domain";

export type ValidatePendingPasswordService = {
    execute(
        input: DeactivateUserForPasswordInputDto
    ): Promise<void>
}

export const VALIDATE_PENDING_PASSWORD_SERVICE = Symbol('ValidatePendingPasswordService');