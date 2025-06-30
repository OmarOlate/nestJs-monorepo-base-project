import { GetUserDataOutputDto, VerifyTemporaryPasswordInput } from "../../domain"

export type ValidateTemporaryPasswordService= {
    execute(
        input: VerifyTemporaryPasswordInput
    ): Promise<void>
}

export const VALIDATE_TEMPORARY_PASSWORD_SERVICE = Symbol('ValidateTemporaryPasswordService');