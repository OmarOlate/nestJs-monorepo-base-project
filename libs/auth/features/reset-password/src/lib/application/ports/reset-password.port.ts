import { ResetPasswordInputDto, ResetPasswordSqlInputDto } from '../../domain';

export type ResetPasswordService = {
  resetPassword(input: ResetPasswordSqlInputDto): Promise<void>;
};

export const RESET_PASSWORD_SERVICE = Symbol('ResetPasswordService');
