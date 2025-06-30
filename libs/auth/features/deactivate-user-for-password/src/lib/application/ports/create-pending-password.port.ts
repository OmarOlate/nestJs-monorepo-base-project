import { DeactivateUserForPasswordInputDto } from "../../domain";

export type CreatePendingPasswordService = {
    execute(
        input: DeactivateUserForPasswordInputDto
    ): Promise<void>
}

export const CREATE_PENDING_PASSWORD_SERVICE = Symbol('CreatePendingPasswordService');