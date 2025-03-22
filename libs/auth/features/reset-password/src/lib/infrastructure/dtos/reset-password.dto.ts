import { ResetPasswordInputDto } from '../../domain';

export type ResetPasswordDto = ResetPasswordInputDto &
  Readonly<{
    id: number;
  }>;
