export type ResetPasswordInputDto = Readonly<{
  code: string;
  currentPassword?: string;
  newPassword: string;
}>;
