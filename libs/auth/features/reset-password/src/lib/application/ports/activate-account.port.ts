import { GetUserDataOutputDto } from "../../domain"

export type ActivateAccountService = {
    execute(
        input: GetUserDataOutputDto['code'] 
    ): Promise<void>;
}

export const ACTIVATE_ACCOUNT_SERVICE = Symbol('ActivateAccountService');