import { DeleteTemporaryPasswordDto } from "../../domain"

export type DeleteTemporaryPasswordService = {
    execute(
        input: DeleteTemporaryPasswordDto
    ): Promise<void>;
}

export const DELETE_TEMPORARY_PASSWORD_SERVICE = Symbol('DeleteTemporaryPasswordService')