import { ResetPasswordInputDto } from '../../domain';

export type ResetPasswordService = {
  resetPassword(input: ResetPasswordInputDto): Promise<void>;
};

export const RESET_PASSWORD_SERVICE = Symbol('ResetPasswordService');
