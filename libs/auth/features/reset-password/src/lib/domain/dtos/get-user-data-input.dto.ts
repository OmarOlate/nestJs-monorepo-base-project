import { ResetPasswordInputDto } from "./reset-password-input.dto"

export type GetUserDataInputDto = Readonly<{
    email: ResetPasswordInputDto['email'];
}>