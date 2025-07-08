import { GetUserDataOutputDto } from "./get-user-data-output.dto"
import { ResetPasswordInputDto } from "./reset-password-input.dto";

export type VerifyTemporaryPasswordInput = Readonly<{
    code: GetUserDataOutputDto['code'];
    currentPassword: ResetPasswordInputDto['currentPassword']
}>