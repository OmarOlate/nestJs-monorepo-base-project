export type ResetPasswordInputDto = Readonly<{
  email: string;
  currentPassword: string;
  newPassword: string;
}>;
