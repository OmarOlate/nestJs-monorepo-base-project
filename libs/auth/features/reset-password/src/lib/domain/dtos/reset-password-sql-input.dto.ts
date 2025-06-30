import { GetUserDataOutputDto } from "./get-user-data-output.dto";
import { ResetPasswordInputDto } from "./reset-password-input.dto"

export type ResetPasswordSqlInputDto = Readonly<{
    newPassword: ResetPasswordInputDto['newPassword'];
    code: GetUserDataOutputDto['code'];
}>