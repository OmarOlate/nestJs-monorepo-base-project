import { ResetPasswordSqlInputDto } from "./reset-password-sql-input.dto"

export type DeleteTemporaryPasswordDto = Readonly<{
    code: ResetPasswordSqlInputDto['code'];
}>